import React, { Component } from "react";
import styled from "styled-components";
import { URL } from "../../../config";
import MiddleBox from "./MiddleBox";

class Middle extends Component {
  constructor() {
    super();

    this.state = {
      Left: [],
      Right: []
    };
  }

  componentDidMount() {
    fetch(`${URL}/article/1`, {
      method: "GET"
    })
      // fetch("http://localhost:3000/data/MiddleData.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          Left: res.data.slice(1, 3),
          Right: res.data.slice(3, 5)
        });
      });
  }

  render() {
    return (
      <>
        <MiddleWrapper>
          <ArticleWrapper>
            <Title>Latest greatest</Title>
            <Body>
              <Pic src="https://images.ctfassets.net/usf1vwtuqyxm/45SS4oH0M8IKj0KCHt9txL/820fd7568d795ca3c17913ac119082d0/web-header.jpg?h=700&w=700&fit=fill&f=top&fm=webp" />
              <Cover>
                <TextWrapper>
                  <Category>FEATURE SPOTLIGHT</Category>
                  <TextTitle>
                    Bloomsbury and Scholastic reveal covers for new illustrated
                    edition of Quidditch Through the Ages
                  </TextTitle>
                  <Text>
                    Brooms at the ready! Bloomsbury and Scholastic have shared
                    their stunning covers for J.K. Rowling’s Hogwarts Library
                    book, as well as a sneak peek at some of the playful and
                    colourful illustrations you’ll find inside...
                  </Text>
                  <Author>By The Wizarding World Team</Author>
                  <Button>READ FEATURE</Button>
                </TextWrapper>
              </Cover>
            </Body>
          </ArticleWrapper>
        </MiddleWrapper>
        <FeaturesWrapper>
          <BoxWrapper>
            <Left>
              {this.state.Left.map(item => {
                return (
                  <MiddleBox
                    thumbnail={item.thumbnail}
                    title={item.title}
                    author={item.author}
                  />
                );
              })}
            </Left>
            <Right>
              {this.state.Right.map(item => {
                return (
                  <MiddleBox
                    thumbnail={item.thumbnail}
                    title={item.title}
                    author={item.author}
                  />
                );
              })}
            </Right>
          </BoxWrapper>
          <LineWrapper>
            <Line></Line>
            <Dia
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDMyIDE3Ij4KICAgIDxwYXRoIGZpbGw9IiM3NTc1NzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTguMjk1IDBsOC4yOTUgOC4yOTUtOC4yOTUgOC4yOTVMMCA4LjI5NSA4LjI5NSAwem0wIDEuNDE0bC02Ljg4IDYuODgxIDYuODggNi44ODEgNi44ODEtNi44OC02Ljg4LTYuODgyek0xNS44ODMgMGw4LjI5NSA4LjI5NS04LjI5NSA4LjI5NS04LjI5NS04LjI5NUwxNS44ODMgMHptMCAxLjQxNGwtNi44OCA2Ljg4MSA2Ljg4IDYuODgxIDYuODgtNi44OC02Ljg4LTYuODgyek0yMy40NzEgMGw4LjI5NSA4LjI5NS04LjI5NSA4LjI5NS04LjI5NS04LjI5NUwyMy40NyAwek0xNi41OSA4LjI5NWw2Ljg4IDYuODgxIDYuODgyLTYuODgtNi44ODEtNi44ODItNi44ODEgNi44ODF6IiBvcGFjaXR5PSIuMjYzIi8+Cjwvc3ZnPgo="
              alt=""
            ></Dia>
            <Line></Line>
          </LineWrapper>
        </FeaturesWrapper>
      </>
    );
  }
}

const MiddleWrapper = styled.div``;

const ArticleWrapper = styled.div`
  padding: 0 100px 0 100px;
`;

const Title = styled.div`
  text-align: center;
  color: #10141b;
  font-size: 40px;
  font-family: "Bluu Next";
  padding: 50px 0 50px 0;
`;

const Body = styled.div`
  position: relative;
  display: flex;
  width: 1245px;
  margin: 0 auto;
`;

const Pic = styled.img`
  position: absolute;
`;

const Cover = styled.div`
  background-color: #242633;
  width: 100%;
  max-width: 595px;
  height: 764px;
  z-index: 999999;
  margin: 41px 0 0 655px;
`;

const TextWrapper = styled.div`
  color: #ffffff;
  padding: 93px 0 0 107px;
`;

const Category = styled.div`
  font-size: 16px;
  font-family: "Mason Sans Regular";
  margin: 0 0 6px;
`;

const TextTitle = styled.div`
  font-size: 32px;
  font-family: "Bluu Next";
  margin: 12px 0;
  width: 60%;
`;

const Text = styled.div`
  font-size: 20px;
  font-family: "Sofia Pro Regular";
  margin: 12px 0;
  width: 70%;
`;

const Author = styled.div`
  color: #9fa1ad;
  font-family: "Sofia Pro Regular";
  font-size: 16px;
  margin-bottom: 15px;
`;

const Button = styled.div`
  padding: 18px 31px;
  font-size: 12px;
  border-radius: 30px;
  font-family: "Sofia Pro Bold";
  box-shadow: inset 0 0 0 1px #d2d3db;
  background-color: transparent;
  width: 100%;
  max-width: 98px;
  text-align: center;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    background-color: #ffffff;
    color: black;
  }
`;

const Left = styled.div`
  width: 100%;
`;

const Right = styled.div`
  width: 100%;
  margin-left: 45px;
`;

const FeaturesWrapper = styled.div`
  margin: 150px auto 50px;
  width: 100%;
  max-width: 1240px;
`;

const BoxWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LineWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  background-color: #757575;
  opacity: 0.26;
  width: 100%;
  height: 1px;
`;

const Dia = styled.img`
  margin: 0 10px;
`;

export default Middle;
