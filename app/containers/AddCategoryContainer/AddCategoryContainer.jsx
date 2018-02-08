import React from 'react';
import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';

import HeaderNav from '../../components/partials/HeaderNav';
import AddCategoryForm from '../../components/forms/AddCategoryForm';

import {
  setCategoryName,
  getCategoriesAction
} from '../../redux/modules/categories';

const mapStateToProps = state => ({
  nameInput: state.categories.nameInput,
  categories: state.categories.categories
});

const mapDispatchToProps = dispatch => {
  return {
    setCategoryName: evt => {
      dispatch(setCategoryName(evt.target.value));
    },
    getCategories: () => {
      dispatch(getCategoriesAction());
    }
  };
};

const AddCategoryContainer = props => (
  <div className="home-container">
    <HeaderNav />
    <AddCategoryForm
      categories={props.categories}
      setCategoryName={setCategoryName}
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
