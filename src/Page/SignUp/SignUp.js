import React, { Component } from "react";
import styled from "styled-components";
import { Close } from "styled-icons/evaicons-solid";
import { ArrowBack } from "styled-icons/evaicons-solid";
import StepOne from "./Step/StepOne";
import StepTwo from "./Step/StepTwo";
import StepThree from "./Step/StepThree";
import Finish from "./Step/Finish";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  goToMain = () => {
    this.props.history.push("/");
  };

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
          {step !== 1 && <ArrowIcon />}
          <Step>
            <Number>01</Number>
            <ProgressBar>
              <Line step={step}></Line>
            </ProgressBar>
            <Number>03</Number>
          </Step>
          <CloseIcon onClick={this.goToMain} />
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

const ProgressBar = styled.div`
  width: 180px;
  height: 2px;
  display: flex;
  margin: 10px 10px 0 10px;
  background-color: #555;
`;

const Line = styled.div`
  flex: 1 1;
  list-style: none;
  width: calc(${props => props.step && 60 * props.step}px);
  height: 2px;
  background-color: #fff;
  position: absolute;

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

const ArrowIcon = styled(ArrowBack)`
  width: 25px;
  height: auto;
  color: white;
  position: absolute;
  left: 34px;
  cursor: pointer;
`;

const CloseIcon = styled(Close)`
  width: 28px;
  height: 28px;
  color: white;
  position: absolute;
  right: 34px;
  cursor: pointer;
`;
