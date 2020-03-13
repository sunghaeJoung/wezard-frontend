import React, { Component } from "react";
import styled from "styled-components";

class MainMiddle extends Component {
  render() {
    return (
      <MainMiddleCover>
        <PartWrapper>
          <TextWrapper>
            <SubTitle>LEARN ABOUT</SubTitle>
            <Title>Wizarding World Gold</Title>
            <BodyText>
              Delve even deeper into the magical universe you love with this
              spellbinding annual subscription, available to order now.
            </BodyText>
            <Button>FIND OUT MORE</Button>
          </TextWrapper>
          <ArticleImg
            src="https://assets.wizardingworld.com/frontend/_next/static/images/mask-c0def33648ff88a7a868ad011ba0b01b.jpg.webp"
            alt=""
          ></ArticleImg>
          <Gradient />
        </PartWrapper>
        <PartWrapperMid>
          <MidBgImg
            src="https://assets.wizardingworld.com/frontend/_next/static/images/particles@3x-b3ac135cab42080c8900ba659bbaa998.png"
            alt=""
          />
          <LeftPerson
            src="https://assets.wizardingworld.com/frontend/_next/static/images/hermione-0b5d18cefb6a2ffc8efe6feec4c5292c.png.webp"
            alt=""
          />
          <MidPerson
            src="https://assets.wizardingworld.com/frontend/_next/static/images/harry-ee27fff5df31d0185c137ae7928fd4ba.png.webp"
            alt=""
          />
          <RightPerson
            src="https://assets.wizardingworld.com/frontend/_next/static/images/ron-cd52faf880d813905583c6bbd4615a3b.png.webp"
            alt=""
          />
          <TextWrapperMid>
            <SubTitleMid>EXPLORE THE WIZARDING WORLD</SubTitleMid>
            <TitleMid>Explore The Story</TitleMid>
            <BodyTextMid>
              Explore and educate yourself on the Wizarding World in a whole new
              way, with our upcoming, interactive Explore the Story pages. Learn
              about your favourite magical creatures, characters, locations and
              more with our handy new tool, which promises to be a rather
              enchanting experience.
            </BodyTextMid>
            <ButtonMid>COMING SOON</ButtonMid>
          </TextWrapperMid>
        </PartWrapperMid>
        <PartWrapper>
          <TextWrapper>
            <SubTitle>INTRODUCING</SubTitle>
            <Title>The Official Harry Potter Fan Club</Title>
            <BodyText>
              Everyone’s welcome to become a part of the magical universe of
              Harry Potter and Fantastic Beasts. This is a fan club like no
              other.
            </BodyText>
            <Button Third>FIND OUT MORE</Button>
          </TextWrapper>
          <ArticleImg
            src="https://assets.wizardingworld.com/frontend/_next/static/images/rectangle-ac5794a87516446dab1c31c0c3b02996.jpg.webp"
            alt=""
          ></ArticleImg>
        </PartWrapper>
      </MainMiddleCover>
    );
  }
}

const MainMiddleCover = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  /* display: block; */
  border: 3px solid red;
  margin-top: 60px;
`;

const PartWrapper = styled.div`
  position: relative;
  /* width: 100%;
  max-width: 80%;
  margin: auto; */
  /* display: flex;
  flex-direction: end; */
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  width: 100%;
  max-width: 1440px;
  margin: auto;
  height: 580px;
  border: 1px solid yellow;
  margin: 40px auto;
`;

const ArticleImg = styled.img`
  position: absolute;
  width: 70%;
  max-width: 70%;
  max-height: 100%;
  order: 2;
  right: 0;
  z-index: 1;
  margin-left: 0%;
  /* float: right; */
  /* overflow: hidden; */
  /* top: 400px; */
  /* max-height: 480px; */
