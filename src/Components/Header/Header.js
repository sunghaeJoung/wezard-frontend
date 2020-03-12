import React from "react";
import Logo from "./Logo.svg";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

/* 
componentdidmount로 getItem체크해서 
  토큰 있으면 로그아웃버튼 표시
  토큰 없으면 로그인버튼 표시 
로그아웃하면 remove 토큰 
*/
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      //☞ state값 들어갈 자리
    };
  }
  goHome = () => {
    this.props.history.push("/");
  };
  goLogin = () => {
    this.props.history.push("/login");
  };
  //☞ 함수 들어갈 자리
  render() {
    //☞ 맵함수 구현할 자리
    return (
      <HeaderDiv>
        <OuterDiv>
          <HeaderNaviDiv>
            <MenuIconInput type="checkbox" id="MenuIcon"></MenuIconInput>
            <MenuIconLabel for="MenuIcon">
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
          <HeaderLogoDiv click={this.goHome}>
            <LogoImg src={Logo}></LogoImg>
          </HeaderLogoDiv>
          <HeaderLogin>LOGIN</HeaderLogin>
        </OuterDiv>
      </HeaderDiv>
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
  border: none;
`;

const OuterDiv = styled.div`
  /* background-image: url("http://images.ctfassets.net/usf1vwtuqyxm/dpmDSBWkWGFebViZKJuG7/c488da0a5c57abcaf6dcade349d14347/Feature-Hub-Copy-compressor.png"); */
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
`;

export default withRouter(Header);
