import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "../../Components/Header/Header";
import TypeOne from "./Type/TypeOne";
import TypeTwo from "./Type/TypeTwo";
import TypeThree from "./Type/TypeThree";

export default class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 3,
      // 패치 받고나서는 이름 바꾸기
      slider: []
    };
  }

  // 백에서 새로 api 받아와야해
  componentDidMount = () => {
    fetch("http://localhost:3000/data/SortingData.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          slider: res.SortingData
        });
      });
  };

  render() {
    const { type, slider } = this.state;
    const obj = {
      1: <TypeOne />,
      2: <TypeTwo />,
      3: <TypeThree slider={slider.length !== 0 && slider} />
    };

    return (
      <SortingComponent type={type}>
        <Header />
        {obj[type]}
      </SortingComponent>
    );
  }
}

const SortingComponent = styled.div`
  ${props =>
    props.type === 1 &&
    css`
      background-image: url("https://my.wizardingworld.com/static/media/bg-stars@2x.116cc9fe.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    `}

  width: 100vw;
  height: 100vh;
  color: white;
  background-color: #000;
`;
