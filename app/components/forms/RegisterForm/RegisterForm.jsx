import React from 'react';

const RegisterForm = () => (
  <div className="c-form-container u-bkg--green">
    <div className="c-form c-form--login">
      <label htmlFor="fullname" className="c-form__label">
        Full name
      </label>
      <input className="c-form__input" type="text" id="fullname" />

      <label htmlFor="email" className="c-form__label">
        Email
      </label>
      <input className="c-form__input" type="email" id="email" />

      <label htmlFor="password" className="c-form__label">
        Password
      </label>
      <input
        id="password"
        className="c-form__input c-form__input--password"
        type="password"
      />

      <label htmlFor="confirm" className="c-form__label">
        Confirm
      </label>
      <input
        id="confirm"
        className="c-form__input c-form__input--password"
        type="password"
      />

      <button className="c-button c-button--submit c-button--dark-green">
        Register
      </button>
    </div>
  </div>
);

export default RegisterForm;
