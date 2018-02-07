import React from 'react';
import { connect } from 'react-redux';

import HeaderNav from '../../components/partials/HeaderNav';
import TotalExpenses from '../../components/partials/TotalExpenses';
import MonthsAccordeon from '../../components/partials/MonthsAccordeon';
import AddExpenseButton from '../../components/partials/AddExpenseButton';

import { toggleAccordeonItem } from '../../redux/modules/accordeon';

const mapStateToProps = state => ({
  months: state.accordeon.months
});

const mapDispatchToProps = dispatch => {
  return {
    toggleAccordeon: index => {
      dispatch(toggleAccordeonItem(index));
    }
  };
};

const HomeContainer = ({ toggleAccordeon, months }) => (
  <div className="home-container">
    <HeaderNav />
    <TotalExpenses month={months[0]} />
    <MonthsAccordeon toggleAccordeon={toggleAccordeon} months={months} />
    <AddExpenseButton />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
