import React, { Component } from "react";
import BottomBox from "./BottomBox";
import styled from "styled-components";

class Bottom extends Component {
  constructor() {
    super();

    this.state = {
      items: 6,
      preItems: 0,
      preCoverUrl: "",
      coverurl: "",
      bottomData: []
    };
  }

  getItem = () => {
    fetch("http://localhost:3000/data/BottomData.json")
      .then(res => res.json())
      .then(res => {
        console.log(res.BottomData);
        let result = res.BottomData.slice(
          this.state.preItems,
          this.state.items
        );
        console.log(result);
        this.setState({
          bottomData: result
        });
        // this._getUrls();
        // window.addEventListener("scroll", this._infiniteScroll, true);
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
        perItems: this.state.items,
        items: this.state.items + 6
      });

      this.getItem();
    }
  };

  componentDidMount() {
    this.getItem();
    window.addEventListener("scroll", this._infiniteScroll, true);
  }

  // getItemApi = () => {
  //   console.log("아이템");
  //   fetch("http://localhost:3000/data/BottomData.json")
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res.BottomData);
  //       let result = res.BottomData.slice(
  //         this.state.preItems,
  //         this.state.items
  //       );
  //       console.log(result);
  //       return result;
  //     });
  // };

  // 무한루프 구현
  // const [unit, setUnit] = useState({
  //   items: 5,
  //   preItems: 0,
  //   scrolling: false,
  //   bottomData: []
  // });

  // useEffect(() => {
  //   window.addEventListener("scroll", infiniteScroll, true);
  //   // getItem();
  //   return () => window.removeEventListener("scroll", infiniteScroll);
  // }, [unit]);

  // const getItem = () => {
  //   console.log("아이템");
  //   fetch("http://localhost:3000/data/BottomData.json")
  //     .then(res => res.json())
  //     .then(res => {
  //       setUnit({
  //         ...unit,
  //         bottomData: unit.bottomData.concat(
  //           res.BottomData.slice(unit.preItems, unit.items)
  //         ),
  //         scrolling: !unit.scrolling
  //       });
  //     })
  //     .then(res => console.log(unit.bottomData));
  // };

  // const infiniteScroll = () => {
  //   console.log("스크롤");
  //   let scroolHeight = Math.max(document.documentElement.scrollHeight);
  //   let scrollTop = Math.max(document.documentElement.scrollTop);
  //   let clientHeight = document.documentElement.clientHeight;
  //   if (scrollTop + clientHeight + 1 > scroolHeight) {
  //     setUnit({
  //       ...unit,
  //       preItems: unit.items,
  //       items: unit.items + 5,
  //       scrolling: !unit.scrolling
  //     });
  //     getItem();
  //   }
  // };

  // mock 데이터 활용하여 데이터 받아 올 때
  // componentDidMount() {
  //   // fetch("http://localhost:3000/data/LatestNewsData.json", {
  //   //   method: "GET"
  //   // })
  //   fetch("http://localhost:3000/data/BottomData.json")
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         BottomData: res.BottomData
  //       });
  //     });
  // }
  render() {
    console.log("데이터", this.state.bottomData);
    return (
      <BottomWrapper>
        <BodyWrapper>
          <TitleWrapper>
            <Head>More to explore</Head>
          </TitleWrapper>
          <WholeCardWrapper>
            {this.state.bottomData.map(item => {
              return (
                <BottomBox
                  thumbnail={item.thumbnail}
                  article={item.article}
                  title={item.title}
                  author={item.author}
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
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
`;

export default Bottom;
