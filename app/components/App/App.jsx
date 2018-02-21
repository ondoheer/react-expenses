import React from "react";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../../index";

import ProtectedRedirectToLogin from "../RouteHelpers/ProtectedRedirectToLogin";
import BlockedIfLogedIn from "../RouteHelpers/BlockedIfLogedIn";
import HomeContainer from "../../containers/HomeContainer";
import LoginContainer from "../../containers/LoginContainer";
import RegisterContainer from "../../containers/RegisterContainer";
import AddExpenseContainer from "../../containers/AddExpenseContainer";
import AddCategoryContainer from "../../containers/AddCategoryContainer";
import ExpensesContainer from "../../containers/ExpensesContainer";

import NotFoundContainer from "../../containers/NotFoundContainer";

const RedirectToLogin = ({ children }) => {
  const isLoged = localStorage.getItem("access_token");
  return isLoged ? children : <LoginContainer />;
};

const mapStateToProps = state => ({});

const App = props => {
  return (
    <Router history={history}>
      <div className="container">
        <Switch>
          <Route
            path="/login"
            render={() => {
              const isLoged = localStorage.getItem("access_token");
              return isLoged ? <Redirect to="/" /> : <LoginContainer />;
            }}
          />
          <Route
            path="/register"
            render={() => {
              const isLoged = localStorage.getItem("access_token");
              return isLoged ? <Redirect to="/" /> : <RegisterContainer />;
            }}
          />

          <Route
            exact
            path="/main"
            render={() => {
              const isLoged = localStorage.getItem("access_token");
              return isLoged ? <HomeContainer /> : <Redirect to="/login" />;
            }}
          />

          <Route
            path="/expense/create"
            render={() => {
              const isLoged = localStorage.getItem("access_token");
              return isLoged ? (
                <AddExpenseContainer />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route
            exact
            path="/expense"
            render={() => {
              const isLoged = localStorage.getItem("access_token");
              return isLoged ? <ExpensesContainer /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/category/create"
            render={() => {
              const isLoged = localStorage.getItem("access_token");
              return isLoged ? (
                <AddCategoryContainer />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />

          <Route component={NotFoundContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps)(App);
