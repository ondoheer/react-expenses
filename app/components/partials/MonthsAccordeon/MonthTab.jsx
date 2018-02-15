import React from 'react';

import { yearMonthUserConverter } from '../../../utils/utils';

const MonthTab = props => (
  <div
    className="c-accordeon__month-tab"
    onClick={() => props.toggleAccordeon(props.month.id)}
  >
    <h2 className="c-accordeon__month-name">
      {yearMonthUserConverter(props.month.id).month}
    </h2>
    <div className="c-accordeon__month-amount"> S/ {props.month.total}</div>
    <div 
      style={{
        fontSize: '1rem'
      }}
      className={`${
      props.accordeonOpenMonth ? 'icon-up-open' : 'icon-down-open'
    }`} ></div>
  </div>
);

export default MonthTab;
