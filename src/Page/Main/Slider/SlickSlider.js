import React, { Component } from "react";
import SliderBox from "./SliderBox";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class SlickSlider extends Component {
  constructor() {
    super();

    this.state = {
      SliderData: []
    };
  }

  componentDidMount() {
    // fetch("http://localhost:3000/data/FeaturesData.json", {
    //   method: "GET"
    // })
    fetch("http://localhost:3000/data/SliderData.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          SliderData: res.SliderData
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
          {this.state.SliderData.map(item => {
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

export default SlickSlider;
