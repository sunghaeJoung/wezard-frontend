import React from "react";
import styled from "styled-components";

const MiddleBox = props => {
  return (
    <>
      <Wrapper>
        <Box>
          <Thumbnail src={props.thumbnail} alt="" />
          <Border></Border>
        </Box>
        <Text>
          <Title>{props.title}</Title>
          <Author>{props.author}</Author>
        </Text>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100%;
  max-height: 880px;
  margin-bottom: 50px;
`;

const Box = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  height: 595px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  position: absolute;
  width: 100%;
  max-width: 595px;
  z-index: 0;
`;

const Border = styled.div`
  position: absolute;
  margin: 10px;
  width: 575px;
  height: 575px;
  border: 1px solid #696b78;
  z-index: 10;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 120px;
`;

const Title = styled.div`
  width: 100%;
  max-width: 352px;
  font-family: "Bluu Next";
  font-size: 32px;
  color: black;
  z-index: 1000;
`;

const Author = styled.div`
  width: 100%;
  max-width: 352px;
  font-family: "Sofia Pro Bold";
  color: #777;
  font-size: 16px;
  margin: 16px 0 0 0;
`;

export default MiddleBox;
