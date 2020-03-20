import React, { Component } from "react";
import Diamond from "../../../Components/Diamond";
import logo from "Images/logo.svg";
import styled, { keyframes } from "styled-components";
import Header from "../../../Components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

class Top extends Component {
  render() {
    return (
      <>
        <TopBgImg>
          <BgImgCover />
          <Header />
          <Middle>
            <Logo src={logo} alt="" />
            <Article>
              <Title>
                New audiobook <br></br>The Tales of Beedle the Bard is coming
                soon
              </Title>
              <Note>
                The cream of Wizarding World talent, from Noma Dumezweni to Jude
                Law, have joined forces to tell the stories of Beedle the Bard
                for the first time in audio, in support of J.K. Rowling’s
                charity Lumos.
              </Note>
              <Button>READ MORE</Button>

              <DiamondContainer>
                <Diamond />
              </DiamondContainer>
            </Article>
          </Middle>
        </TopBgImg>
      </>
    );
  }
}

const BgImgCover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const TopBgImg = styled.div`
  position: relative;
  background-image: url("https://images.ctfassets.net/usf1vwtuqyxm/1C7Sv1wIFHPt6u7RMWWfHd/25589514b25f1d5be5206c77d06b5fbc/Beedle_the_Bard_Article05.jpg?w=2880&h=1740&fit=fill&fm=webp");
  background-size: cover;
  background-position: center center;
  width: 100%;
  z-index: 0;
  justify-content: center;
  animation: ${boxFade} 2s 1;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      rgba(16, 20, 27, 0),
      rgba(16, 20, 27, 0) 45%,
      #10141b 90%
    );
  }
`;

const Middle = styled.div`
  width: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  /* z-index: 1; */
  padding-top: 125px;
`;

const Logo = styled.img`
  width: 350px;
  height: 75px;
  padding-top: 30px;
  z-index: 1;
  animation: ${boxFade} 4s 1;
`;

const Article = styled.div`
  margin: 40px 0;
  text-align: center;
  color: #f9f4f2;
  display: flex;
  flex-direction: column;
  animation: ${boxFade} 4s 1;
`;

const Title = styled.div`
  font-size: 70px;
  font-family: "Bluu Next";
  margin: 20px 0;
  padding: 0 30px;
  max-width: 760px;
  z-index: 1;
`;

const Note = styled.div`
  max-width: 580px;
  height: 66px;
  padding: 0 150px;
  margin-bottom: 70px;
  font-size: 18px;
  font-family: "Sofia Pro Regular";
  line-height: 1.38;
  display: inline-block;
  position: relative;
  z-index: 1;
`;

const Button = styled.button`
  color: #f9f4f2;
  text-align: center;
  background-color: #6b63b5;
  font-family: "Sofia Pro Bold";
  font-size: 12px;
  width: 263px;
  margin: 0 auto;
  padding: 18px 31px;
  border-radius: 30px;
  border: none;
  z-index: 100;
  cursor: pointer;
  &:hover {
    background-color: #514a92;
    transition: 0.3s ease-in-out;
  }
`;

const DiamondContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default Top;
