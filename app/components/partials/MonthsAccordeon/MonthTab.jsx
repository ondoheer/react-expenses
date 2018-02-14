import React from 'react';

import { yearMonthUserConverter } from '../../../utils/utils';

const MonthTab = props => (
  <div
    className={`c-accordeon__month-tab c-accordeon__month-tab${
      props.accordeonOpenMonth ? '--minus' : '--plus'
    }`}
    onClick={() => props.toggleAccordeon(props.month.id)}
  >
    {yearMonthUserConverter(props.month.id).month} - S/ {props.month.total}
  </div>
);

export default MonthTab;
