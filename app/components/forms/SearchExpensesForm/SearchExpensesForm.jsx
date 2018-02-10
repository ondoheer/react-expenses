import React from 'react';

const SearchExpensesForm = props => (
  <form onSubmit={props.getExpenses} className="c-form">
    <input
      type="text"
      className="c-form__input"
      placeholder="... input your search here"
      value={props.searchInput}
      onChange={props.setSearchInput}
    />
    <button className="c-button c-button--submit c-button--grey">Search</button>
  </form>
);

export default SearchExpensesForm;
