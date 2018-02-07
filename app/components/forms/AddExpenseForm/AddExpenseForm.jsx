import React from 'react';

const AddExpenseForm = () => (
  <div className="c-form-container u-bkg--red">
    <div className="c-form c-form--expense">
      <label htmlFor="name" className="c-form__label">
        Expense
      </label>
      <input id="name" className="c-form__input" type="text" />

      <label htmlFor="amount" className="c-form__label">
        Amount
      </label>
      <input
        id="amount"
        className="c-form__input c-form__input--number"
        type="number"
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
    </div>
  </div>
);

export default AddExpenseForm;