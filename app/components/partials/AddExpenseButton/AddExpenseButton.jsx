import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <button className="c-button c-button--float-br  c-button--circle u-bkg--main-color">
    <NavLink className="u-bkg--main-color" to="/expense/create">
      +
    </NavLink>
  </button>
);
