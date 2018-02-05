import React from 'react';

import HeaderNav from '../../components/partials/HeaderNav';
import AddExpenseForm from '../../components/forms/AddExpenseForm';

const HomeContainer = () => (
  <div className="home-container">
    <HeaderNav />
    <AddExpenseForm />
  </div>
);

export default HomeContainer;
