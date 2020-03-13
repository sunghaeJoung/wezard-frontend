import React from "react";
import styled from "styled-components";

const LatestNewsBox = props => {
  return (
    <>
      <Card>
        <Thumbnail src={props.thumbnail} alt="" />
        <Border></Border>
        <Title>{props.title}</Title>
      </Card>
    </>
  );
};

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 380px;
  min-height: 352px;
  cursor: pointer;
  /* border: 1px solid blue; */
`;

const Thumbnail = styled.img`
  position: absolute;
  width: 100%;
  max-width: 440px;
  left: 0;
  top: 0;
  opacity: 0.8;
  clip-path: ellipse(500px 150px at 0% 20%);
`;

const Border = styled.span`
  position: absolute;
  margin-top: 10px;
  width: 360px;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #696b78;
`;

const Title = styled.div`
  position: absolute;
  width: 100%;
  max-width: 288px;
  align-items: center;
  object-fit: contain;
  font-family: "Sofia Pro Bold";
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
`;

export default LatestNewsBox;
