import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

class Navigator extends React.Component {
  constructor() {
    super();
    this.state = {
      //☞ state값 들어갈 자리
    };
  }
  goPage = e => {
    this.props.history.push(e);
  };
  /*   함수 한개로 리팩토링
  goNews = () => {
    this.props.history.push("/news");
  };
  goHogwarts = () => {
    this.props.history.push("/sorting");
  };
  goFeatures = () => {
    this.props.history.push("/features");
  };
  goQuizzes = () => {
    this.props.history.push("/quizlist");
  }; */

  //☞ 함수 들어갈 자리
  render() {
    //☞ 맵함수 구현할 자리
    return (
      <>
        <NaviFilm film={this.props.film}></NaviFilm>

        <NaviOuterDivRoot menu={this.props.menu}>
          <NaviUl>
            <NaviLi onClick={this.props.popNewsBar}>
              <NaviSpan1
                menu={this.props.menu}
                movingNews={this.props.movingNews}
              >
                News & Features
              </NaviSpan1>
              <IoIosArrowForward size="24" color="white" />
            </NaviLi>
            <NaviLi onClick={() => this.goPage("/quizlist")}>
              <NaviSpan2 menu={this.props.menu}>Quizzes</NaviSpan2>
            </NaviLi>
            <NaviLi>
              <NaviSpan3 menu={this.props.menu}>J.K. Rowling Archive</NaviSpan3>
            </NaviLi>
            <NaviLi onClick={this.props.popHouseBar}>
              <NaviSpan4
                menu={this.props.menu}
                movingHouse={this.props.movingHouse}
              >
                House Pride
              </NaviSpan4>
              <IoIosArrowForward size="24" color="white" />
            </NaviLi>
            <NaviLi onClick={this.props.popDiscoverBar}>
              <NaviSpan5
                menu={this.props.menu}
                movingDiscover={this.props.movingDiscover}
              >
                Discover
              </NaviSpan5>
              <IoIosArrowForward size="24" color="white" />
            </NaviLi>
            <NaviLi onClick={() => this.goPage("/sorting")}>
              <NaviSpan6 menu={this.props.menu}>Hogwarts Sorting</NaviSpan6>
            </NaviLi>
            <NaviLi>
              <NaviSpan7 menu={this.props.menu}>Fan Club</NaviSpan7>
            </NaviLi>
            <NaviLi>
              <NaviSpan8 menu={this.props.menu}>Shop</NaviSpan8>
            </NaviLi>
          </NaviUl>
        </NaviOuterDivRoot>

        <NaviOuterDivRow1 news={this.props.news}>
          <NaviUlRow>
            <NaviLiRow noneCursor>
              <NaviSpan>News & Features</NaviSpan>
            </NaviLiRow>
            {/* <NaviLiRow onClick={this.goNews}> */}
            <NaviLiRow onClick={() => this.goPage("/news")}>
              <NaviSpanRow>News</NaviSpanRow>
            </NaviLiRow>
            <NaviLiRow onClick={() => this.goPage("/features")}>
              <NaviSpanRow>Features</NaviSpanRow>
            </NaviLiRow>
          </NaviUlRow>
        </NaviOuterDivRow1>

        <NaviOuterDivRow2 house={this.props.house}>
          <NaviUlRow>
            <NaviLiRow noneCursor>
              <NaviSpan>House Pride</NaviSpan>
            </NaviLiRow>
            <NaviLiRow>
              <NaviSpanRow>Gryffindor</NaviSpanRow>
            </NaviLiRow>
            <NaviLiRow>
              <NaviSpanRow>Hufflepuff</NaviSpanRow>
            </NaviLiRow>
            <NaviLiRow>
              <NaviSpanRow>Ravenclaw</NaviSpanRow>
            </NaviLiRow>
            <NaviLiRow>
              <NaviSpanRow>Slytherin</NaviSpanRow>
            </NaviLiRow>
          </NaviUlRow>
        </NaviOuterDivRow2>

        <NaviOuterDivRow3 discover={this.props.discover}>
          <NaviUlRow>
            <NaviLiRow noneCursor>
              <NaviSpan>Discover</NaviSpan>
            </NaviLiRow>
            <NaviLiRow>
              <NaviSpanRow>Books</NaviSpanRow>
            </NaviLiRow>
            <NaviLiRow>
              <NaviSpanRow>Films</NaviSpanRow>
            </NaviLiRow>
            <NaviLiRow>
              <NaviSpanRow>On Stage</NaviSpanRow>
            </NaviLiRow>
            <NaviLiRow>
              <NaviSpanRow>Portkey Games</NaviSpanRow>
            </NaviLiRow>
            <NaviLiRow>
              <NaviSpanRow>Experiences</NaviSpanRow>
            </NaviLiRow>
          </NaviUlRow>
        </NaviOuterDivRow3>
      </>
    );
  }
}
const NaviFilm = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: ${props => (props.film ? "0%" : "-100%")};
  /* film이 true냐 아니냐에 따른 적용 */
  /* left: 0%하면 화면을 모두 덮음 */
  z-index: 996;
  background-color: black;
  opacity: 30%;
  width: 100%;
  height: 100vh;
  transition-duration: 0.5s;
`;
const NaviOuterDivRoot = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: ${props => (props.menu ? "0" : "-600px")};
  /*left -600px이면 숨김, left 0이면 나타남  */
  z-index: 998;
  width: 600px;
  height: 100vh;
  background-color: black;
  color: white;
  /* font-weight: bold; */
  transition-duration: 1s;
`;
const NaviOuterDivRow1 = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: ${props => (props.news ? "600px" : "-480px")};
  /* left: 600px; */
  /* left-480px하면 숨김, left: 600px하면 오른쪽에 붙음 */
  z-index: 997;
  width: 385px;
  height: 100vh;
  background-color: black;
  color: white;
  font-weight: bold;
  transition-duration: 0.8s;
