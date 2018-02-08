import React from 'react';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';

import HeaderNav from '../../components/partials/HeaderNav';
import AddExpenseForm from '../../components/forms/AddExpenseForm';

import {
  setExpenseName,
  setExpenseAmount,
  setExpenseCategory,
  addExpenseAction
} from '../../redux/modules/expenses';

const mapStateToProps = state => ({
  nameInput: state.expenses.nameInput,
  amountInput: state.expenses.amountInput,
  categoryInput: state.expenses.categoryInput
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
    addExpenseHandler: evt => {
      evt.preventDefault;
      dispatch(addExpenseAction());
    }
  };
};
const AddExpenseContainer = props => (
  <div className="home-container">
    <HeaderNav />
    <AddExpenseForm
      setExpenseName={props.setExpenseName}
      setExpenseAmount={props.setExpenseAmount}
      setExpenseCategory={props.setExpenseCategory}
      addExpenseHandler={props.addExpenseHandler}
    />
  </div>
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.fetchData();
    }
  })
)(AddExpenseContainer);
