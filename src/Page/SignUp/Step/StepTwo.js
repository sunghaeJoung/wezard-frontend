import React, { Component } from "react";
import styled from "styled-components";
import { TiEye } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";

export default class StepTwo extends Component {
  render() {
    return (
      <Container>
        <Text>Create your account</Text>
        <AllInputContainer>
          <InputContainer>
            <Label>EMAIL ADDRESS</Label>
            <Input name="email" onChange={this.handleEmail}></Input>
          </InputContainer>

          <InputContainer>
            <Label>VERIFY EMAIL ADDRESS</Label>
            <Input name="verify" onChange={this.handleEmail}></Input>
          </InputContainer>

          <InputContainer relative>
            <Label>NEW PASSWORD</Label>
            <Input
              type="password"
              name="pw"
              onChange={this.handleEmail}
            ></Input>
            <Toggle>
              <TiEye style={{ color: "rgb(153, 153, 153)" }} />
            </Toggle>
          </InputContainer>
        </AllInputContainer>
        <Terms>
          <Following>Passwords must contain the following:</Following>
          {/* check 첫번째 */}
          <Check relative>
            <FaCheck style={{ position: "absolute", left: "0", top: "2px" }} />
            <CheckTxt>A minimum of 8 characters</CheckTxt>
          </Check>
          {/* check 두번째 */}
          <Check relative>
            <FaCheck style={{ position: "absolute", left: "0", top: "2px" }} />
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
  margin: 20px 0;
  font-family: Butler;
`;

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
  transition: border 0.3s ease-in-out;
  transition-property: border;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  &:focus {
    border: 1px solid rgba(151, 151, 151, 0.7);
    transition: border 0.3s ease-in-out;
    transition-property: border;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
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

  opacity: ${props => props.button1 && "1"};
`;

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