`;
const NaviOuterDivRow2 = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: ${props => (props.house ? "600px" : "-480px")};
  /* left: 600px; */
  /* left-480px하면 숨김, left: 600px하면 오른쪽에 붙음 */
  z-index: 997;
  width: 385px;
  height: 100vh;
  background-color: black;
  color: white;
  font-weight: bold;
  transition-duration: 0.8s;
`;
const NaviOuterDivRow3 = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: ${props => (props.discover ? "600px" : "-480px")};
  /* left: 600px; */
  /* left-480px하면 숨김, left: 600px하면 오른쪽에 붙음 */
  z-index: 997;
  width: 385px;
  height: 100vh;
  background-color: black;
  color: white;
  font-weight: bold;
  transition-duration: 0.8s;
`;
const NaviUl = styled.ul`
  list-style-type: none;
  margin-top: 130px;
  margin-left: 60px;
  margin-right: 30px;
`;
const NaviLi = styled.li`
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;
const NaviSpan = styled.span`
  font-size: 40px;
  margin: ${props =>
    props.movingNews
      ? "40px"
      : props =>
          props.movingHouse
            ? "40px"
            : props => (props.movingDiscover ? "40px" : "0px")};
  transition-duration: 1s;
`;
const NaviSpan1 = styled.span`
  font-size: 40px;
  margin: ${props =>
    props.movingNews
      ? "40px"
      : props =>
          props.movingHouse
            ? "40px"
            : props => (props.movingDiscover ? "40px" : "0px")};
  color: ${props => (props.menu ? "white" : "black")};
  font-weight: bold;
  transition: margin 1s, color 0s, font-weight 0s;
`;
const NaviSpan2 = styled.span`
  font-size: 40px;
  margin: ${props =>
    props.movingNews
      ? "40px"
      : props =>
          props.movingHouse
            ? "40px"
            : props => (props.movingDiscover ? "40px" : "0px")};
  color: ${props => (props.menu ? "white" : "black")};
  font-weight: bold;
  transition: margin 1s, color 0.4s, font-weight 0.8s;
`;
const NaviSpan3 = styled.span`
  font-size: 40px;
  margin: ${props =>
    props.movingNews
      ? "40px"
      : props =>
          props.movingHouse
            ? "40px"
            : props => (props.movingDiscover ? "40px" : "0px")};
  color: ${props => (props.menu ? "white" : "black")};
  font-weight: bold;
  transition: margin 1s, color 0.8s, font-weight 1.2s;
`;
const NaviSpan4 = styled.span`
  font-size: 40px;
  margin: ${props =>
    props.movingNews
      ? "40px"
      : props =>
          props.movingHouse
            ? "40px"
            : props => (props.movingDiscover ? "40px" : "0px")};
  color: ${props => (props.menu ? "white" : "black")};
  font-weight: bold;
  transition: margin 1s, color 1.2s, font-weight 1.6s;
`;
const NaviSpan5 = styled.span`
  font-size: 40px;
  margin: ${props =>
    props.movingNews
      ? "40px"
      : props =>
          props.movingHouse
            ? "40px"
            : props => (props.movingDiscover ? "40px" : "0px")};
  color: ${props => (props.menu ? "white" : "black")};
  font-weight: bold;
  transition: margin 1s, color 1.6s, font-weight 2s;
`;
const NaviSpan6 = styled.span`
  font-size: 40px;
  margin: ${props =>
    props.movingNews
      ? "40px"
      : props =>
          props.movingHouse
            ? "40px"
            : props => (props.movingDiscover ? "40px" : "0px")};
  color: ${props => (props.menu ? "white" : "black")};
  font-weight: bold;
  transition: margin 1s, color 2s, font-weight 2.4s;
`;
const NaviSpan7 = styled.span`
  font-size: 40px;
  margin: ${props =>
    props.movingNews
      ? "40px"
      : props =>
          props.movingHouse
            ? "40px"
            : props => (props.movingDiscover ? "40px" : "0px")};
  color: ${props => (props.menu ? "white" : "black")};
  font-weight: bold;
  transition: margin 1s, color 2.4s, font-weight 2.8s;
`;
const NaviSpan8 = styled.span`
  font-size: 40px;
  margin: ${props =>
    props.movingNews
      ? "40px"
      : props =>
          props.movingHouse
            ? "40px"
            : props => (props.movingDiscover ? "40px" : "0px")};
  color: ${props => (props.menu ? "white" : "black")};
  font-weight: bold;
  transition: margin 1s, color 2.8s, font-weight 3.2s;
`;
const NaviUlRow = styled.ul`
  list-style-type: none;
  margin-top: 130px;
  border-left: 1px solid white;

  /*   border-image: linear-gradient(to bottom, white 100%, white 30%);
 */
`;
const NaviLiRow = styled.li`
  display: flex;
  justify-content: space-between;
  height: 48px;
  margin-top: 6px;
  align-items: center;
  /* font-family: Sofia Pro regular, serif; */
  cursor: ${props => (props.noneCursor ? "" : "pointer")};
`;

const NaviSpanRow = styled.span`
  height: 48px;
  cursor: pointer;
  text-align: center;
  font-family: Sofia Pro regular, serif;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
`;

export default withRouter(Navigator);
