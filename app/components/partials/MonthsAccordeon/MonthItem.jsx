import React from 'react';

import MonthDetail from './MonthDetail';
import MonthTab from './MonthTab';

const MonthItem = props => (
  <div
    className={`c-accordeon__month-item
    c-accordeon__month-item${props.month.open ? '--open' : '--closed'}`}
  >
    <MonthTab
      month={props.month}
      toggleAccordeon={props.toggleAccordeon}
      index={props.index}
    />
    <MonthDetail categories={props.month.categories} />
  </div>
);

export default MonthItem;
