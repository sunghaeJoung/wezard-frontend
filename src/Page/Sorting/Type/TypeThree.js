import React, { useState } from "react";
import styled from "styled-components";
import { ArrowBackIos } from "styled-icons/material-twotone";
import { ArrowForwardIos } from "styled-icons/material-twotone";

const TypeThree = arr => {
  const [state, setState] = useState(0);
  const [idx, setIdx] = useState(0);

  const data = arr.data;
  const textArr =
    data &&
    data.choices &&
    data.choices.map(card => {
      return card.choice;
    });

  const { goResult } = arr;
  return (
    <Container>
      <Content>
        <Question>{data && data.question}</Question>
        <SliderContent>
          <SlidersCover>
            <SliderFrame></SliderFrame>
            <Sliders
              state={state}
              length={data && data.choices && data.choices.length}
            >
              {data &&
                data.choices &&
                data.choices.map((card, i) => (
                  <img key={i} src={card.img} alt="slider"></img>
                ))}
            </Sliders>
          </SlidersCover>
          {state !== 0 && (
            <ArrowLeft
              onClick={() => {
                setState(state + 234);
                setIdx(idx - 1);
              }}
            />
          )}
          {textArr && idx !== textArr.length - 1 && (
            <ArrowRight
              onClick={() => {
                setState(state - 234);
                setIdx(idx + 1);
              }}
            />
          )}
          {textArr && <Text>{textArr[idx]}</Text>}

          <Button onClick={() => goResult(idx + 6)}>SELECT</Button>
        </SliderContent>
      </Content>
    </Container>
  );
};

export default TypeThree;

const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-image: url("https://my.wizardingworld.com/static/media/bg@2x.7a83e923.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.section`
  text-align: center;
  font-family: "Sofia Pro Regular";
  color: #fff;
`;

const Question = styled.div`
  width: 50%;
  min-height: 108px;
  font-size: 20px;
  margin: 142px auto 0;
  text-align: center;
`;

const SliderContent = styled.div`
  width: 100%;
  max-width: 934px;
  min-height: 535px;
  margin: 33px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const SlidersCover = styled.div`
  width: 234px;
  height: 300px;
  margin: auto;
  overflow: hidden !important;
`;

const SliderFrame = styled.div`
  width: 234px;
  height: 300px;
  position: absolute;
  z-index: 999;
  background-image: url("https://my.wizardingworld.com/static/media/mask.6e673c8a.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Sliders = styled.div`
  display: flex;
  width: (${props => props.length} * 234) px;
  transform: translateX(${props => props.state}px);
  transition: transform 0.5s;

  img {
    width: 234px;
    height: 300px;
    margin: 0 auto;
    background-image: url("https://my.wizardingworld.com/static/media/bg.7edd08c8.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const ArrowLeft = styled(ArrowBackIos)`
  width: 50px;
  height: 50px;
  fill: rgb(159, 161, 173);
  position: absolute;
  top: 30%;
  left: 30%;
`;

const ArrowRight = styled(ArrowForwardIos)`
  width: 50px;
  height: 50px;
  fill: rgb(159, 161, 173);
  position: absolute;
  top: 30%;
  right: 30%;
`;

const Text = styled.div`
  font-size: 22px;
  font-family: "Bluu Next";
  min-height: 60px;
  margin-top: 50px;
  color: #fff;
`;

const Button = styled.button`
  font-size: 12px;
  font-family: "Sofia Pro Regular";
  border-radius: 30px;
  padding: 18px 31px;
  margin: 25px auto !important;
  color: #fff;
  background-color: transparent;
  min-width: 200px;
  outline: none;
  cursor: pointer;

  :hover {
    box-shadow: inset 0 0 0 1px #faf6f0;
  }
`;
