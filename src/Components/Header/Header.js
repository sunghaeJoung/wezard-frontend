import React from "react";
import Logo from "./Logo.svg";
import { FaMagic } from "react-icons/fa";
import styled from "styled-components";
import Navigator from "../Navigator/Navigator";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: false,
      film: false,
      menu: false,
      news: false,
      house: false,
      discover: false,
      movingNews: false,
      movingHouse: false,
      movingDiscover: false,
      loginStatus: false

      //☞ state값 들어갈 자리
    };
  }
  /* 
  componentdidmount로 getItem체크해서 
    토큰 있으면 
      로그아웃버튼 표시
    토큰 없으면 
      로그인버튼 표시 
  로그아웃하면 remove 토큰 
  */
  componentDidMount() {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      this.setState({
        loginStatus: true
      });
    } else {
      this.setState({
        loginStatus: false
      });
    }
  }
  goHome = () => {
    this.props.history.push("/");
  };
  goLogin = () => {
    this.props.history.push("/login");
  };

  popMenuBar = () => {
    if (this.state.mode === false) {
      this.setState({
        mode: true,
        film: true,
        menu: true,
        news: false,
        house: false,
        discover: false
      });
    } else if (this.state.mode === true) {
      this.setState({
        mode: false,
        film: false,
        menu: false,
        news: false,
        house: false,
        discover: false,
        movingNews: false,
        movingDiscover: false,
        movingHouse: false
      });
    }
  };
  popNewsBar = () => {
    if (this.state.news === false) {
      this.setState({
        news: true,
        house: false,
        discover: false,
        movingNews: true,
        movingDiscover: false,
        movingHouse: false
      });
    } else if (this.state.news === true) {
      this.setState({
        news: false,
        movingNews: false,
        movingHouse: false,
        movingDiscover: false
      });
    }
  };
  popHouseBar = () => {
    if (this.state.house === false) {
      this.setState({
        house: true,
        news: false,
        discover: false,
        movingNews: false,
        movingHouse: true,
        movingDiscover: false
      });
    } else if (this.state.house === true) {
      this.setState({
        house: false,
        movingNews: false,
        movingHouse: false,
        movingDiscover: false
      });
    }
  };
  popDiscoverBar = () => {
    if (this.state.discover === false) {
      this.setState({
        discover: true,
        news: false,
        house: false,
        movingNews: false,
        movingHouse: false,
        movingDiscover: true
      });
    } else if (this.state.discover === true) {
      this.setState({
        discover: false,
        movingNews: false,
        movingHouse: false,
        movingDiscover: false
      });
    }
  };
  //☞ 함수 들어갈 자리
  render() {
    //☞ 맵함수 구현할 자리
    return (
      <>
        <HeaderDiv>
          <OuterDiv>
            <HeaderNaviDiv>
              <MenuIconInput
                type="checkbox"
                id="MenuIcon"
                onClick={this.popMenuBar}
              ></MenuIconInput>
              <MenuIconLabel htmlFor="MenuIcon">
                <MenuIconSpan></MenuIconSpan>
                <MenuIconSpan></MenuIconSpan>
                <MenuIconSpan></MenuIconSpan>
                <MenuIconSpan></MenuIconSpan>
                <MenuIconSpan></MenuIconSpan>
                <MenuIconSpan></MenuIconSpan>
                <MenuIconSpan></MenuIconSpan>
                <MenuIconSpan></MenuIconSpan>
                <MenuIconSpan></MenuIconSpan>
                <MenuIconSpan></MenuIconSpan>
              </MenuIconLabel>
            </HeaderNaviDiv>
            <HeaderLogoDiv onClick={this.goHome}>
              <LogoImg src={Logo}></LogoImg>
            </HeaderLogoDiv>
            {this.state.loginStatus === true ? (
              <HeaderLogin onClick={this.goLogin}>
                <FaMagic size="40" color="white" />
              </HeaderLogin>
            ) : (
              <HeaderLogin onClick={this.goLogin}>LOGIN</HeaderLogin>
            )}
          </OuterDiv>
        </HeaderDiv>
        <Navigator
          film={this.state.film}
          menu={this.state.menu}
          popNewsBar={this.popNewsBar}
          news={this.state.news}
          popHouseBar={this.popHouseBar}
          house={this.state.house}
          popDiscoverBar={this.popDiscoverBar}
          discover={this.state.discover}
          movingNews={this.state.movingNews}
          movingHouse={this.state.movingHouse}
          movingDiscover={this.state.movingDiscover}
        ></Navigator>
      </>
      //구현할 화면 태그 들어갈 자리
    );
  }
}

