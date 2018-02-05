import React from 'react';

const AddCategoryForm = () => (
  <div className="c-form-container u-bkg--blue">
    <div className="c-form c-form--login">
      <label htmlFor="name" className="c-form__label">
        Name
      </label>
      <input id="name" className="c-form__input" type="text" />

      <button className="c-button c-button--submit c-button--dark-blue">
        add category
      </button>

      <div className="c-info-box">
        <strong>Existing Categories</strong>
        <ul className="c-info-box__list">
          <li className="c-info-box__list-item">item-1</li>
          <li className="c-info-box__list-item">item-2</li>
          <li className="c-info-box__list-item">item-3</li>
          <li className="c-info-box__list-item">item-4</li>
          <li className="c-info-box__list-item">item-5</li>
          <li className="c-info-box__list-item">item-6</li>
          <li className="c-info-box__list-item">item-7</li>
          <li className="c-info-box__list-item">item-8</li>
          <li className="c-info-box__list-item">item-9</li>
          <li className="c-info-box__list-item">item-10</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AddCategoryForm;
