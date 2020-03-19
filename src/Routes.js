import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navigator from "./Components/Navigator/Navigator";
import Main from "./Page/Main/Main";
import News from "./Page/News/News";
import Essay from "./Page/Essay/Essay";
import Features from "./Page/Features/Features";
import Login from "./Page/Login/Login";
import SignUp from "./Page/SignUp/SignUp";
import Passport from "./Page/Passport/Passport";
import Test from "./Page/NaviTest/Test";
import AboutPassport from "./Page/Passport/AboutPassport";
import Sorting from "./Page/Sorting/Sorting";
import "./Styles/common.scss";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/navigator" component={Navigator} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/passport" component={Passport} />
          <Route exact path="/news" component={News} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/Essay" component={Essay} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/about-passport" component={AboutPassport} />
          <Route exact path="/sorting" component={Sorting} />
        </Switch>
      </Router>
    );
  }
}
