import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import key from "../../../Images/Key.svg";

class Finish extends Component {
  goToMain = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <FinishComponent>
        <img src={key} alt="key"></img>
        <Container>
          <TextMain>You're all set!</TextMain>
          <TextSub>
            Welcome to the Official Harry Potter Fan
            <br /> Club.
          </TextSub>
          <Button onClick={this.goToMain}>FINISH</Button>
        </Container>
      </FinishComponent>
    );
  }
}

const FinishComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 132px;
  img {
    width: 154px;
  }
`;

const Container = styled.div`
  color: #ffffff;
  text-align: center;
  width: 315px;
  margin: 0 auto;
`;

const TextMain = styled.div`
  font-size: 36px;
  margin: 20px 0;
`;

const TextSub = styled.div`
  font-size: 16px;
  margin: 20px 0 0;
  font-family: "Sofia Pro Regular";
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
  cursor: pointer;
`;

export default withRouter(Finish);
