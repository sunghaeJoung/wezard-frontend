import React, { Component } from "react";
import logo from "Images/logo.svg";
import left_arrow from "Images/left_arrow.png";
import right_arrow from "Images/right_arrow.png";
import diamond from "Images/Diamond.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  appendDots: dots => (
    <DotsWrapper>
      <Dots> {dots} </Dots>
    </DotsWrapper>
  )
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <NextArrow
      src={right_arrow}
      style={{
        display: "block",
        opacity: "0.9",
        position: "absolute",
        top: "395px",
        left: "140px",
        width: "44px",
        cursor: "pointer",
        zIndex: "9999"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <PrevArrow
      src={left_arrow}
      style={{
        display: "block",
        opacity: "0.9",
        position: "absolute",
        top: "395px",
        left: "80px",
        width: "44px",
        cursor: "pointer",
        zIndex: "9999"
      }}
      onClick={onClick}
    />
  );
}

class MainTop extends Component {
  render() {
    return (
      <>
        <BgCover>
          <TopBgImg>
            <Middle>
              <Logo src={logo} alt="" />
              <Article>
                <Title>
                  New audiobook The Tales of Beedle the Bard is coming soon
                </Title>
                <Note>
                  The cream of Wizarding World talent, from Noma Dumezweni to
                  Jude Law, have joined forces to tell the stories of Beedle the
                  Bard for the first time in audio, in support of J.K. Rowling’s
                  charity Lumos.
                </Note>
                <Button>READ MORE</Button>
                <Diamond>
                  <img src={diamond} alt="diamond"></img>
                </Diamond>
              </Article>
            </Middle>
            <Video
              autoPlay
              loop
              playsinline
              src="https://my.wizardingworld.com/static/media/starsAboutPassport1440X820.43f19c59.mp4"
            ></Video>
            <TopBottom>
              <SliderWrapper>
                <Slider {...settings}>
                  <PicWrapper>
                    <Pic
                      src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
                      alt=""
                    ></Pic>
                    <TextWrapper>
                      <Category>news</Category>
                      <SliderTitle>
                        Bloomsbury and Scholastic reveal covers for new
                        illustrated edition of Quiddi...{" "}
                      </SliderTitle>
                    </TextWrapper>
                    <ArrowDotsWrapper>
                      <NextArrow />
                      <PrevArrow />
                      <Dots />
                      <Line></Line>
                    </ArrowDotsWrapper>
                  </PicWrapper>
                  <PicWrapper>
                    <Pic
                      src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
                      alt=""
                    />
                  </PicWrapper>
                  <PicWrapper>
                    <Pic
                      src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
                      alt=""
                    />
                  </PicWrapper>
                  <PicWrapper>
                    <Pic
                      src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
                      alt=""
                    />
                  </PicWrapper>
                  <PicWrapper>
                    <Pic
                      src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
                      alt=""
                    />
                  </PicWrapper>
                  <PicWrapper>
                    <Pic
                      src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
                      alt=""
                    />
                  </PicWrapper>
                  <PicWrapper>
                    <Pic
                      src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
                      alt=""
                    />
                  </PicWrapper>
                  <PicWrapper>
                    <Pic
                      src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
                      alt=""
                    />
                  </PicWrapper>
                  <PicWrapper>
                    <Pic
                      src="https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
                      alt=""
                    />
                  </PicWrapper>
                </Slider>
              </SliderWrapper>
            </TopBottom>
          </TopBgImg>
        </BgCover>
      </>
    );
  }
}

const Video = styled.video`
  width: 100vw;
  position: absolute;
`;

const TopBgImg = styled.div`
  background-image: url("https://images.ctfassets.net/usf1vwtuqyxm/1C7Sv1wIFHPt6u7RMWWfHd/25589514b25f1d5be5206c77d06b5fbc/Beedle_the_Bard_Article05.jpg?w=1440&h=1024&fit=fill&fm=webp");
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  justify-content: center;
  position: absolute;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      rgba(16, 20, 27, 0),
      rgba(16, 20, 27, 0) 45%,
      #10141b 90%
    );
  }
`;

const BgCover = styled.div`
  position: relative;
`;

const Middle = styled.div`
  width: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const Logo = styled.img`
  width: 350px;
  height: 75px;
`;

const Article = styled.div`
  margin: 40px 0;
  text-align: center;
  color: #f9f4f2;
  display: flex;
  flex-direction: column;
`;

const Title = styled.header`
  font-size: 60px;
  font-family: "Bluu Next";
  margin: 10px 0;
  padding: 0 30px;
  max-width: 760px;
`;

const Note = styled.span`
  max-width: 580px;
  height: 66px;
  padding: 0 150px;
  margin-bottom: 20px;
  font-size: 16px;
  font-family: "Sofia Pro Regular";
  line-height: 1.38;
  display: inline-block;
`;

const Button = styled.button`
  color: #f9f4f2;
  text-align: center;
  background-color: #6b63b5;
  font-family: "Sofia Pro Bold";
  font-size: 12px;
  width: 263px;
  margin: 0 auto;
  padding: 18px 31px;
  border-radius: 30px;
  border: none;
  z-index: 100;
  cursor: pointer;
  &:hover {
    background-color: #514a92;
    transition: 0.3s ease-in-out;
  }
`;

const TopBottom = styled.div`
  position: relative;
  z-index: 99999;
`;

const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 1272px;
  justify-content: center;
  .slick-dots {
    background-color: none !important;
  }
`;

const PicWrapper = styled.div`
  margin: 30px;
  position: relative;
`;

const Pic = styled.img`
  width: 358px;
  margin-left: ${props => props.left && "50px"};
`;

const NextArrow = styled.img``;
const PrevArrow = styled.img``;

const TextWrapper = styled.div`
  color: #ffffff;
  font-family: "Bluu Next";
  font-weight: 700;
  margin-top: -70px;
  margin-left: 12%;
  margin-right: 20%;
  max-width: 304px;
`;

const Category = styled.div`
  font-size: 15px;
`;

const SliderTitle = styled.div`
  font-size: 32px;
  margin-top: 10px;
  object-fit: contain;
`;

const ArrowDotsWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Diamond = styled.image`
  img {
    width: 30px;
    height: 60px;
    margin: 50px 0;
    z-index: 100;
  }
`;

const DotsWrapper = styled.div`
  left: -330px;
  top: 390px;
  &::before {
    color: white;
  }
`;

const Dots = styled.ul`
  &::before {
    color: white;
  }
`;

const Line = styled.div`
  background-color: #353643;
  position: absolute;
  width: 700px;
  height: 1px;
  left: 450px;
  top: 40px;
`;

export default MainTop;
