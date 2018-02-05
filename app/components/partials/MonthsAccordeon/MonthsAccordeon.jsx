import React from 'react';

export default () => (
  <div className="c-accordeon">
    <div className="c-accordeon__month c-accordeon__month--minus">
      February - S/ 12,950.00
    </div>
    <div className="c-accordeon__detail">
      <ul className="c-accordeon__detail__list">
        <li className="c-accordeon__detail__list__item">
          Groceries - S/345.78
        </li>
        <li className="c-accordeon__detail__list__item">
          Transportation - S/128.00
        </li>
        <li className="c-accordeon__detail__list__item">Rent - S/1250.00</li>
        <li className="c-accordeon__detail__list__item">Services - S/567.00</li>
      </ul>
    </div>

    <div className="c-accordeon__month c-accordeon__month--plus">
      January - S/ 11,450.00{' '}
    </div>
    <div className="c-accordeon__month c-accordeon__month--plus">
      December - S/ 10,780.00
    </div>
    <div className="c-accordeon__month c-accordeon__month--plus">
      November - S/ 12,334.00
    </div>
    <div className="c-accordeon__month c-accordeon__month--plus">
      October - S/ 12,950.00
    </div>
    <div className="c-accordeon__month c-accordeon__month--plus">
      September - S/ 12,950.00
    </div>
  </div>
);
