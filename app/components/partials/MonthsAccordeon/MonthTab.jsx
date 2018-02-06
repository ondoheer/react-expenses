import React from 'react';

const MonthTab = props => (
  <div
    className={`c-accordeon__month-tab c-accordeon__month-tab${
      props.month.open ? '--minus' : '--plus'
    }`}
    onClick={() => props.toggleAccordeon(props.index)}
  >
    February - S/ 12,950.00
  </div>
);

export default MonthTab;
