import React, { Component } from "react";
import styled from "styled-components";
import StepOne from "./Step/StepOne";
import StepTwo from "./Step/StepTwo";
import StepThree from "./Step/StepThree";
import Finish from "./Step/Finish";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 2
    };
  }

  goBack = () => {
    this.setState({
      step: this.state.step - 1
    });
  };

  goNext = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  render() {
    const obj = {
      1: <StepOne goNext={this.goNext} />,
      2: <StepTwo goNext={this.goNext} />,
      3: <StepThree goNext={this.goNext} handleFetch={this.handleFetch} />,
      4: <Finish />
    };

    const { step } = this.state;

    return (
      <SignUpComponent>
        <Header hide={step}>
          {step !== 1 && (
            <Btn left onClick={this.goBack}>
              <IoIosArrowRoundBack style={{ width: "35px", height: "35px" }} />
            </Btn>
          )}

          <Step>
            <Number>01</Number>
            <ProgressBar>
              <Line step={step}></Line>
              <Line step={step}></Line>
              <Line></Line>
            </ProgressBar>
            <Number>03</Number>
          </Step>
          <Btn right>
            <IoIosClose style={{ width: "35px", height: "35px" }} />
          </Btn>
        </Header>
        {/* 회원가입 단계별 컴포넌트  */}
        {obj[step]}
      </SignUpComponent>
    );
  }
}

const SignUpComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #202020;
`;

// Header 시작

const Header = styled.nav`
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => {
    if (props.hide === 4) {
      return `
      display:none
      `;
    }
  }}
`;

const Step = styled.div`
  max-width: 300px;
  display: flex;
`;

const Number = styled.div`
  color: white;
  font-size: 14px;
  font-family: "Sofia Pro Bold";
`;

const ProgressBar = styled.ul`
  width: 180px;
  height: 2px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 0;
  padding: 0 10px;
  //   flex: 5 1;
`;

const Line = styled.li`
  flex: 1 1;
  list-style: none;
  width: 60px;
  height: 2px;
  background-color: #555;
  position: relative;

  ${props => {
    if (props.step === 1) {
      return `
            background-color: #fff;
  &:after {
    position: absolute;
    width: 10px;
    height: 4px;
    right: 0;
    top: -1px;
    content: "";
    filter: blur(1px);
    background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff);
  }
          `;
    }
  }}
`;

const Btn = styled.div`
  cursor: pointer;
  position: absolute;
  color: white;

  left: ${props => props.left && "34px"};
  right: ${props => props.right && "34px"};
`;
