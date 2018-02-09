import React from 'react';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';

import HeaderNav from '../../components/partials/HeaderNav';
import AddCategoryForm from '../../components/forms/AddCategoryForm';

import { logoutRemoveTokens } from '../../redux/modules/auth';

import {
  setCategoryName,
  getCategoriesAction,
  addCategoryAction
} from '../../redux/modules/categories';

const mapStateToProps = state => ({
  nameInput: state.categories.nameInput,
  categories: state.categories.categories,
  logoutRemoveTokens: logoutRemoveTokens
});

const mapDispatchToProps = dispatch => {
  return {
    setCategoryName: evt => {
      dispatch(setCategoryName(evt.target.value));
    },
    getCategories: () => {
      dispatch(getCategoriesAction());
    },
    addCategoryHandler: evt => {
      evt.preventDefault();
      dispatch(addCategoryAction());
    }
  };
};

const AddCategoryContainer = props => (
  <div className="home-container">
    <HeaderNav logoutRemoveTokens={props.logoutRemoveTokens} />
    <AddCategoryForm
      categories={props.categories}
      setCategoryName={props.setCategoryName}
      addCategoryHandler={props.addCategoryHandler}
    />
  </div>
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.getCategories();
    }
  })
)(AddCategoryContainer);
