import React, { Component } from "react";
import Header from "../../../Components/Header/Header";
import diamond from "Images/Diamond.svg";
import styled from "styled-components";

class Top extends Component {
  render() {
    return (
      <>
        <NewsTop>
          <BgImg>
            <Header />
            <TextWrapper>
              <Title>News</Title>
              <Article>
                Get the latest Wizarding World news here. Faster than an owl and
                more accurate than the Daily Prophet
              </Article>
              <Diamond>
                <img src={diamond} alt="diamond"></img>
              </Diamond>
            </TextWrapper>
          </BgImg>
        </NewsTop>
      </>
    );
  }
}

const NewsTop = styled.div`
  /* position: relative; */
  /* z-index: 10px; */
`;

const BgImg = styled.div`
  /* position: absolute; */
  background-image: url("https://images.ctfassets.net/usf1vwtuqyxm/5yFQqmi5iTeUVfNsmP6Uzn/5ed1d83ef4a8fd8e0056ed82d77c82c9/News-Hub-Copy-compressor.png?w=1440&fm=webp");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 37.5vw;
  min-height: 400px;
  max-height: 100vh;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const Title = styled.h1`
  font-family: "Bluu Next";
  font-size: 60px;
  margin-top: 0px;
`;

const Article = styled.div`
  font-family: "Sofia Pro Regular";
  font-size: 23px;
  width: 100%;
  max-width: 680px;
  margin-top: 0px;
`;

const Diamond = styled.image`
  img {
    width: 30px;
    height: 60px;
    margin: 30px 0;
    z-index: 100;
  }
`;

export default Top;
