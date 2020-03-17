import React, { Component } from "react";
import Top from "./Top/Top";
import Middle from "./Middle/Middle";
import Bottom from "./Bottom/Bottom";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";

class Features extends Component {
  render() {
    return (
      <FeaturesWrapper>
        <Video
          autoPlay
          loop
          playsinline
          src="https://my.wizardingworld.com/static/media/starsAboutPassport1440X820.43f19c59.mp4"
        />
        <Top />
        <WhiteBg>
          <Middle />
          <Bottom />
        </WhiteBg>
        <Footer />
      </FeaturesWrapper>
    );
  }
}

const FeaturesWrapper = styled.div``;

const Video = styled.video`
  position: fixed;
  z-index: -999;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

const WhiteBg = styled.div`
  background-color: #faf6f0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default Features;
