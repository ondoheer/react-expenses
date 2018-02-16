import React from "react";
import { NavLink } from "react-router-dom";
import FlashBox from "../../partials/FlashBox";

const RegisterForm = props => (
  <div className="c-form-container ">
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

      <button
        type="button"
        onClick={props.registerHandler}
        disabled={props.confirmInput !== props.passwordInput}
        className="c-button c-button--submit c-button--secondary-color"
      >
        Register
      </button>

      {props.error ? <FlashBox error={props.error} /> : ""}

      <div className="c-info-box c-info-box--white">
        <p>
          If you already have a user just{" "}
          <NavLink className="u-link--secondary-color" to="/login">
            login
          </NavLink>
        </p>
      </div>
    </form>
  </div>
);

export default RegisterForm;
