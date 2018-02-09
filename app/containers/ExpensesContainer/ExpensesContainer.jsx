import React from 'react';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';

import HeaderNav from '../../components/partials/HeaderNav';
import AddExpenseButton from '../../components/partials/AddExpenseButton';

import { logoutRemoveTokens } from '../../redux/modules/auth';

const mapStateToProps = state => ({
  logoutRemoveTokens: logoutRemoveTokens
});

const ExpensesContainer = props => (
  <div className="main-container">
    <HeaderNav logoutRemoveTokens={props.logoutRemoveTokens} />
    <div className="c-form-container">
      <form action="" className="c-form">
        <input
          type="text"
          className="c-form__input"
          placeholder="... input your search here"
        />
        <button className="c-button c-button--submit c-button--grey">
          Search
        </button>
      </form>
      <table className="c-table">
        <thead>
          <tr className="c-table-row">
            <th className="c-table-head">Name</th>
            <th className="c-table-head">Amount</th>
            <th className="c-table-head">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="c-table-row">
            <td className="c-table-data">Tuna Meatballs</td>
            <td className="c-table-data">S/ 34.45</td>
            <td className="c-table-data">01/03/2018</td>
          </tr>
          <tr className="c-table-row">
            <td className="c-table-data">Tuna Meatballs</td>
            <td className="c-table-data">S/ 34.45</td>
            <td className="c-table-data">01/03/2018</td>
          </tr>
          <tr className="c-table-row">
            <td className="c-table-data">Tuna Meatballs</td>
            <td className="c-table-data">S/ 34.45</td>
            <td className="c-table-data">01/03/2018</td>
          </tr>
          <tr className="c-table-row">
            <td className="c-table-data">Tuna Meatballs</td>
            <td className="c-table-data">S/ 34.45</td>
            <td className="c-table-data">01/03/2018</td>
          </tr>
        </tbody>
      </table>
      <div className="c-pagination">
        <form className="c-pagination__form">
          <label htmlFor="paginator" className="c-pagination__form__label">
            Go to page
          </label>
          <input
            type="number"
            id="paginator"
            className="c-pagination__form__input"
          />
          <span className="c-pagination__form__label">of 3</span>
        </form>
        <div className="c-pagination__arrows-container">
          <button className="c-pagination__arrow c-pagination__arrow--left">
            &#9664;
          </button>
          <button className="c-pagination__arrow c-pagination__arrow--right">
            &#9654;
          </button>
        </div>
      </div>
    </div>
    <AddExpenseButton />
  </div>
);

export default compose(connect(mapStateToProps))(ExpensesContainer);
