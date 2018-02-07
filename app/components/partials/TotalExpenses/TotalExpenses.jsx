import React from 'react';
import { yearMonthUserConverter } from '../../../utils/utils';

export default props => (
  <div className="c-total-expenses">
    <div className="c-total-expenses__item c-total-expenses__title ">
      Total expenses{' '}
    </div>
    <div className="c-total-expenses__current-month">
      {yearMonthUserConverter(props.month.id).month}
    </div>
    <div className="c-total-expenses__item c-total-expenses__amount">
      S/ {props.month.total}
    </div>
  </div>
);
