import React from "react";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../../index";

import {
  EnhancedCategoryCreateRoute,
  EnhancedExpenseCreateRoute,
  EnhancedExpensesRoute,
  EnhancedHomeRoute,
  EnhancedLoginRoute,
  EnhancedRegisterRoute
} from "../routes";
import NotFoundContainer from "../../containers/NotFoundContainer";

const mapStateToProps = state => ({});

const App = props => {
  return (
    <Router history={history}>
      <div className="container">
        <Switch>
          <EnhancedLoginRoute exact path="/login" />
          <EnhancedRegisterRoute exact path="/register" />
          <EnhancedHomeRoute exact path="/main" />
          <EnhancedExpenseCreateRoute exact path="/expense/create" />
          <EnhancedExpensesRoute exact path="/expense" />
          <EnhancedCategoryCreateRoute exact path="/category/create" />
          <Route component={NotFoundContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps)(App);
