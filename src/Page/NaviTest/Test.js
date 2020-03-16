import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      //☞ state값 들어갈 자리
    };
  }
  //☞ 함수 들어갈 자리
  render() {
    //☞ 맵함수 구현할 자리
    return (
      <>
        <Div>
          <Header></Header>
          New audiobook The Tales of Beedle the Bard is coming soon
          <Footer></Footer>
        </Div>
      </>
    );
  }
}

const Div = styled.div`
  width: 1000px;
  height: 609px;
  background-image: url("https://images.ctfassets.net/usf1vwtuqyxm/1C7Sv1wIFHPt6u7RMWWfHd/25589514b25f1d5be5206c77d06b5fbc/Beedle_the_Bard_Article05.jpg?w=1024&fm=webp");
  color: white;
  font-size: 47.3px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;

export default Test;
