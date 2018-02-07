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
import history from '../../index';

const mapStateToProps = state => ({});

const App = props => {
  return (
    <Router history={history}>
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              console.log(
                `ìs authenticated?: ${localStorage.getItem('access_token')}`
              );
              const isLoged = localStorage.getItem('access_token');
              console.log(isLoged);
              return isLoged ? <HomeContainer /> : <Redirect to="/login" />;
            }}
          />
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route path="/expenseAdd" component={AddExpenseContainer} />
          <Route path="/categoryAdd" component={AddCategoryContainer} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps)(App);
