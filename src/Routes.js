import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Page/Main/Main";
import Login from "./Page/Login/Login";
import SignUp from "./Page/Reg/Reg.js";
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
        </Switch>
      </Router>
    );
  }
}
