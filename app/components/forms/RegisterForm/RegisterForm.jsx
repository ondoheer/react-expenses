import React from 'react';

const RegisterForm = props => (
  <div className="c-form-container u-bkg--green">
    <form className="c-form c-form--login" onSubmit={props.registerHandler}>
      <label htmlFor="fullname" className="c-form__label">
        Full name
      </label>
      <input
        className="c-form__input"
        type="text"
        id="fullname"
        onChange={props.setFullName}
        value={props.fullNameInput}
      />

      <label htmlFor="email" className="c-form__label">
        Email
      </label>
      <input
        className="c-form__input"
        type="email"
        id="email"
        onChange={props.setEmail}
        value={props.emailInput}
      />

      <label htmlFor="password" className="c-form__label">
        Password
      </label>
      <input
        id="password"
        className="c-form__input c-form__input--password"
        type="password"
        onChange={props.setPassword}
        value={props.passwordInput}
      />

      <label htmlFor="confirm" className="c-form__label">
        Confirm
      </label>
      <input
        id="confirm"
        className="c-form__input c-form__input--password"
        type="password"
        onChange={props.setConfirm}
        value={props.confirmInput}
      />

      <button className="c-button c-button--submit c-button--dark-green">
        Register
      </button>
    </form>
  </div>
);

export default RegisterForm;
