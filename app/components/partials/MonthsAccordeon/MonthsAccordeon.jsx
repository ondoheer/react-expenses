import React from 'react';

import MonthItem from './MonthItem';

export default props => (
  <div className="c-accordeon">
    {props.months.map((month, index) => (
      <MonthItem
        key={index}
        toggleAccordeon={props.toggleAccordeon}
        month={month}
        accordeonOpenMonth={
          props.accordeonOpenMonths[month.id] ? month.id : false
        }
      />
    ))}
  </div>
);
