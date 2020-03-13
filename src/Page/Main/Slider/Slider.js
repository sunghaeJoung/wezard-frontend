import React, { Component } from "react";
import SliderBox from "./SliderBox";
import SliderData from "./SliderData";
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
          {SliderData.map(item => {
            return (
              <SliderBox
                img={item.img}
                category={item.category}
                title={item.title}
              />
            );
          })}
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
