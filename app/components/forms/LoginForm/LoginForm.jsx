import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginForm = () => (
  <div className="c-form-container u-bkg--green">
    <div className="c-form c-form--login">
      <label htmlFor="email" className="c-form__label">
        Email
      </label>
      <input className="c-form__input" id="email" type="text" />

      <label htmlFor="password" className="c-form__label">
        Password
      </label>
      <input
        className="c-form__input c-form__input--password"
        type="password"
        id="password"
        name="password"
      />

      <button className="c-button c-button--submit c-button--dark-green">
        Login
      </button>
      <div className="c-info-box">
        <p>
          Or maybe{' '}
          <NavLink className="u-link--dark-green" to="/register">
            register
          </NavLink>{' '}
          ?
        </p>
      </div>
    </div>
  </div>
);

export default LoginForm;
