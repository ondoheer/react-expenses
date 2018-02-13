import React from 'react';

const ExpensesTable = props => (
  // <table className="c-table">
  //   {/* <thead>
  //     <tr className="c-table-row">
  //       <th className="c-table-head">Name</th>
  //       <th className="c-table-head">Amount</th>
  //       <th className="c-table-head">Date</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {props.expenses.map(expense => (
  //       <tr key={expense.id} className="c-table-row">
  //         <td className="c-table-data">{expense.name}</td>
  //         <td className="c-table-data">S/ {expense.amount}</td>
  //         <td className="c-table-data">{expense.date}</td>
  //       </tr>
  //     ))}
  //   </tbody> */}
  // </table>
  <div className="">
    <div className="c-table__row l-grid-212">
      <div className="c-table__head">Name</div>
      <div className="c-table__head">Amount</div>
      <div className="c-table__head">Date</div>
    </div>
    {props.expenses.map(expense => (
      <div className="c-table__row l-grid-212">
        <div className="c-table__data">{expense.name}</div>
        <div className="c-table__data">{expense.amount}</div>
        <div className="c-table__data">{expense.date}</div>
      </div>
    ))}
  </div>
);

export default ExpensesTable;
