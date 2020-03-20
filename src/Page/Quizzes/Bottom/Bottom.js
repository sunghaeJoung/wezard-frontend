import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../../../config";
import BottomBox from "./BottomBox";

class Bottom extends Component {
  constructor() {
    super();

    this.state = {
      items: 2,
      preItems: 0,
      data: []
    };
  }

  quizDetail = id => {
    console.log("e.target.id", id);
    this.props.history.push(`/quizlist?id=${id}`);
  };

  getItem = () => {
    fetch(`${URL}/article/3?offset=4`)
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        let result = res.data.slice(this.state.preItems, this.state.items);
        console.log(result);
        this.setState({
          data: result
        });
      });
  };

  _infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      this.setState({
        preItems: this.state.preItems,
        items: this.state.items + 4
      });

      this.getItem();
    }
  };

  componentDidMount() {
    this.getItem();
    window.addEventListener("scroll", this._infiniteScroll, true);
  }
  render() {
    console.log("데이터", this.state.data);
    return (
      <BottomWrapper>
        <BodyWrapper>
          <TitleWrapper>
            <Head>More to explore</Head>
          </TitleWrapper>
          <WholeCardWrapper>
            {this.state.data.map((x, i) => {
              return (
                <BottomBox
                  thumbnail={x.thumbnail}
                  article={x.article}
                  title={x.title}
                  author={x.author}
                  id={i}
                  bridge={this.quizDetail}
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
  /* max-width: 1400px; */
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
`;

export default withRouter(Bottom);
