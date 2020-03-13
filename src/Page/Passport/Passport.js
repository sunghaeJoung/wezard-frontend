import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import hogwart from "../../Images/hogwart.svg";
import diamond from "../../Images/Diamond.svg";

export default class Passport extends Component {
  render() {
    return (
      <PassportComponent>
        <Header></Header>
        <Container>
          <PassportText>Wizarding Passport</PassportText>
          <Section>
            <HogwartImg src={hogwart} alt={hogwart}></HogwartImg>
            <UserNameContainer>
              {/* 백한테 api 유저정보 받아와야해 */}
              <UserName>joung</UserName>
              <UserName>sunghae</UserName>
            </UserNameContainer>
            <Button>DISCOVER YOUR HOUSE</Button>
          </Section>
          <SectionButtom>
            <Text>FAVORITES</Text>
            <img src={diamond} alt="diamond"></img>
          </SectionButtom>
        </Container>
      </PassportComponent>
    );
  }
}

const PassportComponent = styled.div`
  width: 100vw;
  height: 100vh;
  color: #ffffff;
  font-family: "Bluu Next";
  background-color: #393653;
  background-image: url(https://my.wizardingworld.com/static/media/bg.351c8f53.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const PassportText = styled.div`
  font-size: 24px;
  line-height: 32px;
  margin-top: 100px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HogwartImg = styled.image`
  width: 65px;
  height: 75px;
  padding: 20px 10px;
  background-color: white;
`;

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
`;

const UserName = styled.div`
  font-size: 75.675px;
`;

const Button = styled.button`
  width: 219.5px;
  height: 50px;
  color: #ffffff;
  background-color: transparent;
  font-size: 12px;
  font-weight: 700;
  border-radius: 30px;
  margin: 20px 10px;
  outline: none;

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 0 1px #faf6f0;
    transition: background-color 0.3s ease-in-out;
  }
`;

const SectionButtom = styled.div`
  /* height: 76px; */
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 20px 0;
  }
`;

const Text = styled.div`
  font-size: 20px;
  font-family: "Mason Sans Bold";
`;
