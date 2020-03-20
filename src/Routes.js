import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Page/Main/Main";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import Passport from "./Page/Passport/Passport";
import AboutPassport from "./Page/Passport/AboutPassport";
import News from "./Page/News/News";
import Essay from "./Page/Essay/Essay";
import Features from "./Page/Features/Features";
import Test from "./Page/NaviTest/Test";
import Sorting from "./Page/Sorting/Sorting";
import SortingResult from "./Page/Sorting/SortingResult";
import "./Styles/common.scss";

// 나중에 지워도 되나..?
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navigator from "./Components/Navigator/Navigator";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/passport" component={Passport} />
          <Route exact path="/about-passport" component={AboutPassport} />
          <Route exact path="/news" component={News} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/Essay" component={Essay} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/sorting" component={Sorting} />
          <Route exact path="/sorting-result" component={SortingResult} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/navigator" component={Navigator} />
        </Switch>
      </Router>
    );
  }
}
