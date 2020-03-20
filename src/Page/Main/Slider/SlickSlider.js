import React, { Component } from "react";
import SliderBox from "./SliderBox";
import Slider from "react-slick";
import { URL } from "../../../config";
import styled from "styled-components";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class SlickSlider extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`${URL}/article/main-slide?end=118&step=12`, {
      method: "GET"
    })
      // fetch("http://10.58.7.135:8000/article/main-slide")
      .then(res => res.json())
      .then(res => {
        console.log("dddd", res);
        this.setState({
          data: res.data
        });
      });
  }

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
          {this.state.data &&
            this.state.data.map((item, i) => {
              return (
                <SliderBox
                  thumbnail={item.thumbnail}
                  category={item.name}
                  title={item.title}
                  key={i}
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

export default SlickSlider;