const MenuIconInput = styled.input`
  display: none;
  & + label {
    display: block;
    width: 25px;
    height: 20px;
    /* 메뉴아이콘 박스의 크기 */
    position: relative;
    cursor: pointer;
  }
  & + label span {
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    /* 메뉴아이콘 한줄의 크기 */
    border-radius: 30px;
    background: white;
    transition: all 0.35s;
  }
  & + label span:nth-child(1) {
    top: 0;
  }
  & + label span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  & + label span:nth-child(3) {
    top: 50%;
    transform: translateY(-50%);
  }
  & + label span:nth-child(4) {
    top: 50%;
    transform: translateY(-50%);
  }
  & + label span:nth-child(5) {
    top: 50%;
    transform: translateY(-50%);
  }
  & + label span:nth-child(6) {
    top: 50%;
    transform: translateY(-50%);
  }
  & + label span:nth-child(7) {
    top: 50%;
    transform: translateY(-50%);
  }
  & + label span:nth-child(8) {
    top: 50%;
    transform: translateY(-50%);
  }
  & + label span:nth-child(9) {
    top: 50%;
    transform: translateY(-50%);
  }
  & + label span:nth-child(10) {
    bottom: 0;
  }

  &:checked + label span:nth-child(1) {
    opacity: 0;
  }
  &:checked + label span:nth-child(2) {
    transform: rotate(22.5deg);
    -webkit-transition-property: opacity;
    transition-property: opacity;
    transition-delay: 0.5s;
    opacity: 0;
  }
  &:checked + label span:nth-child(3) {
    /* -webkit-transition-timing-function: steps(2, end); */
    /* -webkit-transition-property: opacity; */
    transform: rotate(45deg);
    /* transition-delay: 0.5s; */
    /* opacity: 0; */
  }
  &:checked + label span:nth-child(4) {
    transform: rotate(67.5deg);
    -webkit-transition-property: opacity;
    transition-property: opacity;
    transition-delay: 0.5s;
    opacity: 0;
  }
  &:checked + label span:nth-child(5) {
    transform: rotate(90deg);
    -webkit-transition-property: opacity;
    transition-property: opacity;
    transition-delay: 0.5s;
    opacity: 0;
  }
  &:checked + label span:nth-child(6) {
    -webkit-transition-property: opacity;
    transition-property: opacity;
    transform: rotate(112.5deg);
    transition-delay: 0.5s;
    opacity: 0;
  }
  &:checked + label span:nth-child(7) {
    /* -webkit-transition-property: opacity; */
    transform: rotate(135deg);
    /* transition-delay: 0.5s; */
    /* opacity: 0; */
  }
  &:checked + label span:nth-child(8) {
    -webkit-transition-property: opacity;
    transition-property: opacity;
    transform: rotate(157.5deg);
    transition-delay: 0.5s;
    opacity: 0;
  }
  &:checked + label span:nth-child(9) {
    -webkit-transition-property: opacity;
    transition-property: opacity;
    transform: rotate(180deg);
    transition-delay: 0.5s;
    opacity: 0;
  }
  &:checked + label span:nth-child(10) {
    opacity: 0;
  }
`;
const MenuIconLabel = styled.label`
  border: none;
`;
const MenuIconSpan = styled.span`
  border: none;
`;
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 0px solid gray;
  position: absolute;
  top: 20px;
  z-index: 999;
`;

const OuterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85.38px;
`;

const HeaderNaviDiv = styled.div`
  border: none;
  width: 70px;
  color: white;
  text-align: left;
  margin-left: 100px;
`;

const HeaderLogoDiv = styled.div`
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 70px;
  height: 52.38px;
`;

const HeaderLogin = styled.div`
  border: none;
  color: white;
  width: 70px;
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  margin-right: 100px;
  cursor: pointer;
  font-family: Sofia Pro Bold, serif;
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.07px;
`;

export default withRouter(Header);
