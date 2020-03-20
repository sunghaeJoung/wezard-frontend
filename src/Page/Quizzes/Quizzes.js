import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import WrittenPencil from "../../Images/pencil.jpg";
import Line from "../../Images/line.jpg";
import { withRouter } from "react-router-dom";

class Quizzes extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      contents: [],
      quiz: false,
      quizOrder: 0,
      correct: false,
      showEachResult: false,
      lastPage: false,
      quizFinalResult: false,
      correctNums: 0
      //☞ state값 들어갈 자리
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/QuizMockData.json")
      .then(res => {
        return res.json();
      })
      .then(
        res => {
          /* console.log(
            "res.data.quiz_Lists.contents[0].contents 진입하면 ",
            res.data.quiz_Lists[0].contents
          ); */
          this.setState({ data: res.data.quiz_Lists });
          this.setState({ contents: res.data.quiz_Lists[0].contents });
        } /* ,
        () => {
          console.log("this.state.data", this.state.data);
        } */
      );
  }
  funcQuiz = () => {
    this.setState({
      quiz: true
    });
  };
  confirmAnswerFunc = e => {
    // console.log(
    //   "this.state.contents[{this.state.quizOrder}].correct_answer는",
    //   this.state.contents[`${this.state.quizOrder}`].correct_answer
    // );
    // console.log("e.target.textContent는", e.target.textContent);
    if (
      e.target.textContent ===
      this.state.contents[`${this.state.quizOrder}`].correct_answer
    ) {
      this.setState(
        {
          correct: true,
          showEachResult: true,
          correctNums: this.state.correctNums + 1
        },
        () => {
          // console.log(this.state.correct);
        }
      );
    } else {
      this.setState(
        {
          correct: false,
          showEachResult: true
        },
        () => {
          // console.log(this.state.correct);
        }
      );
    }
  };
  nextQuiz = () => {
    let inp = document.getElementsByName("choose");
    inp[0].checked = false;
    inp[1].checked = false;
    inp[2].checked = false;
    inp[3].checked = false;

    this.setState({
      quizOrder: this.state.quizOrder + 1,
      showEachResult: false,
      correct: false
      //테스트correct
    });
    // console.log("this.state.contents.length는", this.state.contents.length);
    // console.log("this.state.quizOrder+2는", this.state.quizOrder + 2);
    if (this.state.contents.length === this.state.quizOrder + 2) {
      this.setState({
        lastPage: true
      });
    }
  };
  nextResult = () => {
    this.setState({
      quizFinalResult: true,
      showEachResult: false,
      correct: false
    });
  };
  goQuiz = () => {
    // this.setState({
    //   quizFinalResult: false,
    //   lastPage: false,
    //   quiz: true,
    //   quizOrder: 0,
    //   correctNums: 0
    // });
    this.props.history.push(`/quizlist`);
  };
  goQuizFirst = () => {
    this.setState(
      {
        quizFinalResult: false,
        lastPage: false,
        quiz: true,
        quizOrder: 0,
        correctNums: 0
      }
      // console.log("this.state.quiz", this.state.quiz),
      // console.log("this.state.quizOrder", this.state.quizOrder)
    );
  };
  //☞ 함수 들어갈 자리
  render() {
    //☞ 맵함수 구현할 자리
    return (
      <>
        {this.state.data.map(x => {
          return (
            <Outer key={x.id}>
              <TitleBox
                style={{
                  backgroundImage: `url(${x.title_image})`
                }}
              >
                <Header></Header>
                <QuizMain>
                  <Span>quiz</Span>
                  <TitleDiv>{x.title}</TitleDiv>
                </QuizMain>
              </TitleBox>
              <WrittenBox>
                <LeftBox>
                  <WrittenBox1>
                    <WrittenLogo
                      src="https://images.ctfassets.net/usf1vwtuqyxm/30OscCI83JoLGsI4MKRnJS/2ebebe784733ba3b6a185a8e404e57f7/WizardingWorldLogo.jpg?w=200"
                      alt=""
                    ></WrittenLogo>
                  </WrittenBox1>
                  <WrittenBox2>
                    <Writtenby>Written by</Writtenby>
                    <Author>{x.written}</Author>
                  </WrittenBox2>
                </LeftBox>
                <RightBox>
                  <WrittenBox1>
                    <PencilDiv src={WrittenPencil} alt=""></PencilDiv>
                  </WrittenBox1>
                  <WrittenBox2>
                    <Published>Published on {x.published}</Published>
                  </WrittenBox2>
                </RightBox>
              </WrittenBox>
              <LineBox1></LineBox1>
              <DescBox>{x.description}</DescBox>
              <PageBox>
                <Page> - {this.state.quizOrder + 1} / 5 </Page>
                <LineBox2></LineBox2>
              </PageBox>

              {this.state.showEachResult === true ? (
                <ConfirmDiv correct={this.state.correct}>
                  <ConfirmSpan correct={this.state.correct}>
                    {this.state.correct === true ? "Correct!!" : "Incorrect!!"}
                  </ConfirmSpan>
                  {this.state.lastPage === false ? (
                    <NextButton onClick={this.nextQuiz}>
                      Next Question
                    </NextButton>
                  ) : (
                    <NextButton onClick={this.nextResult}>
                      View Result
                    </NextButton>
                  )}
                </ConfirmDiv>
              ) : (
                ""
              )}
              {this.state.quizFinalResult === false ? (
                <QuizContents>
                  {this.state.quiz === true ? (
                    <QuizOuter>
                      <QuizBox2>
                        <QuestionBox>
                          {
                            this.state.contents[`${this.state.quizOrder}`]
                              .question
                          }
                        </QuestionBox>
                        <QuestionImg
                          src={
                            this.state.contents[`${this.state.quizOrder}`]
                              .quiz_image
                          }
                        ></QuestionImg>
                        <FinishBox></FinishBox>
                        <SelectionBox>
                          {this.state.correct === false ? (
                            ""
                          ) : (
                            <SelectionCover>야야야</SelectionCover>
                          )}
                          <SelectionOne>
                            <Label>
                              <RadioOne type="radio" name="choose"></RadioOne>
                              <AnswerOne
                                onClick={this.confirmAnswerFunc}
                                name={
                                  this.state.contents[`${this.state.quizOrder}`]
                                    .answer_one
                                }
                              >
                                {
                                  this.state.contents[`${this.state.quizOrder}`]
                                    .answer_one
                                }
                              </AnswerOne>
                            </Label>
                          </SelectionOne>
                          <LineBox3></LineBox3>
                          <SelectionTwo>
                            <Label>
                              <RadioTwo type="radio" name="choose"></RadioTwo>
                              <AnswerTwo
                                onClick={this.confirmAnswerFunc}
                                name={
                                  this.state.contents[`${this.state.quizOrder}`]
                                    .answer_two
                                }
                              >
                                {
                                  this.state.contents[`${this.state.quizOrder}`]
                                    .answer_two
                                }
                              </AnswerTwo>
                            </Label>
                          </SelectionTwo>
                          <LineBox3></LineBox3>
                          <SelectionThree>
                            <Label>
                              <RadioThree
                                type="radio"
                                name="choose"
                              ></RadioThree>
                              <AnswerThree
                                onClick={this.confirmAnswerFunc}
                                name={
                                  this.state.contents[`${this.state.quizOrder}`]
                                    .answer_three
                                }
                              >
                                {
                                  this.state.contents[`${this.state.quizOrder}`]
                                    .answer_three
                                }
                              </AnswerThree>
                            </Label>
                          </SelectionThree>
                          <LineBox3></LineBox3>
                          <SelectionFour>
                            <Label>
                              <RadioFour type="radio" name="choose"></RadioFour>
                              <AnswerFour
                                onClick={this.confirmAnswerFunc}
                                name={
                                  this.state.contents[`${this.state.quizOrder}`]
                                    .answer_four
                                }
                              >
                                {
                                  this.state.contents[`${this.state.quizOrder}`]
                                    .answer_four
                                }
                              </AnswerFour>
                            </Label>
                          </SelectionFour>
                          <LineBox3></LineBox3>
                        </SelectionBox>
                      </QuizBox2>
                    </QuizOuter>
                  ) : (
                    // 이미 중괄호로 감싸주었기 때문에 한번더 감싸는 실수를 범하지 말자!!
                    <QuizBox>
                      <QuizStartImg src={x.start_image}></QuizStartImg>
                      <StartButton onClick={this.funcQuiz}>
                        <StartSpan>START</StartSpan>
                      </StartButton>
                    </QuizBox>
                    //시작화면: 스타트 버튼을 누르면
                  )}
                </QuizContents>
              ) : (
                <ResultOuterDiv>
                  {this.state.correctNums < this.state.contents.length - 1 ? (
                    <ScoredBox>
                      <ScoredImg src="https://cdn.dribbble.com/users/180308/screenshots/2717874/tryharder-dribb.png"></ScoredImg>
                      <ScoredComment>"Try Harder!!"</ScoredComment>
                    </ScoredBox>
                  ) : (
                    <ScoredBox>
                      <ScoredImg src="https://miro.medium.com/max/3840/1*-xxH5kXE8AGA8-vzPURslg.jpeg"></ScoredImg>
                      <ScoredComment>"Great!!"</ScoredComment>
                    </ScoredBox>
                  )}

                  <ShowScoreBox>
                    <CorrectNumsSpan>
                      Your Correct Answers: {this.state.correctNums}
                    </CorrectNumsSpan>
                    <CorrectNumsSpan>
                      Total Questions: {this.state.contents.length}
                    </CorrectNumsSpan>
                    <CorrectNumsSpan>
                      Your Scored Rate: &nbsp;
                      {(
                        (this.state.correctNums / this.state.contents.length) *
                        100
                      ).toFixed(2)}
                      %
                    </CorrectNumsSpan>
                    <FinalQuizButtonDiv>
                      <RetakeButton onClick={this.goQuizFirst}>
                        Retake
                      </RetakeButton>
                      <QuizHomeButton onClick={this.goQuiz}>
                        Quiz Main
                      </QuizHomeButton>
                    </FinalQuizButtonDiv>
                  </ShowScoreBox>
                </ResultOuterDiv>
              )}

              <FinishLine src={Line}></FinishLine>
              <FinishWrittenBox>
                <WrittenBoxBottom>
                  <WrittenLogoBottom
                    src="https://images.ctfassets.net/usf1vwtuqyxm/30OscCI83JoLGsI4MKRnJS/2ebebe784733ba3b6a185a8e404e57f7/WizardingWorldLogo.jpg?w=200"
                    alt=""
                  ></WrittenLogoBottom>
                </WrittenBoxBottom>
                <WrittenBox2>
                  <Writtenby>Written by</Writtenby>
                  <AuthorBottom>{x.written}</AuthorBottom>
                </WrittenBox2>
              </FinishWrittenBox>
              <FinishLine src={Line}></FinishLine>
            </Outer>
          );
        })}
        <Bottom>
          <Footer />
        </Bottom>
      </>
      //구현할 화면 태그 들어갈 자리
    );
  }
}

