import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const HeaderNav = props => (
  <nav className="c-top-nav u-bkg--main-color">
    <ul className="c-top-nav__list">
      <li className="c-top-nav__item">
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li className="c-top-nav__item" to="/expenses">
        <NavLink to="/expense">Expenses</NavLink>
      </li>
      <li className="c-top-nav__item">
        <NavLink to="/category/create">Categories</NavLink>
      </li>
      <li className="c-top-nav__item c-c-top-nav__item ">
        <button
          className="c-button c-button-top-nav"
          onClick={props.logoutRemoveTokens}
        >
          Logout
        </button>
      </li>
    </ul>
  </nav>
);

HeaderNav.propTypes = {
  logoutRemoveTokens: PropTypes.func.isRequired
};
export default HeaderNav;
