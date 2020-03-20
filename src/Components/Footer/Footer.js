import React from "react";
// import "./Footer.scss";
import styled, { css } from "styled-components";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      //☞ state값 들어갈 자리df
    };
  } //☞ 함수 들어갈 자리
  render() {
    //☞ 맵함수 구현할 자리
    return (
      <>
        <Outer sorting={this.props.sorting}>
          <FlexDiv>
            <CopyRightP>© Wizarding World Digital 2020</CopyRightP>
            <UnorderedList>
              <List>ABOUT US</List>
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 159px;
  /* position: absolute;
  bottom: 0; */
  border-top: 1px solid #242633;
  z-index: 4;

  /* sorting페이지에서 footer 스타일 적용*/
  ${props =>
    props.sorting &&
    css`
      background-color: #10141b;
      border-top: none;
    `}
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
