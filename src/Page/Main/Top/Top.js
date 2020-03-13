import React, { Component } from "react";
import logo from "Images/logo.svg";
import diamond from "Images/Diamond.svg";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Top extends Component {
  render() {
    return (
      <>
        <BgCover>
          <TopBgImg>
            <Nav></Nav>
            <Middle>
              <Logo src={logo} alt="" />
              <Article>
                <Title>
                  New audiobook <br></br>The Tales of Beedle the Bard is coming
                  soon
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
          </TopBgImg>
        </BgCover>
      </>
    );
  }
}

const Nav = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 28px;
  border: 1px solid white;
`;

const BgCover = styled.div`
  /* border: 1px solid yellow; */
  /* height: 2000px; */
`;

const TopBgImg = styled.div`
  background-image: url("https://images.ctfassets.net/usf1vwtuqyxm/1C7Sv1wIFHPt6u7RMWWfHd/25589514b25f1d5be5206c77d06b5fbc/Beedle_the_Bard_Article05.jpg?w=2880&h=1740&fit=fill&fm=webp");
  background-size: cover;
  background-position: center center;
  /* height: 100%; */
  width: 100%;
  /* max-width: 100vw; */
  z-index: 0;
  justify-content: center;
  /* z-index: 999; */
  ::before {
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

const Middle = styled.div`
  width: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  /* z-index: 1; */
`;

const Logo = styled.img`
  width: 350px;
  height: 75px;
  padding-top: 30px;
  z-index: 1;
`;

const Article = styled.div`
  margin: 40px 0;
  text-align: center;
  color: #f9f4f2;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 70px;
  font-family: "Bluu Next";
  margin: 20px 0;
  padding: 0 30px;
  max-width: 760px;
  z-index: 1;
`;

const Note = styled.div`
  max-width: 580px;
  height: 66px;
  padding: 0 150px;
  margin-bottom: 70px;
  font-size: 18px;
  font-family: "Sofia Pro Regular";
  line-height: 1.38;
  display: inline-block;
  position: relative;
  z-index: 1;
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

const Diamond = styled.image`
  img {
    width: 30px;
    height: 60px;
    margin: 50px 0;
    z-index: 100;
  }
`;

export default Top;