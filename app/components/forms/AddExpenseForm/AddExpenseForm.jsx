import React from 'react';

const AddExpenseForm = props => (
  <div className="c-form-container u-bkg--red">
    <form onSubmit={props.addExpenseHandler} className="c-form c-form--expense">
      <label htmlFor="name" className="c-form__label">
        Expense
      </label>
      <input
        id="name"
        className="c-form__input"
        type="text"
        onChange={props.setExpenseName}
        value={props.nameInput}
      />

      <label htmlFor="amount" className="c-form__label">
        Amount
      </label>
      <input
        id="amount"
        className="c-form__input c-form__input--number"
        type="number"
        step="any"
        onChange={props.setExpenseAmount}
        value={props.amountInput}
      />

      <label htmlFor="category" className="c-form__label">
        Category
      </label>
      <select
        name="category"
        id="category"
        className="c-form__input c-form__input--select"
      >
        <option value="">groceries</option>
        <option value="">transportation</option>
        <option value="">rent</option>
        <option value="">services</option>
      </select>

      <button className="c-button c-button--submit c-button--dark-red">
        Add expense
      </button>

      <div className="c-info-box c-info-box--white">
        <strong>last expense </strong> <br /> eating a nice bembos burger S/
        34.56
      </div>
    </form>
  </div>
);

export default AddExpenseForm;
