import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Diamond from "../../Components/Diamond";

export default class Passport extends Component {
  goToSorting = () => {
    const token = sessionStorage.getItem("token");
    token && this.props.history.push("/sorting");
  };

  render() {
    return (
      <PassportComponent>
        <Header></Header>
        <Container>
          <PassportText>Wizarding Passport</PassportText>
          <Section>
            <UserNameContainer>
              {/* 백한테 api 유저정보 받아와야해 */}
              <UserName>joung</UserName>
              <UserName>sunghae</UserName>
            </UserNameContainer>
            <Button onClick={this.goToSorting}>DISCOVER YOUR HOUSE</Button>
          </Section>
          <SectionButtom>
            <Text>FAVORITES</Text>
            <Diamond />
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
  justify-content: space-between;
`;

const PassportText = styled.div`
  font-size: 24px;
  text-align: center;
  line-height: 32px;
  margin-top: 100px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-size: 20px;
  font-family: "Mason Sans Bold";
`;
