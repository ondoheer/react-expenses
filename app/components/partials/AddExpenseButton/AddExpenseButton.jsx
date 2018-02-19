import React from "react";
// import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const AddExpenseButton = () => (
  <button className="c-button c-button--float-br  c-button--circle c-button--secondary-color">
    <NavLink className="u-color--white" to="/expense/create">
      +
    </NavLink>
  </button>
);

// AddExpenseButton.propTypes = {}

export default AddExpenseButton;
