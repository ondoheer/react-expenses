import React from 'react';

import HeaderNav from '../../components/partials/HeaderNav';
import TotalExpenses from '../../components/partials/TotalExpenses';
import MonthsAccordeon from '../../components/partials/MonthsAccordeon';
import AddExpenseButton from '../../components/partials/AddExpenseButton';

const HomeContainer = () => (
  <div className="home-container">
    <HeaderNav />
    <TotalExpenses />
    <MonthsAccordeon />
    <AddExpenseButton />
  </div>
);

export default HomeContainer;
