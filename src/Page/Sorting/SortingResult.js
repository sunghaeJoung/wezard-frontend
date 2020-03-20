import React, { Component } from "react";
import { Facebook } from "styled-icons/boxicons-logos";
import { Twitter } from "styled-icons/boxicons-logos";
import { Address } from "../../config";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Diamond from "../../Components/Diamond/Diamond";
import styled, { css } from "styled-components";

export default class SortingResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      character: []
    };
  }

  componentDidMount = () => {
    let selects = [];
    selects.push(Number(sessionStorage.getItem("select1")));
    selects.push(Number(sessionStorage.getItem("select2")));
    selects.push(Number(sessionStorage.getItem("select3")));
    fetch(`${Address}/sorting/house/result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token")
      },
      body: JSON.stringify({
        answer_house: selects
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.setState({
          result: res.data
        });
      });
  };

  goToPassport = () => {
    this.props.history.push("/passport");
  };

  render() {
    const { result } = this.state;

    return (
      <SortingResultComponent image={result && result["img_bg"]}>
        <Header />
        <Container>
          <ContainerTop>
            <Text>YOU'RE A</Text>
            <HouseName>{result && result.name}</HouseName>
            <Diamond />
            <Text title>{result && result["tag_line"]}</Text>
            <TextMain>{result && result.intro}</TextMain>
            <div className="background"></div>
          </ContainerTop>
          <Share share_img={result && result["share_img_bg"]}>
            <ShareText>
              <Text share>THE SORTING HAT HAS SPOKEN</Text>
              <HouseName share>Share Your House Pride</HouseName>
              <Link>
                <LinkIcon>
                  <FacebookIcon />
                  <div>FACEBOOK</div>
                </LinkIcon>
                <LinkIcon>
                  <TwitterIcon />
                  <div>TWITTER</div>
                </LinkIcon>
              </Link>
            </ShareText>
            <img src={result && result["share_img_icon"]} alt="house"></img>
          </Share>
          <ContainerMiddle>
            <Text middle>Famous Wizarding World</Text>
            <HouseName middle>{result && result.name}</HouseName>

            <Characters>
              {/* ----------- map 돌리기 ----------- */}
              <Character>
                <Card card_bg={result && result["person_img_bg"]}>
                  <img src={result && result["person1_img"]} alt="img"></img>
                </Card>
                <Name>{result && result["person1_name"]}</Name>
                <Name sub>{result && result.name}</Name>
              </Character>
              <Character>
                <Card card_bg={result && result["person_img_bg"]}>
                  <img src={result && result["person2_img"]} alt="img"></img>
                </Card>
                <Name>{result && result["person2_name"]}</Name>
                <Name sub>{result && result.name}</Name>
              </Character>
              <Character>
                <Card card_bg={result && result["person_img_bg"]}>
                  <img src={result && result["person3_img"]} alt="img"></img>
                </Card>
                <Name>{result && result["person3_name"]}</Name>
                <Name sub>{result && result.name}</Name>
              </Character>

              {/* ----------- map 돌리기(여기까지) ----------- */}
            </Characters>
          </ContainerMiddle>
          <ContainerBottom>
            <MessageContainer>
              <Message>A message from your perfect</Message>
              <Message sub>By J.K Rowling</Message>
              <Content>{result && result.message}</Content>
            </MessageContainer>
            <Last>
              <Content last>
                You might belong in Gryffindor, Where dwell the brave at heart,
                Their daring, nerve and chivalry Set Gryffindors apart.
              </Content>
            </Last>
            <Button onClick={this.goToPassport}>BACK TO PASSPORT</Button>
          </ContainerBottom>
        </Container>
        <Footer sorting={true} />
      </SortingResultComponent>
    );
  }
}

const SortingResultComponent = styled.div`
  background-image: ${props => "url(" + props.image + ")"};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100%;
  padding-top: 320px;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// container top
const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0) 40%,
    rgba(0, 0, 0, 0.77) 80%,
    #000
  );

  .background {
    width: 100vw;
    height: 115px;

    background: #000;
  }
