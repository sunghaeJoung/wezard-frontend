import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Page/Main/Main";
import News from "./Page/NewsFeatures/News";
import Login from "./Page/Login/Login";
import SignUp from "./Page/SignUp/SignUp";
import Passport from "./Page/Passport/Passport";
import "./Styles/common.scss";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/passport" component={Passport} />
          <Route exact path="/news" component={News} />
        </Switch>
      </Router>
    );
  }
}