const Outer = styled.div`
  background-color: #faf6f0;
`;
const Bottom = styled.div`
  background-color: black;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const TitleDiv = styled.div`
  font-family: Bluu Next, serif;
  font-size: 47.3px;
`;
const Span = styled.span`
  color: white;
  font-weight: 600px;
  font-size: 24px;
  font-family: Mason Sans regular, serif;
`;
const TitleBox = styled.div`
  height: 100vh;
  max-height: 788px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: Mason Sans regular, serif; */
  color: white;
`;
const WrittenBox = styled.div`
  display: flex;
  justify-content: center;
  height: 91px;
`;
const DescBox = styled.div`
  width: 860px;
  font-family: Sofia Pro regular, serif;
  font-size: 24px;
  margin: 0 auto;
  text-align: bottom;
  vertical-align: text-bottom;
  :first-letter {
    font-size: 100px;
    font-weight: bold;
    font-family: Bluu Next, serif;
    float: left;
    padding-top: 0;
    color: gold;
    margin-top: -30px;
  }
`;
const QuestionBox = styled.div`
  width: 600px;
  font-family: Sofia Pro bold, serif;
  font-size: 38px;
  font-weight: bold;
  margin: 0 auto;
`;
const FinishBox = styled.div``;
const WrittenBox1 = styled.div`
  width: 60px;
  height: 60px;
  background-image: url("https://images.ctfassets.net/usf1vwtuqyxm/30OscCI83JoLGsI4MKRnJS/2ebebe784733ba3b6a185a8e404e57f7/WizardingWorldLogo.jpg?w=200");

  margin: auto 0;
