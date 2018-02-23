import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { lifecycle, compose } from "recompose";

import HeaderNav from "../../components/partials/HeaderNav";
import AddExpenseForm from "../../components/forms/AddExpenseForm";

import { logoutRemoveTokens } from "../../redux/modules/auth";

import {
  setExpenseName,
  setExpenseAmount,
  setExpenseCategory,
  addExpenseAction,
  getLastExpense
} from "../../redux/modules/expenses";

import { getCategoriesAction } from "../../redux/modules/categories";

const mapStateToProps = state => ({
  nameInput: state.expenses.nameInput,
  amountInput: state.expenses.amountInput,
  categoryInput: state.expenses.categoryInput,
  lastExpense: state.expenses.lastExpense,
  categories: state.categories.categories,
  logoutRemoveTokens: logoutRemoveTokens
});

const mapDispatchToProps = dispatch => {
  return {
    setExpenseName: evt => {
      dispatch(setExpenseName(evt.target.value));
    },
    setExpenseAmount: evt => {
      dispatch(setExpenseAmount(evt.target.value));
    },
    setExpenseCategory: evt => {
      dispatch(setExpenseCategory(evt.target.value));
    },
    getCategories: () => {
      dispatch(getCategoriesAction());
    },
    addExpenseHandler: evt => {
      evt.preventDefault();
      dispatch(addExpenseAction());
    },
    getLastExpense: () => {
      dispatch(getLastExpense());
    }
  };
};
const AddExpenseContainer = props => (
  <div className="c-main-container">
    <HeaderNav logoutRemoveTokens={props.logoutRemoveTokens} />
    <AddExpenseForm
      setExpenseName={props.setExpenseName}
      setExpenseAmount={props.setExpenseAmount}
      setExpenseCategory={props.setExpenseCategory}
      addExpenseHandler={props.addExpenseHandler}
      getLastExpense={props.getLastExpense}
      lastExpense={props.lastExpense}
      categories={props.categories}
    />
  </div>
);

AddExpenseContainer.propTypes = {
  logoutRemoveTokens: PropTypes.func.isRequired,
  setExpenseAmount: PropTypes.func.isRequired,
  setExpenseName: PropTypes.func.isRequired,
  setExpenseCategory: PropTypes.func.isRequired,
  addExpenseHandler: PropTypes.func.isRequired,
  getLastExpense: PropTypes.func.isRequired,
  lastExpense: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  categories: PropTypes.arrayOf(PropTypes.object)
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.getLastExpense();
      this.props.getCategories();
    }
  })
)(AddExpenseContainer);
