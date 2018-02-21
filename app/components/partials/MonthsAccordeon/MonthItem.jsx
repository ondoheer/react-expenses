import React from "react";
import PropTypes from "prop-types";

import MonthDetail from "./MonthDetail";
import MonthTab from "./MonthTab";

const MonthItem = props => (
  <div
    className={` c-accordeon__month-item
    c-accordeon__month-item${
      props.accordeonOpenMonth ? "--open" : "--closed"
    } `}
  >
    <MonthTab
      month={props.month}
      toggleAccordeon={props.toggleAccordeon}
      accordeonOpenMonth={props.accordeonOpenMonth}
    />
    <MonthDetail categories={props.month.categories} />
  </div>
);

MonthItem.propTypes = {
  month: PropTypes.object.isRequired,
  toggleAccordeon: PropTypes.func.isRequired,
  accordeonOpenMonth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
export default MonthItem;