`;
const WrittenBox2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Sofia Pro regular, serif;
  font-weight: bold;
  color: #8c7777;
`;
const Writtenby = styled.div`
  padding-left: 30px;
`;
const Published = styled.div`
  margin-left: 30px;
`;
const LeftBox = styled.div`
  height: 91px;
  display: flex;
  margin-right: 80px;
`;
const RightBox = styled.div`
  display: flex;
  justify-content: center;
  font-family: Sofia Pro regular, serif;
  font-weight: bold;
  color: #777777;
  margin-left: 80px;
`;
const Author = styled.div`
  color: black;
  padding-left: 30px;
  font-size: 20px;
`;
const WrittenLogo = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 100%;
`;
const PencilDiv = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 100%;
`;
const LineBox1 = styled.div`
  height: 10px;
  width: 860px;
  border-top: 1px solid #dae0db;
  margin: 40px auto;
`;
const LineBox2 = styled.div`
  height: 10px;
  width: 800px;
  border-top: 1px solid #dae0db;
  margin: 30px 10px;
`;
const PageBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: gray;
  margin: 0 auto;
`;
const Page = styled.div`
  margin: auto 20px;
`;

const QuestionImg = styled.img`
  width: 600px;
  height: 338px;
  margin: 40px auto;
  display: block;
  margin: 10px auto;
  border-radius: 10px;
