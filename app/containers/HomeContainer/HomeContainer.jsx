import React from 'react';
import { connect } from 'react-redux';

import HeaderNav from '../../components/partials/HeaderNav';
import TotalExpenses from '../../components/partials/TotalExpenses';
import MonthsAccordeon from '../../components/partials/MonthsAccordeon';
import AddExpenseButton from '../../components/partials/AddExpenseButton';

import { toggleAccordeonItem } from '../../redux/modules/accordeon';
import { logoutRemoveTokens } from '../../redux/modules/auth';

const mapStateToProps = state => ({
  months: state.accordeon.months,
  logoutRemoveTokens: logoutRemoveTokens
});

const mapDispatchToProps = dispatch => {
  return {
    toggleAccordeon: index => {
      dispatch(toggleAccordeonItem(index));
    }
  };
};

const HomeContainer = ({ toggleAccordeon, months, logoutRemoveTokens }) => (
  <div className="home-container">
    <HeaderNav logoutRemoveTokens={logoutRemoveTokens} />
    <TotalExpenses month={months[0]} />
    <MonthsAccordeon toggleAccordeon={toggleAccordeon} months={months} />
    <AddExpenseButton />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
