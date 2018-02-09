import React from 'react';

import { NavLink } from 'react-router-dom';

export default props => (
  <nav className="c-top-nav">
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
