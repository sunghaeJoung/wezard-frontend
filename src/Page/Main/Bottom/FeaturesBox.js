import React from "react";
import styled from "styled-components";

const FeaturesBox = props => {
  return (
    <>
      <Box>
        <Thumbnail src={props.thumbnail} alt="" />
        <Title>{props.title}</Title>
        <Border></Border>
      </Box>
    </>
  );
};

const Box = styled.div`
  position: relative;
  /* float: left; */
  margin-bottom: 30px;
  width: 100%;
  max-width: 492px;
  min-height: 353px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    transition: transform 0.5s;
  }
`;

const Thumbnail = styled.img`
  position: absolute;
  opacity: 0.8;
  width: 100%;
  max-width: 492px;
  opacity: 0.8;
  z-index: 0;
  clip-path: ellipse(550px 150px at 0% 20%);
`;

const Border = styled.div`
  position: absolute;
  margin: 10px;
  width: 472px;
  height: 323px;
  border: 1px solid #696b78;
  z-index: 10;
`;

const Title = styled.div`
  position: absolute;
  width: 100%;
  max-width: 352px;
  font-family: "Bluu Next";
  font-size: 32px;
  top: 180px;
  left: 10%;
  color: #fff;
  z-index: 1000;
`;

export default FeaturesBox;

// import React from "react";
// import styled from "styled-components";

// const FeaturesBox = props => {
//   return (
//     <>
//       <Box>
//         <Thumbnail src={props.thumbnail} alt="" />
//         <Title>{props.title}</Title>
//         <Border></Border>
//       </Box>
//     </>
//   );
// };

// const Box = styled.div`
//   position: relative;
//   float: left;
//   margin-bottom: 30px;
//   width: 100%;
//   max-width: 492px;
//   min-height: 353px;
//   cursor: pointer;
//   &:hover {
//     transform: scale(1.01);
//     transition: transform 0.5s;
//   }

//   float: ${props => props.right && "right"};
//   margin-top: ${props => props.right && "80px"};
// `;

// const Thumbnail = styled.img`
//   position: absolute;
//   opacity: 0.8;
//   width: 492px;
//   opacity: 0.8;
//   z-index: 0;
//   clip-path: ellipse(550px 150px at 0% 20%);
// `;

// const Border = styled.div`
//   position: relative;
//   margin: 10px;
//   width: 472px;
//   height: 333px;
//   border: 1px solid #696b78;
//   z-index: 10;
// `;

// const Title = styled.div`
//   position: absolute;
//   width: 100%;
//   max-width: 352px;
//   font-family: "Bluu Next";
//   font-size: 32px;
//   top: 180px;
//   left: 10%;
//   color: #fff;
//   z-index: 1000;
// `;

// export default FeaturesBox;
