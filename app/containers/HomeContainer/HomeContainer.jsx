import React from 'react';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';

import HeaderNav from '../../components/partials/HeaderNav';
import TotalExpenses from '../../components/partials/TotalExpenses';
import MonthsAccordeon from '../../components/partials/MonthsAccordeon';
import AddExpenseButton from '../../components/partials/AddExpenseButton';

import { toggleAccordeonItem } from '../../redux/modules/accordeon';
import { logoutRemoveTokens } from '../../redux/modules/auth';

import { homeDataAction } from '../../redux/modules/homepage';

const mapStateToProps = state => {
  console.log(state);
  return {
    accordeonOpenMonths: state.accordeon,
    months: state.homepage.months,
    logoutRemoveTokens: logoutRemoveTokens
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleAccordeon: id => {
      dispatch(toggleAccordeonItem(id));
    },
    getHomeData: () => {
      dispatch(homeDataAction());
    }
  };
};

const HomeContainer = props => (
  <div className="c-main-container">
    <HeaderNav logoutRemoveTokens={props.logoutRemoveTokens} />
    <TotalExpenses />
    <MonthsAccordeon
      toggleAccordeon={props.toggleAccordeon}
      months={props.months}
      accordeonOpenMonths={props.accordeonOpenMonths}
    />

    <AddExpenseButton />
  </div>
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.getHomeData();
    }
  })
)(HomeContainer);
