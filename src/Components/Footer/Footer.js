import React from "react";
// import "./Footer.scss";
import styled, { createGlobalStyle } from "styled-components";
import Global from "./Global";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      //☞ state값 들어갈 자리
    };
  } //☞ 함수 들어갈 자리
  render() {
    //☞ 맵함수 구현할 자리
    return (
      <>
        <Global />
        <Outer>
          <FlexDiv>
            <CopyRightP>© Wizarding World Digital 2020</CopyRightP>
            <UnorderedList>
              <List none>ABOUT US</List>
              <List>PRESS</List>
              <List>FAQS</List>
              <List>TERMS & CONITIONS</List>
              <List>AD CHOICES</List>
              <List>PRIVACY & COOKIES</List>
              <List>CHILDREN'S PRIVACY POLICY</List>
              <List>LEGALS</List>
            </UnorderedList>
          </FlexDiv>
          <CompanyDesc>
            Wizarding World Digital is a partnership between Warner Bros. and
            Pottermore, delivering official updates and products from the
            Wizarding World and its partners.
          </CompanyDesc>
        </Outer>
      </>
    );
  }
}

const Outer = styled.div`
  /* align-items: center; */
  font-size: 10px;
  /* margin: 20px auto; */
  background-color: #10141b;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 159px;
`;

const CopyRightP = styled.p`
  font-size: 10px;
  color: white;
  text-transform: uppercase;
`;

const UnorderedList = styled.ul`
  list-style-type: square;
  display: flex;
  align-items: flex-start;
`;

const List = styled.li`
  /* display: inline-block; */
  font-size: 10px;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CompanyDesc = styled.p`
  display: flex;
  justify-content: left;
  margin-left: 44px;
  margin-bottom: 40px;
  color: white;
  text-transform: uppercase;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 44px;
  margin-right: 44px;
`;

export default Footer;
