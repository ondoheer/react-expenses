import React from 'react';

const PlaceholderTable = props => (
  <table className="c-table">
    <thead>
      <tr className="c-table-row">
        <th className="c-table-head">Name</th>
        <th className="c-table-head">Amount</th>
        <th className="c-table-head">Date</th>
      </tr>
    </thead>
    <tbody>
      {props.expenses.map(expense => (
        <tr key={expense.id} className="c-table-row">
          <td className="c-table-data">{expense.name}</td>
          <td className="c-table-data">S/ {expense.amount}</td>
          <td className="c-table-data">{expense.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PlaceholderTable;
