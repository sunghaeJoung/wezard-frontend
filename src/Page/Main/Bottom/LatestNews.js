import React, { Component } from "react";
import LatestNewsBox from "./LatestNewsBox";
import styled from "styled-components";

class LatestNews extends Component {
  constructor() {
    super();

    this.state = {
      LatestNewsData: []
    };
  }

  componentDidMount() {
    // fetch("http://localhost:3000/data/LatestNewsData.json", {
    //   method: "GET"
    // })
    fetch("http://localhost:3000/data/LatestNewsData.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          LatestNewsData: res.LatestNewsData
        });
      });
  }

  render() {
    return (
      <LatestNewsWrapper>
        <Category>Latest news</Category>
        <CardWrapper>
          {this.state.LatestNewsData.map(item => {
            return (
              <LatestNewsBox thumbnail={item.thumbnail} title={item.title} />
            );
          })}
        </CardWrapper>
        <BottomWrapper>
          <Line></Line>
          <AllNews>VIEW ALL NEWS</AllNews>
        </BottomWrapper>
      </LatestNewsWrapper>
    );
  }
}

const LatestNewsWrapper = styled.div`
  max-width: 1400px;
  margin: 180px auto 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  /* position: absolute; */
  margin-left: 15%;
  margin-bottom: 40px;
  font-family: "Bluu Next";
  font-size: 48px;
  /* font-weight: 700;
  line-height: 1.35; */
  color: #fff;
`;

const CardWrapper = styled.div`
  /* position: relative; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px;
`;

const Line = styled.div`
  background-color: #696b78;
  /* position: absolute; */
  width: 1000px;
  height: 1px;
  /* left: 450px;
  top: 40px; */
`;

const AllNews = styled.span`
  color: #ffffff;
  font-family: "Sofia Pro Bold";
  font-size: 12px;
  margin-left: 25px;
  cursor: pointer;
`;

export default LatestNews;
