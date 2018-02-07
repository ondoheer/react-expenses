import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginForm = props => (
  <div className="c-form-container u-bkg--green">
    <form className="c-form c-form--login" onSubmit={props.loginHandler}>
      <label htmlFor="email" className="c-form__label">
        Email
      </label>
      <input
        className="c-form__input"
        id="email"
        type="text"
        onChange={props.setEmail}
        value={props.emailImput}
      />

      <label htmlFor="password" className="c-form__label">
        Password
      </label>
      <input
        className="c-form__input c-form__input--password"
        type="password"
        id="password"
        name="password"
        onChange={props.setPassword}
        value={props.passwordInput}
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
    </form>
  </div>
);

export default LoginForm;
