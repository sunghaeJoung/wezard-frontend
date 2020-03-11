import React, { Component } from "react";
import styled from "styled-components";
import key from "../../Images/Key.svg";
import diamond from "../../Images/Diamond.svg";

export default class Passport extends Component {
  render() {
    return (
      <PassportComponent>
        <Header></Header>
        <Container>
          <Video
            autoPlay
            loop
            playsinline
            src="https://my.wizardingworld.com/static/media/starsAboutPassport1440X820.43f19c59.mp4"
          ></Video>
          <Register>
            <img src={key} alt="key"></img>
            <Text>
              <TextMain>
                Your Wizarding
                <br /> Passport will be the
                <br /> key
              </TextMain>
              <TextSub>Registser for your new magical profile</TextSub>
            </Text>
            <ButtonContainer>
              <Button>CREATE PASSPORT</Button>
              <Button account>USE POTTERMORE ACCOUNT</Button>
            </ButtonContainer>
            <Diamond>
              <img src={diamond} alt="diamond"></img>
            </Diamond>
          </Register>
        </Container>
      </PassportComponent>
    );
  }
}

const PassportComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #10141b;
`;

const Header = styled.div`
  width: 100%;
  height: 132px;
  border-bottom: 1px solid white;
  position: absolute;
  z-index: 99;
`;

const Container = styled.div`
  max-height: 893px;
  min-height: 740px;
`;

const Video = styled.video`
  width: 100vw;
  position: absolute;
  z-index: 0;
`;

const Register = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 220px;

  img {
    width: 106px;
    z-index: 100;
  }
`;

const Text = styled.div`
  color: #faf6f0;
  z-index: 100;
  text-align: center;
`;

const TextMain = styled.div`
  font-size: 54px;
  font-family: "Bluu Next";
  margin-top: 20px;
  margin-bottom: 36.18px;
  padding: 0 10px;
`;

const TextSub = styled.div`
  font-size: 22px;
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
  z-index: 100;
`;

const Button = styled.button`
  width: 280px;
  font-size: 12px;
  font-weight: 700;
  margin-top: 27px;
  padding: 18px 31px;
  border-radius: 30px;
  outline: none;
  cursor: pointer;

  margin-left: ${props => props.account && "10px"};
  color: ${props => props.account && "#ffffff"};
  background-color: ${props => props.account && "transparent"};
`;

const Diamond = styled.image`
  img {
    width: 30px;
    height: 60px;
    margin: 20px auto;
    z-index: 100;
  }
`;
