import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Address } from "../../../config";
import { test_num } from "../../../utils";
import { test_eng_big } from "../../../utils";
import { test_eng_small } from "../../../utils";
import { Check } from "styled-icons/boxicons-regular";
import { EyeOutline } from "styled-icons/evaicons-outline";

export default class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      verify: "",
      password: "",
      emailError1: false,
      emailError2: false,
      emailError_same: false,
      verifyError: false,
      following1: false,
      following2: false,
      button: false,
      show_pw: true
    };
  }

  handleStepTwo = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.state.password && this.checkPw();
      }
    );
  };

  // 이메일 확인
  handleEmailCheck = () => {
    fetch(`${Address}/user/email-check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log("응답 도착", res);
        if (res.status === 200) {
          return;
        }
        if (res.message === "DUPLICATED_EMAIL") {
          this.setState({
            emailError1: true
          });
        } else {
          this.setState({
            emailError1: false
          });
        }
        if (res.message === "INVALID_EMAIL") {
          this.setState({
            emailError2: true
          });
        } else {
          this.setState({
            emailError2: false
          });
        }
      });
  };

  // 이메일 같은지 확인
  handleEmailVerify = () => {
    const { email, verify } = this.state;
    if (email !== verify) {
      this.setState({
        verifyError: true
      });
    } else {
      this.setState({
        verifyError: false
      });
    }
  };

  // 이메일 오류 메시지
  verifyEmail = () => {
    const { email, verify } = this.state;
    return email !== verify && <div>Emails don't match</div>;
  };

  checkPw = () => {
    const { password, following1, following2 } = this.state;

    if (password.length >= 8) {
      this.setState({
        following1: true
      });
    } else {
      this.setState({
        following1: false
      });
    }

    if (
      `${test_num}(password)` &&
      `${test_eng_big}(password)` &&
      `${test_eng_small}(password)`
    ) {
      this.setState({
        following2: true
      });
    } else {
      this.setState({
        following2: false
      });
    }

    if (following1 && following2) {
      this.setState({
        button: true
      });
    } else {
      this.setState({
        button: false
      });
    }
  };

  // 버튼 클릭하면 실행되는 함수
  handleClick = () => {
    const { email, password, following1, following2 } = this.state;
    const { goNext } = this.props;

    // 정보저장
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);

    // 삼단계로 이동
    following1 && following2 && goNext();
  };

  //비밀번호 입력창 type 바꾸는 함수
  handlePW = () => {
    this.setState({
      show_pw: !this.state.show_pw
    });
  };

  render() {
    const {
      show_pw,
      emailError1,
      emailError2,
      verifyError,
      following1,
      following2,
      button
    } = this.state;

    console.log(this.state.email);
    return (
      <Container>
        <Text>Create your account</Text>
        <AllInputContainer>
          <InputContainer>
            <Label>EMAIL ADDRESS</Label>
            <Input
              name="email"
              onChange={this.handleStepTwo}
              onBlur={this.handleEmailCheck}
              emailError1={emailError1}
              emailError2={emailError2}
            ></Input>
            {/* 이메일 입력창 오류 메시지 */}
            {emailError1 && (
              <ErrorMessage>
                Looks like you already have a Wizarding
                <br />
                Passport with this email.<a href="/login">Login</a> instead?
              </ErrorMessage>
            )}
            {emailError2 && <ErrorMessage>Invalid email format</ErrorMessage>}
          </InputContainer>

          <InputContainer>
            <Label>VERIFY EMAIL ADDRESS</Label>
            <Input
              name="verify"
              onChange={this.handleStepTwo}
              onBlur={this.handleEmailVerify}
              verifyError={verifyError}
            ></Input>
            {verifyError && <ErrorMessage>Emails don't match</ErrorMessage>}
          </InputContainer>

          <InputContainer relative>
            <Label>NEW PASSWORD</Label>
            <Input
              type={show_pw ? "password" : "text"}
              name="password"
              onChange={this.handleStepTwo}
            ></Input>
            <Toggle onClick={this.handlePW} />
          </InputContainer>
        </AllInputContainer>
        <Terms>
          <Following>Passwords must contain the following:</Following>
          {/* check 첫번째 */}
          <CheckBox relative>
            <CheckIcon following1={following1} />
            <CheckTxt following1={following1}>
              A minimum of 8 characters
            </CheckTxt>
          </CheckBox>
          {/* check 두번째 */}
          <CheckBox relative>
            <CheckIcon following2={following2} />
            <CheckTxt following2={following2}>
              A number and combination of
              <br />
              uppercase and lowercase characters.
            </CheckTxt>
          </CheckBox>
          {/* check 세번째 */}
          <CheckBox>
            <CheckTxt>Parseltongue. (Just kidding.)</CheckTxt>
          </CheckBox>
        </Terms>
        {/* 모든 값이 들어왔을 때, 버튼이 활성화하고 로컬에 정보 저장해야해 */}
        <Button
          button={button}
          onClick={() => {
            this.handleClick();
          }}
        >
          CONTINUE
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 315px;
  margin: 0 auto;
  color: #fff;
  font-family: "Sofia Pro";
`;

const Text = styled.div`
  font-size: 36px;
  text-align: center;
  margin: 20px 0 40px;
  font-family: Butler;
  line-height: 55px;
`;

const AllInputContainer = styled.div`
  margin-top: 20px;
`;

const InputContainer = styled.div`
  margin: 20px 0 32px;

  position: ${props => props.relative && "relative"};
`;

const Label = styled.label`
  font-size: 12px;
  letter-spacing: 1.5px;
  font-family: "Sofia Pro Bold";
`;

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

  border-color: ${props => props.emailError1 && "#ff6e6e"};
  border-color: ${props => props.emailError2 && "#ff6e6e"};
  border-color: ${props => props.verifyError && "#ff6e6e"};

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

  /* color: ${props => props.emailError && "#ff6e6e"};
  color: ${props => props.verifyError && "#ff6e6e"}; */

  a {
    text-decoration: underline;
    color: #ff6e6e;
  }
`;

// 버튼

const Button = styled.button`
  width: 100%;
  height: 48px;
  font-family: "Sofia Pro Bold";
  font-size: 14px;
  letter-spacing: 1.1px;
  color: #3a372e;
  border: none;
  background-color: #cec094;
  margin-top: 40px !important;
  border-radius: 30px;
  opacity: 0.3;
  outline: none;

  ${props =>
    props.button &&
    css`
      opacity: 1;
      cursor: pointer;
    `}
`;

const Toggle = styled(EyeOutline)`
  width: 15px;
  height: auto;
  position: absolute;
  top: 42px;
  right: 13px;
  color: rgb(153, 153, 153);
`;

// 가입 2단계 terms
const Terms = styled.div`
  margin-top: 40px;
`;

const Following = styled.div`
  font-size: 14px;
  padding-bottom: 20px;
  font-family: "Sofia Pro Regular";
`;

const CheckBox = styled.div`
  font-family: "Sofia Pro Regular";
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.5);
  padding-left: 50px;
  line-height: 24px;

  position: ${props => props.relative && "relative"};
`;

const CheckTxt = styled.div`
  color: ${props => props.following1 && "#ffffff"};
  color: ${props => props.following2 && "#ffffff"};
`;

const CheckIcon = styled(Check)`
  width: 20px;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  display: none;

  ${props =>
    props.following1 &&
    css`
      display: block;
      color: #ffffff;
    `}

  ${props =>
    props.following2 &&
    css`
      display: block;
      color: #ffffff;
    `}
`;