`;

const SelectionBox = styled.div`
  position: relative;
  width: 600px;
  font-family: Sofia Pro regular, serif;
  font-size: 18px;
  margin: 50px auto;
  color: gray;
  z-index: 4;
`;
const SelectionCover = styled.div`
  position: absolute;
  width: 610px;
  height: 210px;
  opacity: 10%;
  background-color: black;
  z-index: 999;
`;
const SelectionOne = styled.div`
  display: flex;
`;
const RadioOne = styled.input`
  margin-right: 10px;
`;
const AnswerOne = styled.div``;

const SelectionTwo = styled.div`
  display: flex;
`;
const RadioTwo = styled.input`
  margin-right: 10px;
`;
const AnswerTwo = styled.div``;

const SelectionThree = styled.div`
  display: flex;
`;
const RadioThree = styled.input`
  margin-right: 10px;
`;
const AnswerThree = styled.div``;

const SelectionFour = styled.div`
  display: flex;
`;
const RadioFour = styled.input`
  margin-right: 10px;
`;
const AnswerFour = styled.div`
  z-index: 99;
  display: absolute;
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: left;
`;

const LineBox3 = styled.div`
  height: 10px;
  width: 580px;
  border-top: 1px solid #dae0db;
  margin: 10px 0px 10px 30px;
`;

const FinishLine = styled.img`
  padding: 40px;
  margin: 0px auto;
  display: block;
  border-radius: 10px;
  background-color: #faf6f0;
`;
const FinishWrittenBox = styled.div`
  width: 860px;
  height: 142px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const WrittenLogoBottom = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 100%;
`;
const WrittenBoxBottom = styled.div`
  margin-top: 10px;
`;

const AuthorBottom = styled.div`
  font-size: 32px;
  color: black;
  font-family: Bluu Next, serif;
  padding-left: 30px;
`;
const QuizBox = styled.div`
  width: 650px;
  margin: 0 auto;
  border: 0px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const QuizBox2 = styled.div`
  /* width: 100vh; */
  margin: 0 auto;
  border: 0px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const QuizStartImg = styled.img`
  border-radius: 10px;
  width: 480px;
  height: 250px;
`;
const StartButton = styled.button`
  width: 152px;
  height: 52px;
  background-color: #c3e0fa;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  border: 0px;
  margin-top: 40px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  :hover {
    background-color: #3897f0;
  }
  :active {
    width: 142px;
    height: 42px;
  }
`;

const StartSpan = styled.span`
  border: 1px solid white;
  padding: 9px 38px 9px 38px;
  border-radius: 10px;
  margin-bottom: 0.1px;
  :active {
    border: none;
  }
`;

const QuizMain = styled.div``;
const QuizContents = styled.div`
  display: flex;
`;
const QuizOuter = styled.div`
  border: 0px solid red;
  margin: 0 auto;
`;

const ConfirmDiv = styled.div`
  border: 0px solid black;
  border-radius: 5px;
  width: 860px;
  height: 96px;
  margin: 0 auto;
  background-color: ${props => (props.correct ? "#3897f0" : "#d9d9d9")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ConfirmSpan = styled.span`
  color: ${props => (props.correct ? "white" : "black")};
  font-weight: bold;
  font-size: 20px;
  margin-left: 130px;
  font-family: Sofia Pro regular, serif;
`;
const NextButton = styled.button`
  width: 134px;
  height: 50px;
  border-radius: 5px;
  font-weight: bold;
  background-color: #ffffff;
  margin-right: 130px;
  font-family: Sofia Pro regular, serif;
  font-size: 17px;
  outline: none;
`;
const ResultOuterDiv = styled.div`
  border: 0px solid red;
  margin: 0 auto;
  font-family: Sofia Pro regular, serif;
`;
const CorrectNumsSpan = styled.div`
  margin: 5px auto;
`;
const ScoredImg = styled.img`
  margin: 0 auto;
  width: 500px;
  height: 300px;
`;
const RetakeButton = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 0px;
  background-color: #3897f0;
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin: 2px;
  :active {
    height: 28px;
  }
`;
const QuizHomeButton = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 0px;
  background-color: #3897f0;
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin: 2px;
  :active {
    height: 28px;
  }
`;
const ScoredComment = styled.span`
  margin: 40px auto;
  font-size: 60px;
  font-weight: bold;
  font-family: Sofia Pro bold, serif;
`;
const ScoredBox = styled.div`
  border: 0px solid blue;
  display: flex;
  flex-direction: column;
`;
const ShowScoreBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 20px;
`;
const FinalQuizButtonDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
export default withRouter(Quizzes);
