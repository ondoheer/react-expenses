import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeContainer from '../../containers/HomeContainer';
import LoginContainer from '../../containers/LoginContainer';
import RegisterContainer from '../../containers/RegisterContainer';
import AddExpenseContainer from '../../containers/AddExpenseContainer';
import AddCategoryContainer from '../../containers/AddCategoryContainer';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route path="/expenseAdd" component={AddExpenseContainer} />
        <Route path="/categoryAdd" component={AddCategoryContainer} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
