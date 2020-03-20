import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Close } from "styled-icons/evaicons-solid";
import { Address } from "../../config";
import { AWS } from "../../config";
import key from "../../Images/Key.svg";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
      error_login: false,
      button: false
    };
  }

  // 백한테 보낼 때 스토리지에 저장된 토큰 가져와서 전해주기
  // 구글 로그인 성공해서 토큰 받으면 메인페이지로 이동하고 넘어가는 동시에 컴디마에서 백한테 포스트로 토큰 전해주고
  // 사용자 정보 받아오기
  onSignIn = () => {
    const token = sessionStorage.getItem("google_token");

    fetch(`${Address}/user/google`, {
      method: "POST",
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("google res", res);

        this.props.history.push("/");
      });
    // token && this.props.history.push("/");
  };

  goToMain = () => {
    this.props.history.push("/");
  };

  goToPassport = () => {
    this.props.history.push("/about-passport");
  };

  // 입력값 저장
  handleInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.state.email && this.state.password && this.checkPw();
      }
    );
  };

  // email check
  handleEmail = () => {
    const { email } = this.state;
    if (email.length !== 0 && !(email.includes("@") && email.includes("."))) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        error: false
      });
    }
  };

  // password check
  checkPw = () => {
    const { password } = this.state;
    const check_num = /[0-9]/;
    const check_eng_big = /[a-z]/;
    const check_eng_small = /[A-Z]/;

    if (
      check_num.test(password) &&
      check_eng_big.test(password) &&
      check_eng_small.test(password) &&
      password.length >= 8
    ) {
      this.setState({
        button: true
      });
    } else {
      this.setState({
        button: false
      });
    }
  };

  // 로그인 패치
  loginFetch = () => {
    !this.state.error &&
      this.state.button &&
      fetch(`${Address}/user/sign-in`, {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(res => res.json())
        .then(res => {
          // console.log("로그인 res 도착", res);
          if (res.token) {
            // console.log("res status", res.token);
            sessionStorage.setItem("token", res.token);
            this.props.history.push("/sorting");
          } else {
            this.setState({
              error_login: true
            });
          }
        });
  };

  render() {
    const { error, error_login, button } = this.state;
    return (
      <LoginComponent>
        <Header>
          <CloseIcon onClick={this.goToMain} />
        </Header>
        <img src={key} alt="key"></img>
        <Container>
          <Text>
            Log in with
            <br /> Wizarding Passport
          </Text>
          <InputContainer>
            <Label>EMAIL ADDRESS</Label>
            <Input
              name="email"
              onChange={this.handleInput}
              onBlur={this.handleEmail}
              error={error}
            ></Input>
            <ErrorMessage error={error}>
              Please enter valid email address
            </ErrorMessage>
          </InputContainer>
          <InputContainer>
            <Label>PASSWORD</Label>
            <Input
              name="password"
              type="password"
              onChange={this.handleInput}
            ></Input>
            <ErrorMessage error_login={error_login}>
              We can't find this email and password
              <br />
              combination. Have you been Confunded?
              <br />
              Try again.
            </ErrorMessage>
          </InputContainer>

          <ButtonContainer>
            {/* 구글 소셜 로그인 */}
            <div
              class="g-signin2"
              data-onsuccess="onSignIn"
              onClick={() => this.onSignIn()}
            ></div>
            <Button button={button} onClick={this.loginFetch}>
              CONTINUE
            </Button>
          </ButtonContainer>

          <SignUp>
            <SignUpText>New to the Wizarding World? </SignUpText>
            <SignUpText link onClick={this.goToPassport}>
              Create an account
            </SignUpText>
          </SignUp>
        </Container>
      </LoginComponent>
    );
  }
}

const LoginComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #202020;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 154px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
`;

const CloseIcon = styled(Close)`
  color: #ffffff;
  width: 28px;
  height: 28px;
  position: absolute;
  cursor: pointer;
  right: 34px;
`;

const Container = styled.div`
  color: #ffffff;
  text-align: center;
  width: 315px;
  margin: 0 auto;
`;

const Text = styled.div`
  font-size: 36px;
  margin: 20px 0 40px;
  line-height: 55px;
`;

const InputContainer = styled.div`
  margin: 20px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: start;

  position: ${props => props.relative && "relative"};
`;

const Label = styled.label`
  font-size: 12px;
  letter-spacing: 1.5px;
  font-family: "Sofia Pro Bold";
`;

// 입력창 스타일
const Input = styled.input`
  width: 269px;
  height: 15px;
  font-size: 14px;
  color: #fff;
  background-color: hsla(0, 0%, 100%, 0.05);
  padding: 16px 20px;
  margin: 8px 0;
  border: 1px solid hsla(0, 0%, 59.2%, 0.2);
  border-radius: 3px;
  outline: none;
  transition: border 0.3s ease-in-out;
  transition-property: border;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  border-color: ${props => props.error && "#ff6e6e"};

  &:focus {
    border: 1px solid rgba(151, 151, 151, 0.7);
    transition: border 0.3s ease-in-out;
    transition-property: border;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
`;

const ErrorMessage = styled.div`
  font-family: "Sofia Pro Regular";
  font-size: 14px;
  color: #ff6e6e;
  text-align: start;
  display: none;

  display: ${props => props.error && "block"};
  display: ${props => props.error_login && "block"};
`;

// 버튼
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  font-family: "Sofia Pro Bold";
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.1px;
  color: #3a372e;
  border: none;
  background-color: #cec094;
  margin-top: 40px !important;
  border-radius: 30px;
  outline: none;
  opacity: 0.3;

  ${props =>
    props.button &&
    css`
      opacity: 1;
      cursor: pointer;
    `}
`;

const SignUp = styled.div`
  color: white;
  font-size: 12px;
  margin-top: 20px;
  font-family: "Sofia Pro Regular";
  text-align: center;
`;

const SignUpText = styled.span`
  ${props =>
    props.link &&
    css`
      text-decoration: underline;
      cursor: pointer;
    `};
`;
