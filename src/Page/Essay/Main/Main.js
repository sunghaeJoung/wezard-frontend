import React, { Component } from "react";
import Header from "../../../Components/Header/Header";
import pen from "../../../Images/pen.svg";
import styled, { css, keyframes } from "styled-components";
import { Facebook, Twitter } from "styled-icons/boxicons-logos";
import { EmailOutline } from "styled-icons/evaicons-outline";
import { Copy } from "styled-icons/boxicons-regular";

class Main extends Component {
  state = {
    iconList: false
    // data: []
  };

  // componentDidMount() {
  //   fetch("http://10.58.3.145:8000/article/news/", {
  //     method: "GET"
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({
  //         data: res.data
  //       });
  //     });
  // }

  handleShare = () => {
    this.setState({
      iconList: !this.state.iconList
    });
    console.log(this.state.iconList);
  };

  render() {
    return (
      <TopWrapper>
        <BgImg>
          <BgImgCover />
          <Header />
          <TextWrapper>
            <Category>news</Category>
            <Title>
              New mobile game Harry Potter: Puzzles & Spells announced
            </Title>
          </TextWrapper>
        </BgImg>
        <WhiteBg>
          {window.sessionStorage.token ? (
            <OwlWrapper>
              <ShareWrapper onClick={this.handleShare}>
                <Owl src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjYiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNiAyNSI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTQuMzYyIDMuMDk3QTEyLjAwNCAxMi4wMDQgMCAwIDEgMTIuNDI3IDBjMy4wNDYgMCA1LjgyOCAxLjEzIDcuOTUgMi45OTRhOC41MSA4LjUxIDAgMCAxIDQuNDczIDEuNjA4bC0xLjIyMiAxLjY4MWE2LjM5MiA2LjM5MiAwIDAgMC0uOTUzLS41NzMgMTEuOTkyIDExLjk5MiAwIDAgMSAxLjggNi4zMzljMCA2LjY1NC01LjM5NCAxMi4wNDktMTIuMDQ4IDEyLjA0OS02LjY1NSAwLTEyLjA0OS01LjM5NS0xMi4wNDktMTIuMDUgMC0yLjI2OS42MjgtNC4zOTIgMS43MTgtNi4yMDRhNi4zOTMgNi4zOTMgMCAwIDAtLjg3My41MzRMMCA0LjY5NmE4LjUwNiA4LjUwNiAwIDAgMSA0LjM2Mi0xLjZ6bTMuNDQ4LjQzNEE4LjQyIDguNDIgMCAwIDEgMTIuNCA3LjMxYTguNDE1IDguNDE1IDAgMCAxIDQuNTM2LTMuODM2IDkuNjQ0IDkuNjQ0IDAgMCAwLTQuNTA4LTEuMTFBOS42NDMgOS42NDMgMCAwIDAgNy44MSAzLjUzek01LjYwMiA1LjE3NUE5LjY1NiA5LjY1NiAwIDAgMCAyLjc0IDEyLjA1YzAgNS4zNSA0LjMzNyA5LjY4NiA5LjY4NyA5LjY4NnM5LjY4Ni00LjMzNyA5LjY4Ni05LjY4NmMwLTIuNzMyLTEuMTMtNS4yLTIuOTUtNi45Ni0zLjIwNS4zMi01LjY5NyAyLjk1NC01LjY5NyA2LjE0NGgtLjAwM3YuMDk0aC0yLjA3OWMwLTMuMjE4LTIuNTM2LTUuODctNS43ODItNi4xNTJ6bTEuNjI3IDguMjkxYTEuODkgMS44OSAwIDEgMSAwLTMuNzggMS44OSAxLjg5IDAgMCAxIDAgMy43OHptMTAuMzk1IDBhMS44OSAxLjg5IDAgMSAxIDAtMy43OCAxLjg5IDEuODkgMCAwIDEgMCAzLjc4em0tNi4yMzctMi4xMzloMi4wOHY1LjA2OWgtMi4wOHYtNS4wNjl6Ii8+CiAgICA8L2RlZnM+CiAgICA8dXNlIGZpbGw9IiMxMDE0MWIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjYgLjQpIiB4bGluazpocmVmPSIjYSIvPgo8L3N2Zz4K"></Owl>
                <Share>SHARE</Share>
              </ShareWrapper>
              {this.state.iconList && (
                <List list>
                  <FaceBook />
                  <TwitterI />
                  <EmailOutlineI />
                  <CopyI />
                </List>
              )}
            </OwlWrapper>
          ) : (
            <None></None>
          )}
          <Info>
            <Reference>
              <LeftLogo src="https://images.ctfassets.net/usf1vwtuqyxm/30OscCI83JoLGsI4MKRnJS/2ebebe784733ba3b6a185a8e404e57f7/WizardingWorldLogo.jpg?w=200" />
              <TopRef>
                <WrittenBy>Written by</WrittenBy>
                <Who>The Wizarding World Team</Who>
              </TopRef>
            </Reference>
            <Publish>
              <RightLogo src={pen} />
              <Date>Published on Mar 5th 2020</Date>
            </Publish>
          </Info>
          <Line />
          <MainArticleWrapper>
            <Body>
              We are pleased to announce the new all-Canadian cast for the
              upcoming production of Cursed Child in Toronto. Here’s an
              introduction, along with more details about the play’s new home,
              opening later this year. Following successful productions of
              Cursed Child in London, New York, Melbourne, San Francisco, and
              soon, Hamburg, get ready for the Canadian version of Cursed Child,
              which has just announced its new cast. Trevor White will star as
              Harry Potter, with Trish Lindström as Ginny Potter and Luke
              Kimball as their son Albus Potter; Gregory Prest is Ron Weasley,
              Sarah Afful is Hermione Granger and Hailey Alexis Lewis is their
              daughter Rose Granger-Weasley; Brad Hodder is Draco Malfoy and
              Thomas Mitchell Barnet is his son Scorpius Malfoy. Professor
              McGonagall will be played by Fiona Reid. Fiona already has some
              experience in the world of Cursed Child, having portrayed Dolores
              Umbridge in the Broadway production. Following that theme, Sara
              Farb, who played Delphi Diggory in the Broadway production of
              Cursed Child, will be reprising her role here. Steven Sutcliffe
              will take on Severus Snape, while Susan Henley will appear as
              Dolores Umbridge. Rounding out the cast are: Ryan Allen, Nicholas
              Boegel, Kevin Bundy, Michael Chiem, Ian D. Clark, Mark Crawford,
              David D’Lancy Wilson, Raquel Duffy, Bryce Fletch, Simon Gagnon,
              Raylene Harewood, Wychita Henricks, Asha James, Lucas Meeuse,
              Natasha Mumba, Kyle Orzech, Monice Peter, Andy Pogson, Kaitlyn
              Riordan, Katie Ryerson, Brendan Wall, Evelyn Wiebe and Shawn
              Wright. Performances begin 23 October at Toronto’s Ed Mirvish
              Theatre, with the official media performance following on 29
              November. Tickets will go on sale at 9.45AM ET (we’ll be
              disappointed if you don’t spot the reference!) on 4 April. Check
              the official Ed Mirvish theatre website for more details.
            </Body>
            <LineWrapper>
              <DiaLine></DiaLine>
              <Dia
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDMyIDE3Ij4KICAgIDxwYXRoIGZpbGw9IiM3NTc1NzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTguMjk1IDBsOC4yOTUgOC4yOTUtOC4yOTUgOC4yOTVMMCA4LjI5NSA4LjI5NSAwem0wIDEuNDE0bC02Ljg4IDYuODgxIDYuODggNi44ODEgNi44ODEtNi44OC02Ljg4LTYuODgyek0xNS44ODMgMGw4LjI5NSA4LjI5NS04LjI5NSA4LjI5NS04LjI5NS04LjI5NUwxNS44ODMgMHptMCAxLjQxNGwtNi44OCA2Ljg4MSA2Ljg4IDYuODgxIDYuODgtNi44OC02Ljg4LTYuODgyek0yMy40NzEgMGw4LjI5NSA4LjI5NS04LjI5NSA4LjI5NS04LjI5NS04LjI5NUwyMy40NyAwek0xNi41OSA4LjI5NWw2Ljg4IDYuODgxIDYuODgyLTYuODgtNi44ODEtNi44ODItNi44ODEgNi44ODF6IiBvcGFjaXR5PSIuMjYzIi8+Cjwvc3ZnPgo="
                alt=""
              ></Dia>
              <DiaLine></DiaLine>
            </LineWrapper>{" "}
            <Bottom>
              <BottomLogo src="https://images.ctfassets.net/usf1vwtuqyxm/30OscCI83JoLGsI4MKRnJS/2ebebe784733ba3b6a185a8e404e57f7/WizardingWorldLogo.jpg?w=200" />
              <BottomRefWrapper>
                <BottomRef>Written by</BottomRef>
                <BottomWho>The Wizarding World Team</BottomWho>
              </BottomRefWrapper>
            </Bottom>
            <LineWrapper>
              <DiaLine></DiaLine>
              <Dia
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDMyIDE3Ij4KICAgIDxwYXRoIGZpbGw9IiM3NTc1NzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTguMjk1IDBsOC4yOTUgOC4yOTUtOC4yOTUgOC4yOTVMMCA4LjI5NSA4LjI5NSAwem0wIDEuNDE0bC02Ljg4IDYuODgxIDYuODggNi44ODEgNi44ODEtNi44OC02Ljg4LTYuODgyek0xNS44ODMgMGw4LjI5NSA4LjI5NS04LjI5NSA4LjI5NS04LjI5NS04LjI5NUwxNS44ODMgMHptMCAxLjQxNGwtNi44OCA2Ljg4MSA2Ljg4IDYuODgxIDYuODgtNi44OC02Ljg4LTYuODgyek0yMy40NzEgMGw4LjI5NSA4LjI5NS04LjI5NSA4LjI5NS04LjI5NS04LjI5NUwyMy40NyAwek0xNi41OSA4LjI5NWw2Ljg4IDYuODgxIDYuODgyLTYuODgtNi44ODEtNi44ODItNi44ODEgNi44ODF6IiBvcGFjaXR5PSIuMjYzIi8+Cjwvc3ZnPgo="
                alt=""
              ></Dia>
              <DiaLine></DiaLine>
            </LineWrapper>{" "}
          </MainArticleWrapper>
        </WhiteBg>
      </TopWrapper>
    );
  }
}

//share
const OwlWrapper = styled.div`
  position: relative;
`;

const List = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 22%;
  margin-top: 50px;
  box-sizing: border-box;

  ${props => {
    if (props.list) {
      return css`
        animation: ${dasol} 1s linear 1;
      `;
    }
  }}
`;

const dasol = keyframes`
from {
  height: 0;
}
to {
  height: 300px
}
`;

const FaceBook = styled(Facebook)`
  width: 22px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const TwitterI = styled(Twitter)`
  width: 22px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const EmailOutlineI = styled(EmailOutline)`
  width: 22px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const CopyI = styled(Copy)`
  width: 22px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const ShareWrapper = styled.div`
  position: absolute;
  right: 21%;
  cursor: pointer;
  display: flex;
  margin: 20px 0 0 0;
`;

const Owl = styled.img`
  height: 25px;
  margin-right: 10px;
`;

const Share = styled.div`
  /* position: absolute; */
  font-size: 16px;
  font-family: "Sofia Pro Bold";
  /* right: 450px;
  top: -80px;
  cursor: pointer; */
`;

const None = styled.div``;

// 상단
const TopWrapper = styled.div``;

const BgImg = styled.div`
  background-image: url("https://images.ctfassets.net/usf1vwtuqyxm/7pYsQBLrZO6cj5jSeGpT22/94741df352b955684a8a21f55caeef71/web-header-game.jpg?fm=webp");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 45vw;
  min-height: 788px;
  max-height: 788px;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BgImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 45vw;
  min-height: 788px;
  max-height: 788px;
  background-image: linear-gradient(180deg, rgba(15, 30, 52, 0), #10141b);
  z-index: 1;
`;

const TextWrapper = styled.div`
  max-width: 980px;
  display: flex;
  flex-direction: column;
  color: #faf6f0;
  z-index: 1;
`;

const Category = styled.div`
  font-family: "Mason Sans Regular";
  font-size: 24px;
`;

const Title = styled.div`
  font-family: "Bluu Next";
  font-size: 48px;
`;

//중간

const WhiteBg = styled.div`
  position: relative;
  background-color: #faf6f0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  margin: 0 auto;
  display: flex;
  width: 860px;
  margin: 10px auto;
`;

const Reference = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0 5px;
  margin-right: 51px;
`;

const LeftLogo = styled.img`
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;

const TopRef = styled.div`
  margin-right: 50px;
`;

const WrittenBy = styled.div`
  font-size: 16px;
  font-family: "Sofia Pro Regular";
  color: #777777;
  line-height: 1.5;
`;

const Who = styled.div`
  font-size: 20px;
  font-family: "Sofia Pro Regular";
  color: #10141b;
  line-height: 1.5;
`;

const Publish = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0 5px;
  margin-right: 51px;
`;

const RightLogo = styled.img`
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Date = styled.div`
  font-size: 16px;
  font-family: "Sofia Pro Regular";
  color: #777777;
  line-height: 1.5;
`;

const Line = styled.div`
  width: 860px;
  margin: 35px auto;
  opacity: 0.2;
  border: 1.2px solid #757575;
`;

//본문

const MainArticleWrapper = styled.div`
  width: 100vw;
  max-width: 860px;
  margin: 0 auto;
`;

const Body = styled.div`
  padding: 0 28px 20px 28px;
  color: #757575;
  font-size: 20px;
  font-family: "Sofia Pro Regular";
`;

//Bottom

const Bottom = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const BottomLogo = styled.img`
  height: 125px;
  margin: 10px 25px 0 0;
  border-radius: 50%;
`;

const BottomRefWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomRef = styled.div`
  color: #696b78;
  font-family: "Sofia Pro Regular";
  font-size: 16px;
  letter-spacing: 0.05em;
  padding-top: 30px;
`;

const BottomWho = styled.div`
  font-size: 32px;
  font-family: "Bluu Next";
  line-height: 1.5;
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
`;

const DiaLine = styled.div`
  background-color: #757575;
  opacity: 0.26;
  width: 100%;
  height: 1px;
`;

const Dia = styled.img`
  margin: 0 10px;
`;

export default Main;
