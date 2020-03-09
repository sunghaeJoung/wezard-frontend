import React, { Component } from "react";
import styled from "styled-components";
// import line from "../../Images/Line.svg";
import { TiEye } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";

export default class SignUpContainer extends Component {
  render() {
    const { stage } = this.props;
    return (
      <>
        {/* 가입 1단계 */}
        {stage === 1 && (
          <Container>
            <Text>
              What is your date of
              <br /> birth?
            </Text>
            {/* <Image>   
              <img src={line} alt="line"></img>
            </Image> */}
            <AllInputContainer>
              <InputContainer>
                <Label>DATE OF BIRTH</Label>
                <Input placeholder="DD/MM/YYYY"></Input>
              </InputContainer>
            </AllInputContainer>
            <Button>CONFIRM</Button>
          </Container>
        )}
        {/* 가입 2단계 */}
        {stage === 2 && (
          <Container>
            <Text>Create your account</Text>
            <Image></Image>
            <AllInputContainer>
              <InputContainer>
                <Label>EMAIL ADDRESS</Label>
                <Input></Input>
              </InputContainer>

              <InputContainer>
                <Label>VERIFY EMAIL ADDRESS</Label>
                <Input></Input>
              </InputContainer>

              <InputContainer relative>
                <Label>NEW PASSWORD</Label>
                <Input></Input>
                <Toggle>
                  <TiEye style={{ color: "rgb(153, 153, 153)" }} />
                </Toggle>
              </InputContainer>
            </AllInputContainer>
            <Terms>
              <Following>Passwords must contain the following:</Following>
              {/* check 첫번째 */}
              <Check relative>
                <FaCheck
                  style={{ position: "absolute", left: "0", top: "2px" }}
                />
                <CheckTxt>A minimum of 8 characters</CheckTxt>
              </Check>
              {/* check 두번째 */}
              <Check relative>
                <FaCheck
                  style={{ position: "absolute", left: "0", top: "2px" }}
                />
                <CheckTxt>
                  A number and combination of
                  <br />
                  uppercase and lowercase characters.
                </CheckTxt>
              </Check>
              {/* check 세번째 */}
              <Check>
                <CheckTxt>Parseltongue. (Just kidding.)</CheckTxt>
              </Check>
            </Terms>
            <Button>CONTINUE</Button>
          </Container>
        )}
        {/* 가입 3단계 */}
        {stage === 3 && (
          <Container last>
            <Letter src="https://my.wizardingworld.com/static/media/envelope.c0b8868a.png"></Letter>
            <Text>
              Tell us more about
              <br /> you.
            </Text>
            <Image></Image>
            <AllInputContainer>
              <InputContainer>
                <Label>First Name</Label>
                <Input></Input>
              </InputContainer>
              <InputContainer>
                <Label>Last Name</Label>
                <Input></Input>
              </InputContainer>
            </AllInputContainer>
            <Button>CONFIRM</Button>
          </Container>
        )}
      </>
    );
  }
}

const Container = styled.div`
  width: 315px;
  margin: 0 auto;
  color: #fff;
  font-family: "Sofia Pro";

  ${props => {
    if (props.last) {
      return `
          display: flex;
          flex-direction: column;
          align-items: center;
          `;
    }
  }}
`;

const Text = styled.div`
  font-size: 36px;
  text-align: center;
  margin: 20px 0;
  font-family: Butler;
`;

const Image = styled.div`
  img {
    width: 309px;
    height: 10px;
  }
`;

// input창

const AllInputContainer = styled.div`
  margin-top: 20px;
`;

const InputContainer = styled.div`
  margin: 20px 0 32px;

  position: ${props => props.relative && "relative"};
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
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
`;

// 버튼

const Button = styled.button`
  width: 100%;
  height: 48px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.1px;
  color: #3a372e;
  border: none;
  background-color: #cec094;
  margin-top: 40px !important;
  border-radius: 30px;
  opacity: 0.3;
  outline: none;
`;

// 가입 2단계 시작 (toggle 버튼)
const Toggle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 38px;
  right: 13px;
`;

// 가입 2단계 terms
const Terms = styled.div`
  margin-top: 40px;
`;

const Following = styled.div`
  font-size: 14px;
  padding-bottom: 20px;
`;

const Check = styled.div`
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.5);
  padding-left: 50px;
  line-height: 24px;

  position: ${props => props.relative && "relative"};
`;

const CheckTxt = styled.div``;

// 가입 3단계 시작
const Letter = styled.img`
  width: 138px;
  height: 136px;
`;
