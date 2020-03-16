import React from "react";
import styled from "styled-components";

const BottomBox = props => {
  return (
    <>
      <CardWrapper>
        <ThumbnailWrapper>
          <Thumbnail src={props.thumbnail} alt="" />
        </ThumbnailWrapper>
        <TextWrapper>
          <Category>{props.article}</Category>
          <Title>{props.title}</Title>
          <Author>{props.author}</Author>
        </TextWrapper>
      </CardWrapper>
    </>
  );
};

const CardWrapper = styled.div`
  width: 433px;
  height: 457px;
  letter-spacing: normal;
  flex-wrap: wrap;
  cursor: pointer;
`;

const ThumbnailWrapper = styled.div`
  text-align: center;
`;

const Thumbnail = styled.img`
  margin: 0 auto;
`;

const Category = styled.div`
  font-family: "Mason Sans Bold";
  font-size: 19px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-family: "Sofia Pro Bold";
  font-size: 19px;
  margin-bottom: 10px;
`;

const Author = styled.div`
  font-family: "Sofia Pro Bold";
  font-size: 16px;
  color: #777777;
`;

const TextWrapper = styled.div`
  text-align: center;
  width: 349px;
  margin: 10px auto 0;
`;

export default BottomBox;
