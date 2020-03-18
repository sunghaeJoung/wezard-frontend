import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";

export default class Diamond extends Component {
  render() {
    return (
      <DiamondComponent>
        <Diamonds one></Diamonds>
        <Diamonds two></Diamonds>
        <Diamonds three></Diamonds>
      </DiamondComponent>
    );
  }
}

const DiamondComponent = styled.div`
  margin-top: 20px;
`;

const Diamonds = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #fff;


    ${props => {
      if (props.one) {
        return css`
          transform: rotate(45deg);
          transform-origin: (top, center);
          animation: ${drop} 2s linear infinite;
        `;
      }
    }}

    ${props => {
      if (props.two) {
        return css`
          transform: translateY(-25px) rotate(45deg);
          transform-origin: (top, center);
          animation: ${first} 2s linear infinite;
        `;
      }
    }}

    ${props => {
      if (props.three) {
        return css`
          transform: translateY(-30px) rotate(45deg);
          transform-origin: (top, center);
          animation: ${second} 2s linear infinite;
        `;
      }
    }};
`;

const drop = keyframes`
0% {
    transform: translateY(0) rotate(45deg);
    opacity: 0;
}
30% {
    transform: translateY(0) rotate(45deg);
    opacity: 1;
}
80% {
    transform: translateY(30px) rotate(45deg);
    opacity: 1;
}
100% {
    transform: translateY(30px) rotate(45deg);
    opacity: 0;
}
`;

const first = keyframes`
0% {
    opacity:0;
}
30% {
    opacity: 0.2;
}
80% {
    opacity: 0.2;
}
100% {
    opacity: 0;
}
`;

const second = keyframes`

0% {
    opacity: 0;
}
50% {
    opacity: 0;
}
80% {
    opacity: 0.4;
}
100% {
    opacity: 0;
}
`;
