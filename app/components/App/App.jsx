import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import HomeContainer from '../../containers/HomeContainer';
import LoginContainer from '../../containers/LoginContainer';
import RegisterContainer from '../../containers/RegisterContainer';
import AddExpenseContainer from '../../containers/AddExpenseContainer';
import AddCategoryContainer from '../../containers/AddCategoryContainer';
import ExpensesContainer from '../../containers/ExpensesContainer';

import history from '../../index';

const mapStateToProps = state => ({});

const App = props => {
  return (
    <Router history={history}>
      <div className="container">
        <Switch>
          <Route
            path="/login"
            render={() => {
              const isLoged = localStorage.getItem('access_token');
              return isLoged ? <Redirect to="/" /> : <LoginContainer />;
            }}
          />
          <Route
            path="/register"
            render={() => {
              const isLoged = localStorage.getItem('access_token');
              return isLoged ? <Redirect to="/" /> : <RegisterContainer />;
            }}
          />

          <Route
            exact
            path="/"
            render={() => {
              const isLoged = localStorage.getItem('access_token');
              return isLoged ? <HomeContainer /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/expense/create"
            render={() => {
              const isLoged = localStorage.getItem('access_token');
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
              const isLoged = localStorage.getItem('access_token');
              return isLoged ? <ExpensesContainer /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/category/create"
            render={() => {
              const isLoged = localStorage.getItem('access_token');
              return isLoged ? (
                <AddCategoryContainer />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps)(App);
