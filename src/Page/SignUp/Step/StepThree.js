import React, { Component } from "react";
import styled from "styled-components";

export default class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birth: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      button: false
    };
  }

  handleStepOne = e => {
    const { first_name, last_name } = this.state;
    this.setState({
      [e.target.name]: e.target.value
    });

    if (first_name && last_name) {
      this.setState({
        button: true
      });
    } else {
      this.setState({
        button: false
      });
    }
  };

  finalStep = () => {
    fetch("http://10.58.2.253:8000/user/sign-up", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: sessionStorage.getItem("email"),
        password: sessionStorage.getItem("password"),
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        date_of_birth: sessionStorage.getItem("birth"),
        is_send_newsletter: "True"
      })
    })
      // .then(response => response.json())
      .then(res => {
        console.log("res 도착", res);
        if (res.status === 200) {
          this.state.goNext();
        }
      })
      .catch(function(err) {
        console.log("Request failed", err);
      });
  };

  render() {
    const { button } = this.state;
    return (
      <Container last>
        <Letter src="https://my.wizardingworld.com/static/media/envelope.c0b8868a.png"></Letter>
        <Text>
          Tell us more about
          <br /> you.
        </Text>
        <AllInputContainer>
          <InputContainer>
            <Label>FIRST NAME</Label>
            <Input name="first_name" onChange={this.handleStepOne}></Input>
          </InputContainer>
          <InputContainer>
            <Label>LAST NAME</Label>
            <Input name="last_name" onChange={this.handleStepOne}></Input>
          </InputContainer>
        </AllInputContainer>
        <Button
          button={button}
          onClick={() => {
            this.finalStep();
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

const AllInputContainer = styled.div`
  margin-top: 20px;
`;

const InputContainer = styled.div`
  margin: 20px 0 32px;

  position: ${props => props.relative && "relative"};
`;

const Label = styled.div`
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

  opacity: ${props => props.button && "1"};
`;

const Letter = styled.img`
  width: 138px;
  height: 136px;
`;
