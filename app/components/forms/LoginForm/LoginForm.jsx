import React from "react";
import { NavLink } from "react-router-dom";

import FlashBox from "../../partials/FlashBox";

const LoginForm = props => (
  <div className="c-form-container ">
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

      <button className="c-button c-button--submit c-button--secondary-color">
        Login
      </button>

      {props.error ? <FlashBox error={props.error} /> : ""}

      <div className="c-info-box c-info-box--white">
        <p>
          Or maybe{" "}
          <NavLink className="u-link--secondary-color" to="/register">
            register
          </NavLink>{" "}
          ?
        </p>
      </div>
    </form>
  </div>
);

export default LoginForm;
