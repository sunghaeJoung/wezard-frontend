import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class TypeOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left_bg: false,
      right_bg: false,
      left_scale: false,
      right_scale: false
    };
  }

  handleClick = select => {
    const { goNext } = this.props;
    sessionStorage.setItem("select1", select);
    goNext();
  };

  handleLeftPart = str => {
    this.setState({
      left_bg: str,
      right_scale: str
    });
  };

  handleRightPart = str => {
    this.setState({
      right_bg: str,
      left_scale: str
    });
  };

  render() {
    const { right_bg, left_bg, right_scale, left_scale } = this.state;
    const { data } = this.props;
    // data.choices && console.log(data.choices);
    return (
      <Container>
        <Question>
          <QuestionText>{data && data.question}</QuestionText>
          <QuestionText sub>CHOOSE ONE TO CONTINUE</QuestionText>
        </Question>
        <DiagonalWrapper>
          <Diagonal right_bg={right_bg}></Diagonal>
          <Diagonal left left_bg={left_bg}></Diagonal>
        </DiagonalWrapper>
        <PolyWrapper right right_scale={right_scale}>
          <Poly right>
            <img
              src="https://my.wizardingworld.com/static/media/bgpolygons-white.77263344.svg"
              alt="poly"
            ></img>
          </Poly>
        </PolyWrapper>
        <PolyWrapper left left_scale={left_scale}>
          <Poly left>
            <img
              src="https://my.wizardingworld.com/static/media/bgpolygons-white.77263344.svg"
              alt="poly"
            ></img>
          </Poly>
        </PolyWrapper>
        <CardWrapper>
          <Card>
            <img src={data && data.img_center} alt="card"></img>
            <Button
              right
              onMouseOver={() => this.handleLeftPart(true)}
              onMouseLeave={() => this.handleLeftPart(false)}
              onClick={() => this.handleClick(data.choices[1].id)}
            >
              {data && data.choices && data.choices[1].choice}
            </Button>
            <Button
              left
              onMouseOver={() => this.handleRightPart(true)}
              onMouseLeave={() => this.handleRightPart(false)}
              onClick={() => this.handleClick(data.choices[0].id)}
            >
              {data && data.choices && data.choices[0].choice}
            </Button>
          </Card>
        </CardWrapper>
      </Container>
    );
  }
}

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Question = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
  width: 100%;
  z-index: 12;
  text-align: center;
`;

const QuestionText = styled.div`
  font-family: "Sofia Pro Regular";
  font-size: 28px;
  margin: 0 0 14px;

  ${props =>
    props.sub &&
    css`
      font-size: 14px;
      color: #9fa1ad;
      margin: 0 0 5px;
      height: 24px;
    `}
`;

const DiagonalWrapper = styled.div`
  width: 160%;
  height: 160%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 55%;
  -webkit-transform: translate(-50%, -50%) rotate(-29.4deg);
  transform: translate(-50%, -50%) rotate(-29.4deg);
  pointer-events: none;
`;

const Diagonal = styled.div`
  background: #000;
  opacity: 0;
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  top: 0;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  left: ${props => props.left && "0"};

  ${props => {
    if (props.left_bg || props.right_bg) {
      return `
    opacity: 0.8;
    `;
    }
  }}
`;

// 다각형 이미지

const PolyWrapper = styled.div`
  z-index: 1;
  position: absolute;
  bottom: -10vw;
  width: 50vw;
  height: 50vw;
  transition: 0.3s ease-in-out;
  transform: rotate(-10deg);

  ${props =>
    props.right &&
    css`
      top: -11vw;
      right: -31vw;
    `}

  ${props =>
    props.left &&
    css`
      left: -27vw;
    `}
    
${props => {
  if (props.right_scale) {
    return ` transform:  translate(-5vw, 5vw) scale(1.1) `;
  } else if (props.left_scale) {
    return `transform: translate(5vw, -5vw) scale(1.1) `;
  }
}}

`;

const Poly = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  ${props => {
    if (props.right) {
      return ` filter: grayscale(100%) brightness(60%) sepia(100%) hue-rotate(30deg)
        saturate(600%) contrast(0.4);`;
    } else if (props.left) {
      return `filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(133deg)
        saturate(1000%) contrast(0.4);`;
    }
  }}
`;

// 카드 % 버튼
const CardWrapper = styled.div`
  min-height: 600px;
  overflow: hidden;
  margin-top: 0px;
  padding-top: 50px;
`;

const Card = styled.div`
  position: absolute;
  z-index: 2;
  width: 282px;
  height: 500px;
  right: calc(50% - 141px);
  top: 30%;
  img {
    position: absolute;
    z-index: 2;
    width: 282px;
    height: auto;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  color: white;
  font-size: 34px;
  font-family: "Bluu Next";
  background-color: initial;
  border: none;
  margin-top: 3px;
  margin-bottom: 0px;
  position: absolute;
  top: calc(50% - 16px);
  right: ${props => props.right && "-54%"};
  left: ${props => props.left && "-50%"};
  outline: none;
  cursor: pointer;
`;
