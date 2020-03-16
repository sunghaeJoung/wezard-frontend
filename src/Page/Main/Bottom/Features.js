import React, { Component } from "react";
import FeaturesBox from "./FeaturesBox";
import styled from "styled-components";

class Features extends Component {
  constructor() {
    super();

    this.state = {
      Left: [],
      Right: []
    };
  }

  componentDidMount() {
    // fetch("http://localhost:3000/data/FeaturesData.json", {
    //   method: "GET"
    // })
    fetch("http://localhost:3000/data/FeaturesData.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          Left: res.FeaturesData.slice(0, 2),
          Right: res.FeaturesData.slice(2, 4)
        });
      });
  }

  render() {
    return (
      <FeaturesWrapper>
        <Category>Magical features</Category>
        <BoxWrapper>
          <Left>
            {this.state.Left.map(item => {
              return (
                <FeaturesBox thumbnail={item.thumbnail} title={item.title} />
              );
            })}
          </Left>
          <Right>
            {this.state.Right.map(item => {
              return (
                <FeaturesBox thumbnail={item.thumbnail} title={item.title} />
              );
            })}
          </Right>
        </BoxWrapper>
        <BottomWrapper>
          <Line></Line>
          <AllFeatures>VIEW ALL FEATURES</AllFeatures>
        </BottomWrapper>
      </FeaturesWrapper>
    );
  }
}

const Left = styled.div`
  /* position: relative; */
  /* border: 1px solid red; */
  /* padding-right: 20px; */
  max-width: 492px;
  width: 100%;
`;

const Right = styled.div`
  /* position: relative; */
  /* border: 1px solid blue; */
  padding-left: 40px;
  max-width: 492px;
  width: 100%;
  margin-top: 100px;
`;

const FeaturesWrapper = styled.div`
  margin: 150px auto;
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Category = styled.div`
  margin: 0 0 40px 40px;
  color: #ffffff;
  font-size: 48px;
  font-family: "Bluu Next";
`;

const BoxWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Line = styled.div`
  background-color: #696b78;
  width: 700px;
  height: 1px;
`;

const AllFeatures = styled.span`
  color: #ffffff;
  font-family: "Sofia Pro Bold";
  font-size: 12px;
  margin-left: 25px;
  cursor: pointer;
`;

export default Features;
