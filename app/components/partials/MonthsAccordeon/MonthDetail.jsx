import React from "react";
import PropTypes from "prop-types";

const MonthDetail = props => (
  <div className="c-accordeon__month-item__detail">
    <ul className="c-accordeon__month-item__detail__list">
      {props.categories.map(category => (
        <li
          key={category.id}
          className="c-accordeon__month-item__detail__list-item"
        >
          {category.label} - S/{category.amount}
        </li>
      ))}
    </ul>
  </div>
);

MonthDetail.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object)
};
export default MonthDetail;
