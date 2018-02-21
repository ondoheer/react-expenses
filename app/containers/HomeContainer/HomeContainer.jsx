import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { lifecycle, compose } from "recompose";
import { withRouter } from "react-router-dom";

import HeaderNav from "../../components/partials/HeaderNav";
import TotalExpenses from "../../components/partials/TotalExpenses";
import MonthsAccordeon from "../../components/partials/MonthsAccordeon";
import AddExpenseButton from "../../components/partials/AddExpenseButton";

import { toggleAccordeonItem } from "../../redux/modules/accordeon";
import { logoutRemoveTokens } from "../../redux/modules/auth";

import { homeDataAction } from "../../redux/modules/homepage";

const mapStateToProps = state => {
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
      console.log("I am being caslled form the home container");
      dispatch(homeDataAction());
    }
  };
};

const HomeContainer = props => (
  <div className="c-main-container">
    <HeaderNav
      logoutRemoveTokens={props.logoutRemoveTokens}
      history={props.history}
    />
    <TotalExpenses />
    <MonthsAccordeon
      toggleAccordeon={props.toggleAccordeon}
      months={props.months}
      accordeonOpenMonths={props.accordeonOpenMonths}
    />

    <AddExpenseButton />
  </div>
);

HomeContainer.propTypes = {
  logoutRemoveTokens: PropTypes.func.isRequired,
  toggleAccordeon: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.object),
  accordeonOpenMonths: PropTypes.object
};
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.getHomeData();
    }
  })
)(HomeContainer);
