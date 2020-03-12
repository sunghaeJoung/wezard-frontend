import React, { Component } from "react";
import styled from "styled-components";

export default class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birth: "",
      button: false
    };
  }

  handleBirth = e => {
    this.setState({
      birth: e.target.value
    });
    if (e.target.value.length === 10) {
      this.checkBirth() &&
        this.setState({
          button: true
        });
    } else {
      this.setState({
        button: false
      });
    }
  };

  checkBirth = () => {
    let num = this.state.birth.split("/");
    if (num[0] < 31 && num[1] < 13 && num[2] < 2021) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { button, birth } = this.state;
    const { goNext } = this.props;
    console.log("부모로 전달하는 birth ", birth);
    return (
      <Container>
        <Text>
          What is your date of
          <br /> birth?
        </Text>
        <AllInputContainer>
          <InputContainer>
            <Label>DATE OF BIRTH</Label>
            <Input
              placeholder="DD/MM/YYYY"
              value={birth}
              onChange={this.handleBirth}
            ></Input>
          </InputContainer>
        </AllInputContainer>
        <Button
          button={button}
          onClick={() => {
            button && goNext(birth);
          }}
        >
          CONFIRM
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

  opacity: ${props => props.button && "1"};
`;