`;

const Gradient = styled.div`
  z-index: 2;
  position: absolute;
  left: 430px;
  border: 1px solid orange;
  width: 33%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    rgba(16, 20, 27, 1),
    rgba(16, 20, 27, 0) 98%
  );
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 33%;
  float: left;
  border: 1px solid pink;
  padding-left: 10%;
  z-index: 3;
`;

const SubTitle = styled.div`
  font-family: "Mason Sans Bold";
  font-size: 28px;
  color: #f9f4f2;
  max-width: 432px;
  float: right;
`;

const Title = styled.div`
  font-family: "Bluu Next";
  font-size: 60px;
  color: #f9f4f2;
  text-align: right;
  margin-top: 20px;
  max-width: 432px;
  float: right;
`;

const BodyText = styled.div`
  font-family: "Sofia Pro Regular";
  font-size: 16px;
  color: #f9f3f2;
  text-align: right;
  float: right;
  margin-top: 20px;
  max-width: 432px;
`;

const Button = styled.button`
  font-family: "Sofia Pro Bold";
  /* color: #f9f3f2; */
  font-size: 12px;
  padding: 12px 70px;
  background-color: #e5ae5b;
  cursor: pointer;
  border-radius: 30px;
  border-color: #e5ae5b;
  text-align: right;
  float: right;
  margin: 20px auto;
  transition-duration: 0.5s;
  &:hover {
    background-color: #ecbf77;
    border-color: #ecbf77;
    background-color: ${props => props.Third && "#f9f3f2"};
    border-color: ${props => props.Third && "#f9f3f2"};
    color: ${props => props.Third && "black"};
  }

  border-color: ${props => props.Third && "#f9f3f2"};
  background-color: ${props => props.Third && "transparent"};
  color: ${props => props.Third && "#f9f3f2"};
`;

const PartWrapperMid = styled.div`
  position: relative;
  /* width: 100%;
  max-width: 80%;
  margin: auto; */
  /* display: flex;
  flex-direction: end; */
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  width: 100%;
  max-width: 1280px;
  margin: auto;
  height: 1000px;
  border: 1px solid yellow;
  margin: 40px auto;
`;

const MidBgImg = styled.img`
  position: absolute;
  width: 70%;
  max-width: 70%;
  max-height: 100%;
  order: 2;
  left: 0;
  z-index: 1;
  margin-left: 0%;
  /* float: right; */
  /* overflow: hidden; */
  /* top: 400px; */
  /* max-height: 480px; */
`;

const LeftPerson = styled.img`
  position: absolute;
  max-width: 37%;
  z-index: 2;
  /* max-height 60: */
`;

const MidPerson = styled.img`
  position: absolute;
  left: 170px;
  max-width: 42%;
  z-index: 3;
`;

const RightPerson = styled.img`
  position: absolute;
  max-width: 37%;
  left: 440px;
  z-index: 2;
`;

const TextWrapperMid = styled.div`
  position: absolute;
  width: 33%;
  right: 0;
  border: 1px solid pink;
  /* padding-left: 10%; */
  z-index: 3;
`;

const SubTitleMid = styled.div`
  font-family: "Mason Sans Bold";
  font-size: 28px;
  color: #f9f4f2;
  max-width: 432px;
  /* float: right; */
`;

const TitleMid = styled.div`
  font-family: "Bluu Next";
  font-size: 60px;
  color: #f9f4f2;
  margin-top: 20px;
  max-width: 432px;
  /* float: right;
  text-align: right; */
`;

const BodyTextMid = styled.div`
  font-family: "Sofia Pro Regular";
  font-size: 16px;
  color: #f9f3f2;
  /* text-align: right;
  float: right; */
  margin-top: 20px;
  max-width: 432px;
`;

const ButtonMid = styled.button`
  font-family: "Sofia Pro Bold";
  color: #f9f3f2;
  font-size: 12px;
  padding: 12px 70px;
  background: transparent;
  border-radius: 30px;
  border-color: #e5ae5b;
  margin: 20px auto;
  opacity: 0.3;
`;

export default MainMiddle;
