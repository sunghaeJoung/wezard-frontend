import React, { Component } from "react";
import MainTop from "./MainTop/MainTop";
import Slider from "./Slider/Slider";
import MainMiddle from "./MainMiddle/MainMiddle";
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
        <MainTop />
        <Slider />
        <MainMiddle />
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
