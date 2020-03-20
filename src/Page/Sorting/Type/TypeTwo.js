import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class TypeTwo extends Component {
  handleClick = select => {
    const { goNext } = this.props;
    sessionStorage.setItem("select2", select);
    goNext();
  };

  render() {
    const { data } = this.props;
    return (
      <Container>
        <Question>
          <QuestionText main>{data && data.question}</QuestionText>
          <QuestionText sub>CHOOSE A CATEGORY TO CONTINUE</QuestionText>
        </Question>
        <CardWrapper>
          {data &&
            data.choices &&
            data.choices.map((card, i) => {
              return (
                <Card key={i}>
                  <img src={card.img} alt="card"></img>
                  <CardButtom
                    left={i === 0 && "left"}
                    right={i === 2 && "right"}
                  >
                    <Num>
                      <div>
                        <div>{i + 1}</div>
                      </div>
                    </Num>
                    <Name>{card.choice}</Name>
                    <Button onClick={() => this.handleClick(card.id)}>
                      SELECT
                    </Button>
                  </CardButtom>
                </Card>
              );
            })}
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

    div {
      border: none;
      font-size: 12px;
      text-align: center;
      font-weight: 700;
      position: absolute;
      left: -3px;
      top: 4px;
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
