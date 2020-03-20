import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Address } from "../../config";
import Header from "../../Components/Header/Header";
import TypeOne from "./Type/TypeOne";
import TypeTwo from "./Type/TypeTwo";
import TypeThree from "./Type/TypeThree";

export default class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1,
      data1: {},
      data2: {},
      data3: {}
    };
  }

  componentDidMount = () => {
    const token = sessionStorage.getItem("token");
    console.log("token: ", token);

    fetch(`${Address}/sorting/house/1`, {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("res: ", res);
        this.setState({
          data1: res.data
        });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { type } = this.state;
    if (prevState.type !== this.state.type) {
      fetch(`${Address}/sorting/house/${type}`, {
        headers: {
          Authorization: sessionStorage.getItem("token")
        }
      })
        .then(res => res.json())
        .then(res => {
          if (type === 2) {
            this.setState({
              data2: res.data
            });
          } else if (type === 3) {
            this.setState({
              data3: res.data
            });
          }
        });
    }
  };

  // 자식컴포넌트에서 선택지 클릭하면 실행되는 함수(다음단계 이동)
  goNext = () => {
    this.setState({
      type: this.state.type + 1
    });
  };

  // 마지막 선택지 클릭하면 실행되는 함수
  goResult = select => {
    sessionStorage.setItem("select3", select);
    this.props.history.push("/sorting-result");
  };

  render() {
    const { type, data1, data2, data3 } = this.state;
    const obj = {
      1: (
        <TypeOne
          data={data1 && data1.id && data1.id === 1 && data1}
          goNext={this.goNext}
        />
      ),
      2: (
        <TypeTwo
          data={data2 && data2.id && data2.id === 2 && data2}
          goNext={this.goNext}
        />
      ),
      3: (
        <TypeThree
          data={data3 && data3.id && data3.id === 3 && data3}
          goResult={this.goResult}
        />
      )
    };
    console.log("selects", this.state.selects);
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