`;

const Text = styled.div`
  font-size: 25px;
  font-family: "Mason Sans Bold";
  text-align: center;
  color: #faf6f0;

  ${props =>
    props.title &&
    css`
      font-size: 56px;
      width: 100%;
      height: 44px;
      color: #fff;
      margin: 69px auto 55px;
    `}

  ${props =>
    props.share &&
    css`
      font-size: 26px;
      color: #fff;
      width: 70%;
    `}

    ${props =>
      props.middle &&
      css`
        font-size: 26px;
        color: #fff;
      `}
`;

const HouseName = styled.div`
  height: 64px;
  font-family: "Bluu Next";
  font-size: 76px;
  font-weight: 700;
  text-align: center;
  color: #faf6f0;
  margin: 13px auto 0;

  ${props =>
    props.share &&
    css`
      width: 70%;
      color: #fff;
      margin-top: 10px;
      height: auto;
    `}

  ${props =>
    props.middle &&
    css`
      font-size: 50px;
      margin: 28px auto 83px;
    `}
`;

const TextMain = styled.div`
  font-size: 24px;
  line-height: 36px;
  font-family: "Sofia Pro Regular";
  color: #faf6f0;
  max-width: 808px;
  margin: 0 auto;
  padding: 0 30px;
`;

// 결과 공유 링크
const Share = styled.div`
  width: 100%;
  height: 490px;
  background-image: ${props => "url(" + props.share_img + ")"};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 540px;
    height: 413px;
    padding-right: 25px;
  }
`;

const ShareText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Link = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
`;

const LinkIcon = styled.div`
  display: flex;
  div {
    font-size: 14px;
    font-family: "Sofia Pro Bold";
    color: #fff;
    margin: 0 5px;
  }
`;

const FacebookIcon = styled(Facebook)`
  width: 25px;
  color: #fff;
`;

const TwitterIcon = styled(Twitter)`
  width: 25px;
  color: #fff;
  margin-left: 20px;
`;

// container middle
const ContainerMiddle = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  padding-top: 60px;
  background-color: #000;
`;

const Characters = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Character = styled.div`
  color: #fff;
`;

const Card = styled.div`
  background-image: ${props => "url(" + props.card_bg + ")"};
  background-repeat: no-repeat;
  background-size: cover;
  width: 380px;
  /* height: 443px; */
  margin-top: 100px;

  img {
    margin-top: -100px;
  }
`;

const Name = styled.div`
  font-size: 48px;
  font-weight: 700;
  font-family: "Bluu Next";
  text-align: center;
  position: relative;
  bottom: 30%;

  ${props =>
    props.sub &&
    css`
      font-size: 20px;
      font-family: "Mason Sans Bold";
      text-align: center;
      margin-top: 10px;
    `};
`;

// container bottom
const ContainerBottom = styled.div`
  width: 100%;
  background-color: #000;
`;

const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  background-color: #10141b;
`;

const Message = styled.div`
  font-family: "Bluu Next";
  font-size: 48px;
  text-align: center;
  color: #faf6f0;
  margin-bottom: 12px;

  ${props =>
    props.sub &&
    css`
      font-size: 24px;
      font-family: "Sofia Pro Bold";
      text-align: center;
      color: #fff;
      margin-bottom: 50px;
    `}
`;

const Content = styled.div`
  font-size: 24px;
  font-family: "Sofia Pro Regular";
  color: #faf6f0;
  max-width: 808px;
  margin: 0 auto 80px;
  padding: 0 30px;

  ${props =>
    props.last &&
    css`
      /* font-family: BluuSuuperstar-Italic; */
      font-style: italic;
      font-size: 32px;
      text-align: center;
      width: 40%;
      margin: 32px auto 21px;
    `}
`;

const Last = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #000; */
  padding-top: 20px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  font-size: 12px;
  font-weight: 700;
  border-radius: 30px;
  border-width: 0;
  min-width: 200px;
  background-color: #6b63b5;
  color: #fff;
  display: block;
  margin: 3px auto 40px;
  padding: 18px 31px;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: rgba(107, 99, 181, 0.8);
    /* box-shadow: inset 0 0 0 1px #10141b; */

    transition: background-color 0.3s ease-in-out;
  }
`;
