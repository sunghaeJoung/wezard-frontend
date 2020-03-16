import React, { Component } from "react";
import BottomBox from "./BottomBox";
import styled from "styled-components";

class Bottom extends Component {
  constructor() {
    super();

    this.state = {
      BottomData: []
    };
  }

  componentDidMount() {
    // fetch("http://localhost:3000/data/LatestNewsData.json", {
    //   method: "GET"
    // })
    fetch("http://localhost:3000/data/BottomData.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          BottomData: res.BottomData
        });
      });
  }

  render() {
    return (
      <BottomWrapper>
        <BodyWrapper>
          <TitleWrapper>
            <Head>More to explore</Head>
          </TitleWrapper>
          <WholeCardWrapper>
            {this.state.BottomData.map(item => {
              return (
                <BottomBox
                  thumbnail={item.thumbnail}
                  article={item.article}
                  title={item.title}
                  author={item.author}
                />
              );
            })}
          </WholeCardWrapper>
        </BodyWrapper>
      </BottomWrapper>
    );
  }
}

const BottomWrapper = styled.div`
  padding: 0 100px;
`;

const BodyWrapper = styled.div`
  /* margin: 0 160px; */
`;

const TitleWrapper = styled.div`
  margin-bottom: 50px;
`;

const Head = styled.div`
  font-family: "Bluu Next";
  color: black;
  font-size: 40px;
  text-align: center;
`;

const WholeCardWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
`;

export default Bottom;
