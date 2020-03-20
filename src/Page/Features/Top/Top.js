import React, { Component } from "react";
import Header from "../../../Components/Header/Header";
import Diamond from "../../../Components/Diamond";
import styled from "styled-components";

class Top extends Component {
  render() {
    return (
      <>
        <NewsTop>
          <BgImg>
            <Header />
            <TextWrapper>
              <Title>Features</Title>
              <Article>
                For beginners, for novices, for Harry Potter superfans going 20
                years-strong, dig deep into the Wizarding World with our
                collection of features
              </Article>
              <DiamondContainer>
                <Diamond />
              </DiamondContainer>
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
  background-image: url("https://images.ctfassets.net/usf1vwtuqyxm/dpmDSBWkWGFebViZKJuG7/c488da0a5c57abcaf6dcade349d14347/Feature-Hub-Copy-compressor.png?fm=webp");
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

const DiamondContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default Top;
