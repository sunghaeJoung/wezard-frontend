import React, { Component } from "react";
import LatestNewsBox from "./LatestNewsBox";
import LatestNewsData from "./LatestNewsData";
import styled from "styled-components";

class LatestNews extends Component {
  render() {
    return (
      <LatestNewsWrapper>
        <Category>Latest news</Category>
        <CardWrapper>
          {LatestNewsData.map(item => {
            return <LatestNewsBox img={item.img} text={item.text} />;
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
  font-weight: 700;
  line-height: 1.35;
  color: #fff;
`;

const CardWrapper = styled.div`
  /* position: relative; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
`;

// const Card = styled.div`
//   position: relative;
//   border: 1px solid blue;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
//   width: 100%;
//   max-width: 380px;
//   min-height: 352px;
// `;

// const Picture = styled.img`
//   position: absolute;
//   width: 100%;
//   max-width: 440px;
//   left: 0;
//   top: 0;
// `;

// const Border = styled.span`
//   position: absolute;
//   margin-top: 10px;
//   width: 360px;
//   height: 340px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid #696b78;
// `;

// const Text = styled.div`
//   position: absolute;
//   width: 100%;
//   max-width: 288px;
//   align-items: center;
//   object-fit: contain;
//   font-family: "Sofia Pro Bold";
//   font-weight: 400;
//   font-size: 20px;
//   line-height: 24px;
//   color: #fff;
// `;

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
