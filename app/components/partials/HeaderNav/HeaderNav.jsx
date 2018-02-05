import React from 'react';

import { NavLink } from 'react-router-dom';

export default () => (
  <nav className="c-top-nav">
    <ul className="c-top-nav__list">
      <li className="c-top-nav__item">
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li className="c-top-nav__item" to="/expenses">
        <NavLink to="/expenses">Expenses</NavLink>
      </li>
      <li className="c-top-nav__item">
        <NavLink to="/categoryAdd">Categories</NavLink>
      </li>
      <li className="c-top-nav__item">
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </ul>
  </nav>
);
