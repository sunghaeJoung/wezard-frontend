import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class TypeTwo extends Component {
  render() {
    return (
      <Container>
        <Question>
          {/* 패치로 text 받아와야해 */}
          <QuestionText main>
            If you were attending Hogwarts, which pet would you choose to take
            with you?
          </QuestionText>
          <QuestionText sub>CHOOSE A CATEGORY TO CONTINUE</QuestionText>
        </Question>
        <CardWrapper>
          <Card>
            <img
              src="https://my.wizardingworld.com/static/media/cat@2x.9caf18ee.png"
              alt="card"
            ></img>
            <CardButtom left>
              <Num>
                <div></div>
              </Num>
              <Name>Cats</Name>
              <Button>SELECT</Button>
            </CardButtom>
          </Card>
          <Card>
            <img
              src="https://my.wizardingworld.com/static/media/toad@2x.51fb4db6.png"
              alt="card"
            ></img>
            <CardButtom>
              <Num>
                <div></div>
              </Num>
              <Name>Cats</Name>
              <Button>SELECT</Button>
            </CardButtom>
          </Card>
          <Card>
            <img
              src="https://my.wizardingworld.com/static/media/owl@2x.793a5c37.png"
              alt="card"
            ></img>
            <CardButtom right>
              <Num>
                <div></div>
              </Num>
              <Name>Cats</Name>
              <Button>SELECT</Button>
            </CardButtom>
          </Card>
        </CardWrapper>
      </Container>
    );
  }
}

const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

const Question = styled.div`
  width: 100%;
`;

const QuestionText = styled.div`
  font-family: "Sofia Pro Regular";
  font-size: 20px;
  text-align: center;

  ${props =>
    props.main &&
    css`
      margin: 142px auto 0;
      min-height: 108px;
      width: 50%;
    `}

  ${props =>
    props.sub &&
    css`
      font-size: 14px;
      color: #9fa1ad;
      margin: 10px auto 0;
    `}
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Card = styled.div`
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  filter: grayscale(100%);

  :hover {
    filter: grayscale(0);
  }

  img {
    width: 90%;
    height: 700px;
    object-fit: cover;
  }
`;

const CardButtom = styled.div`
  max-width: 200px;
  width: 200px;
  /* padding-left: 20%; */
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-left: ${props => props.left && "20%"};
  padding-right: ${props => props.right && "20%"};
`;

const Num = styled.div`
  div {
    width: 23px;
    height: 23px;
    border: 1px solid hsla(0, 0%, 100%, 0.3);
    transform: rotate(-45deg);

    ::after {
      content: "I";
      font-size: 12px;
      text-align: center;
      font-weight: 700;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      transform: rotate(45deg);
    }
  }
`;

const Name = styled.div`
  font-size: 32px;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: auto;
  color: #ffffff;
  margin-top: 15px;
  padding: 18px 31px;
  background-color: transparent;
  border-radius: 30px;
  cursor: pointer;

  :hover {
    box-shadow: inset 0 0 0 1px #faf6f0;
  }
`;
