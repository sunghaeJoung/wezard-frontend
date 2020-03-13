import React, { Component } from "react";
import Top from "./Top/Top";
import Slider from "./Slider/Slider";
import Middle from "./Middle/Middle";
import LatestNews from "./Bottom/LatestNews";
import styled from "styled-components";

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <Video
          autoPlay
          loop
          playsinline
          src="https://my.wizardingworld.com/static/media/starsAboutPassport1440X820.43f19c59.mp4"
        ></Video>
        <Top />
        <Slider />
        <Middle />
        <LatestNews />
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.div``;

const Video = styled.video`
  position: fixed;
  z-index: -999;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

export default Main;
