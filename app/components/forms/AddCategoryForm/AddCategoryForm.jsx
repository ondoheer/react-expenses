import React from 'react';

const AddCategoryForm = props => (
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
          {props.categories.map(cat => (
            <li key={cat.id} className="c-info-box__list-item">
              {cat.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default AddCategoryForm;
