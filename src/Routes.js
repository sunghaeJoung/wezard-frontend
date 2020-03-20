import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/common.scss";
import Main from "./Page/Main";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import Passport from "./Page/Passport/Passport";
import AboutPassport from "./Page/Passport/AboutPassport";
import News from "./Page/News";
import Features from "./Page/Features";
import Essay from "./Page/Essay";
import Essay_Features from "./Page/Essay_Features";
import Sorting from "./Page/Sorting/Sorting";
import SortingResult from "./Page/Sorting/SortingResult";
import Quizzes from "./Page/Quizzes/Quizzes";
import QuizList from "./Page/Quizzes/QuizList";

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
          <Route exact path="/detail" component={Essay} />
          <Route exact path="/detail_features" component={Essay_Features} />
          <Route exact path="/sorting" component={Sorting} />
          <Route exact path="/sorting-result" component={SortingResult} />
          <Route exact path="/quizzes" component={Quizzes} />
          <Route exact path="/quizlist" component={QuizList} />
        </Switch>
      </Router>
    );
  }
}
