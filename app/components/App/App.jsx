import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomeContainer from '../../containers/HomeContainer';
import LoginContainer from '../../containers/LoginContainer';
import RegisterContainer from '../../containers/RegisterContainer';
import AddExpenseContainer from '../../containers/AddExpenseContainer';
import AddCategoryContainer from '../../containers/AddCategoryContainer';

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

const App = props => {
  const loggedIn = props => {
    if (props.auth === undefined) {
      return false;
    } else {
      return props.auth.authenticated;
    }
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return loggedIn(props) ? (
                <HomeContainer />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route path="/expenseAdd" component={AddExpenseContainer} />
          <Route path="/categoryAdd" component={AddCategoryContainer} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps)(App);
