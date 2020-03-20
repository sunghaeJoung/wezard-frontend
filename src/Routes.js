import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import Passport from "./Page/Passport/Passport";
import AboutPassport from "./Page/Passport/AboutPassport";
import Main from "./Page/Main";
import News from "./Page/News";
import Essay from "./Page/Essay";
import Essay_Features from "./Page/Essay_Features";
import Features from "./Page/Features";
import Sorting from "./Page/Sorting/Sorting";
import SortingResult from "./Page/Sorting/SortingResult";
import QuizList from "./Page/Quizzes/QuizList";
import Quizzes from "./Page/Quizzes/Quizzes";
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
          <Route exact path="/about-passport" component={AboutPassport} />
          <Route exact path="/news" component={News} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/Essay" component={Essay} />
          <Route exact path="/sorting-result" component={SortingResult} />
          <Route exact path="/detail" component={Essay} />
          <Route exact path="/detail_features" component={Essay_Features} />
          <Route exact path="/about-passport" component={AboutPassport} />
          <Route exact path="/sorting" component={Sorting} />
          <Route exact path="/quizlist" component={QuizList} />
          <Route exact path="/quizzes" component={Quizzes} />
        </Switch>
      </Router>
    );
  }
}
