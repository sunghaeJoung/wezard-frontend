import React, { Component } from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
  `;

class Navigator extends React.Component {
  constructor() {
    super();
    this.state = {
      //☞ state값 들어갈 자리
    };
  } //☞ 함수 들어갈 자리
  render() {
    //☞ 맵함수 구현할 자리
    return (
      <Container>
        <Button manager>Hello</Button>
        <Button danger>Hello</Button>
        <Anchor2 href="http://google.com">Go to google</Anchor2>
        <Input placeholder="hello" />
        <Form />
      </Container>
    );
  }
}

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  border-radius: 5px;
  ${awesomeCard};
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${awesomeCard};
`;

/* 
스타일링한 컴퍼넌트를 변수로 지정해 사용하는 개념이고,
div 태그를 
백틱 사이 값으로 스타일링한다. 
*/

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearancce: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
  ${props => {
    if (props.danger) {
      // return `animation: ${rotation} 1s linear infinite`;
      return css`
        animation: 5s ${rotation} linear infinite;
      `;
    }
  }}
`;

// const Anchor = Button.withComponent("a").extend`
//   text-decoration: none;
// `;
// 새 버전에서 extend 문법이 바뀌어서 아래 anchor2로 바뀜

const Anchor2 = styled(Button.withComponent("a"))`
  text-decoration: none;
`;
/*
기존의 스타일링 컴퍼넌트를 다른 태그로 연장하여 사용하는 방법
*/

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const theme = {
  mainColor: "#3498db",
  dangerColor: "#e74c3c",
  successColor: "#2ecc71"
};
const Card = styled.div`
  background-color: red;
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

export default Navigator;
