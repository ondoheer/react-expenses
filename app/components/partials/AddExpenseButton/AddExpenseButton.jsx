import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <button className="c-button c-button--full-bottom c-button--large c-button--red">
    <NavLink to="/expenseAdd">Add expense</NavLink>
  </button>
);
