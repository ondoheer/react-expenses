import React from 'react';

const AddExpenseForm = props => (
  <div className="c-form-container ">
    <form onSubmit={props.addExpenseHandler} className="c-form c-form--expense">
    <fieldset className="c-form__fieldset">
    
      <label htmlFor="amount" className="c-form__label u-bold u-color--secondary">
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
    </fieldset>
    
    <fieldset className="c-form__fieldset">
      <label htmlFor="name" className="c-form__label u-bold u-color--secondary">
        Expense
      </label>
      <input
        id="name"
        className="c-form__input"
        type="text"
        onChange={props.setExpenseName}
        value={props.nameInput}
      />
    </fieldset>
     <fieldset className="c-form__fieldset">
      <label htmlFor="category" className="c-form__label u-bold u-color--secondary">
        Category
      </label>
      <select
        name="category"
        id="category"
        className="c-form__input c-form__input--select"
        onChange={props.setExpenseCategory}
      >
        {props.categories.map(cat => (
          <option key={cat.id} value={cat.id}>
            {cat.label}
          </option>
        ))}
      </select>
      </fieldset>
      <button className="c-button c-button--submit c-button--secondary-color">
        Add expense
      </button>

      <div className="c-info-box c-info-box--main-color">
        <strong>last expense </strong> <br /> {props.lastExpense.name} S/
        {props.lastExpense.amount}
      </div>
    </form>
  </div>
);

export default AddExpenseForm;
