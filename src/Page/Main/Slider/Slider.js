import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block" }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block" }}
          onClick={onClick}
        />
      );
    }

    return (
      <SliderWrapper>
        <Slider {...settings}>
          <DivWrapper>
            <Pic
              src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
              alt=""
            />
            <TextWrapper>
              <Category>news</Category>
              <Title>
                Bloomsbury and Scholastic reveal covers for new illustrated
                edition of Quiddi...
              </Title>
            </TextWrapper>
          </DivWrapper>
          <DivWrapper>
            {" "}
            <Pic
              src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
              alt=""
            />
            <TextWrapper>
              <Category>news</Category>
              <Title>
                Bloomsbury and Scholastic reveal covers for new illustrated
                edition of Quiddi...
              </Title>
            </TextWrapper>
          </DivWrapper>
          <DivWrapper>
            {" "}
            <Pic
              src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
              alt=""
            />
            <TextWrapper>
              <Category>news</Category>
              <Title>
                Bloomsbury and Scholastic reveal covers for new illustrated
                edition of Quiddi...
              </Title>
            </TextWrapper>
          </DivWrapper>
          <DivWrapper>
            {" "}
            <Pic
              src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
              alt=""
            />
            <TextWrapper>
              <Category>news</Category>
              <Title>
                Bloomsbury and Scholastic reveal covers for new illustrated
                edition of Quiddi...
              </Title>
            </TextWrapper>
          </DivWrapper>
          <DivWrapper>
            {" "}
            <Pic
              src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
              alt=""
            />
            <TextWrapper>
              <Category>news</Category>
              <Title>
                Bloomsbury and Scholastic reveal covers for new illustrated
                edition of Quiddi...
              </Title>
            </TextWrapper>
          </DivWrapper>
        </Slider>
      </SliderWrapper>
    );
  }
}

const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 1272px;
  justify-content: center;
  .slick-dots {
    background-color: none !important;
  }
`;

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
`;

const Category = styled.div`
  font-size: 15px;
`;

const Title = styled.div`
  font-size: 32px;
  margin-top: 10px;
  object-fit: contain;
`;
