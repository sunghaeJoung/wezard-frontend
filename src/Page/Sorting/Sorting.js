import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../../Components/Header/Header";

export default class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left_bg: false,
      right_bg: false,
      left_scale: false,
      right_scale: false
    };
  }

  handleLeftPart = str => {
    this.setState({
      left_bg: str,
      right_scale: str
    });
  };

  handleRightPart = str => {
    this.setState({
      right_bg: str
    });
  };

  render() {
    return (
      <SortingComponent>
        <Header></Header>
        <Container>
          <Choice>
            {/* 패치로 text 받아와야해 */}
            <ChoiceText>River or Forest</ChoiceText>
            <ChoiceText sub>CHOOSE ONE TO CONTINUE</ChoiceText>
          </Choice>
          {/* 여기 뭔지 나중에 확인해야해 */}
          <DiagonalWrapper>
            <Diagonal right_bg={this.state.right_bg}></Diagonal>
            <Diagonal left left_bg={this.state.left_bg}></Diagonal>
          </DiagonalWrapper>
          <PolyWrapper right right_scale={this.state.right_scale}>
            <Poly right>
              <img
                src="https://my.wizardingworld.com/static/media/bgpolygons-white.77263344.svg"
                alt="poly"
              ></img>
            </Poly>
          </PolyWrapper>
          <PolyWrapper left>
            <Poly left>
              <img
                src="https://my.wizardingworld.com/static/media/bgpolygons-white.77263344.svg"
                alt="poly"
              ></img>
            </Poly>
          </PolyWrapper>
          {/* 패치받아와서 바꾸기 */}
          <CardWrapper>
            <Card>
              <img
                src="https://my.wizardingworld.com/static/media/river-forest.d374fcab.png"
                alt="card"
              ></img>
              <Button
                right
                onMouseOver={() => this.handleLeftPart(true)}
                onMouseLeave={() => this.handleLeftPart(false)}
              >
                Forest
              </Button>
              <Button
                left
                onMouseOver={() => this.handleRightPart(true)}
                onMouseLeave={() => this.handleRightPart(false)}
              >
                River
              </Button>
            </Card>
          </CardWrapper>
        </Container>
      </SortingComponent>
    );
  }
}

const SortingComponent = styled.div`
  background-image: url("https://my.wizardingworld.com/static/media/bg-stars@2x.116cc9fe.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  color: white;
`;

// const Header = styled.header`
//   width: 100%;
//   height: 132px;
//   position: absolute;
//   top: 0;
// `;

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Choice = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
  width: 100%;
  z-index: 12;
  text-align: center;
`;

const ChoiceText = styled.div`
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
  width: 10000px;
  height: 10000px;
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
    if (props.left_bg === true || props.right_bg === true) {
      return `
    opacity: 0.8;
    `;
    }
  }}
`;

// 다각형 이미지
// const PolyWrapper = styled.div`
// `;

const PolyWrapper = styled.div`
  z-index: 1;
  position: absolute;
  bottom: -10vw;
  width: 50vw;
  height: 50vw;
  transition: 0.3s ease-in-out;
  transform: rotate(90deg);

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

    ${props =>
      props.right_scale &&
      `
  transform: translate(-5vw, 5vw) scale(1.1) rotate(30deg)
  `}
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

// const PolyLeft = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   z-index: -1;
//   top: 0;
//   left: 0;
//   filter: grayscale(100%) brightness(60%) sepia(100%) hue-rotate(30deg)
//     saturate(600%) contrast(0.4);

// `;

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
