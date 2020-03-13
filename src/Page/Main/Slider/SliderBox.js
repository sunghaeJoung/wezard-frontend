import React from "react";
import styled from "styled-components";

const SliderBox = props => {
  return (
    <>
      <DivWrapper>
        <Pic src={props.img} alt="" />
        <TextWrapper>
          <Category>{props.category}</Category>
          <Title>{props.title}</Title>
        </TextWrapper>
      </DivWrapper>
    </>
  );
};

const DivWrapper = styled.div`
  margin: 30px;
  /* position: relative; */
`;

const TextWrapper = styled.div`
  color: #ffffff;
  font-family: "Bluu Next";
  font-weight: 700;
  margin-top: -70px;
  margin-left: 12%;
  margin-right: 20%;
  max-width: 304px;
`;

const Pic = styled.img`
  width: 358px;
  margin-left: ${props => props.left && "50px"};
  opacity: 0.8;
`;

const Category = styled.div`
  font-size: 15px;
  position: relative;
  z-index: 9999;
`;

const Title = styled.div`
  font-size: 32px;
  margin-top: 10px;
  object-fit: contain;
  z-index: 9999;
  position: relative;
`;

export default SliderBox;
