import React from "react";
import PropTypes from "prop-types";

const AddCategoryForm = props => (
  <div className="c-form-container ">
    <form onSubmit={props.addCategoryHandler} className="c-form c-form--login">
      <label htmlFor="name" className="c-form__label">
        Name
      </label>
      <input
        id="name"
        className="c-form__input"
        type="text"
        value={props.nameInput}
        onChange={props.setCategoryName}
        placeholder="Enter new category name"
      />

      <button className="c-button c-button--submit c-button--secondary-color">
        add category
      </button>

      <div className="c-info-box">
        <div className="c-info-box__title">Existing Categories</div>
        <ul className="c-info-box__list">
          {props.categories.map(cat => (
            <li key={cat.id} className="c-info-box__list-item">
              {cat.label}
            </li>
          ))}
        </ul>
      </div>
    </form>
  </div>
);

AddCategoryForm.propTypes = {
  nameInput: PropTypes.string,
  setCategoryName: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
  addCategoryHandler: PropTypes.func.isRequired
};
export default AddCategoryForm;
