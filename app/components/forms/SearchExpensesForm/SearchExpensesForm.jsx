import React from 'react';

const SearchExpensesForm = props => (
  <form onSubmit={props.getExpenses} className="c-form">
    {/* <input
      type="search"
      className="c-form__input"
      placeholder="... input your search here"
      value={props.searchInput}
      onChange={props.setSearchInput}
    />
    <button className="c-button c-button--submit c-button--grey">Search</button> */}

    <fieldset>
      <input
        className="c-input__search"
        type="search"
        placeholder="search..."
        value={props.searchInput}
        onChange={props.setSearchInput}
      />
      <button className="c-input__search-button">&#128269;</button>
    </fieldset>
  </form>
);

export default SearchExpensesForm;
