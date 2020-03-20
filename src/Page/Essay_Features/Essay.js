import React, { Component } from "react";
import Main from "./Main/Main";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";

class Essay_Features extends Component {
  render() {
    return (
      <EssayWrapper>
        <Video
          autoPlay
          loop
          playsinline
          src="https://my.wizardingworld.com/static/media/starsAboutPassport1440X820.43f19c59.mp4"
        ></Video>
        <Main />
        <Footer />
      </EssayWrapper>
    );
  }
}

const EssayWrapper = styled.div``;

const Video = styled.video`
  position: fixed;
  z-index: -999;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

export default Essay_Features;
