import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <button className="c-button c-button--float-br  c-button--circle c-button--secondary-color">
    <NavLink className="u-color--white" to="/expense/create">
      +
    </NavLink>
  </button>
);
