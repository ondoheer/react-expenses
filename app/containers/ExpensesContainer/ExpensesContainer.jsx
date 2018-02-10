import React from 'react';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';

// Components
import HeaderNav from '../../components/partials/HeaderNav';
import AddExpenseButton from '../../components/partials/AddExpenseButton';
import SearchExpensesForm from '../../components/forms/SearchExpensesForm';
import ExpensesTable from '../../components/partials/ExpensesTable';
import PaginatorForm from '../../components/forms/PaginatorForm';

// Reducers
import { logoutRemoveTokens } from '../../redux/modules/auth';
import {
  getFilteredExpenses,
  setSearchInput,
  setPageInput,
  getNextPage,
  getPreviousPage,
  increasePage
} from '../../redux/modules/expenses';

const mapStateToProps = state => ({
  logoutRemoveTokens,
  per_page: state.expenses.per_page,
  page: state.expenses.page,
  pages: state.expenses.expenses.pages,
  expenses: state.expenses.expenses.expenses,
  searchInput: state.expenses.searchInput,
  has_next: state.expenses.expenses.has_next,
  has_prev: state.expenses.expenses.has_prev,
  increasePage
});

const mapDispatchToProps = dispatch => {
  return {
    getExpenses: evt => {
      if (evt !== undefined) {
        evt.preventDefault();
      }
      dispatch(getFilteredExpenses());
    },
    setSearchInput: evt => {
      dispatch(setSearchInput(evt.target.value));
    },
    setPageInput: evt => {
      dispatch(setPageInput(evt.target.value));
    },
    getNextPage: () => {
      dispatch(getNextPage());
    },
    getPreviousPage: () => {
      dispatch(getPreviousPage());
    }
  };
};

const ExpensesContainer = props => (
  <div className="main-container">
    <HeaderNav logoutRemoveTokens={props.logoutRemoveTokens} />
    <div className="c-form-container">
      <SearchExpensesForm
        setSearchInput={props.setSearchInput}
        getExpenses={props.getExpenses}
      />
      <ExpensesTable expenses={props.expenses} />
      <PaginatorForm
        page={props.page}
        pages={props.pages}
        hasPrev={props.has_prev}
        hasNext={props.has_next}
        setPageInput={props.setPageInput}
        getExpenses={props.getExpenses}
        decreasePage={props.getPreviousPage}
        increasePage={props.getNextPage}
      />
    </div>
    <AddExpenseButton />
  </div>
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.getExpenses();
    }
  })
)(ExpensesContainer);
