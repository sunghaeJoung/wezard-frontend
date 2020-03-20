import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../../Components/Header/Header";
import Diamond from "../../../Components/Diamond";

class Top extends Component {
  render() {
    return (
      <>
        <NewsTop>
          <BgImg>
            <Header />
            <TextWrapper>
              <Title>Quiz</Title>
              <Article>
                Put your wizarding knowledge to the test with curious quizzes
                for all levels
              </Article>
              <Diamond />
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
  background-image: url("//images.ctfassets.net/usf1vwtuqyxm/5cr4lVBZ2k1il5kgkj0op8/68fcc40c97192a3dbaaa20ea5153c7bf/Quizzes-Hub-Copy-compressor.png");
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

export default Top;
