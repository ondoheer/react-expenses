import React from "react";
import PropTypes from "prop-types";

const ExpensesTable = props => (
  <div className="c-table">
    <div className="c-table__row l-grid-212">
      <div className="c-table__head">Name</div>
      <div className="c-table__head">Amount</div>
      <div className="c-table__head">Date</div>
    </div>
    {props.expenses.map((expense, index) => (
      <div key={index} className="c-table__row l-grid-212">
        <div className="c-table__data u-align--left">{expense.name}</div>
        <div className="c-table__data">S/ {expense.amount}</div>
        <div className="c-table__data">{expense.date}</div>
      </div>
    ))}
  </div>
);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object)
};
export default ExpensesTable;
