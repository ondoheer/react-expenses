import React from 'react';

import MonthDetail from './MonthDetail';
import MonthTab from './MonthTab';

const MonthItem = props => (
  <div
    className={` c-accordeon__month-item
    c-accordeon__month-item${
      props.accordeonOpenMonth ? '--open' : '--closed'
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

export default MonthItem;
