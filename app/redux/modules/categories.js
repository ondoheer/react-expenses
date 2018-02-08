import history from '../../index';

/**
 * constants
 */

export const ADD_CATEGORY_NAME = 'ADD_CATEGORY_NAME';
export const CATEGORY_ADDED = 'CATEGORY_ADDED';
export const CLEAR_ADD_CATEGORY_FORM = 'CLEAR_ADD_CATEGORY_FORM';
export const ADD_CATEGORY_ERROR = 'ADD_CATEGORY_ERROR';

export const GET_CATEGORIES = 'GET_CATEGORIES';
/**
 * action creators
 */
export const categoryAdded = { type: CATEGORY_ADDED };
export const clearAddCategoryForm = { type: CLEAR_ADD_CATEGORY_FORM };
export const getCategories = { type: GET_CATEGORIES };

export const addCategoryError = error => ({
  type: ADD_CATEGORY_ERROR,
  payload: error
});
export const setCategoryName = value => ({
  type: ADD_CATEGORY_NAME,
  value
});

/**
 * reducer
 */

export default (
  state = {
    nameInput: '',
    categories: []
  },
  action
) => {
  switch (action.type) {
    case ADD_CATEGORY_NAME:
      return { ...state, nameInput: action.value };
    case GET_CATEGORIES:
      return { ...state, categories: action.data };

    default:
      return state;
  }
};

/**
 * epics
 */
const URL = 'http://localhost:5000';
const BaseParams = {
  method: 'POST',
  headers: new Headers({ 'Content-Type': 'application/json' })
};

export const getCategoriesAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      throw new Error('Un authorized request');
      history.push('/login');
    }
    BaseParams.headers.append('Authorization', `Bearer ${access_token}`);
    const params = {
      ...BaseParams,
      method: 'GET'
    };
    const res = fetch(`${URL}/category`, params)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error fetching categories');
        }
        return res.json();
      })
      .then(json => {
        dispatch({
          type: GET_CATEGORIES,
          data: json
        });
      })
      .catch(error => {
        throw new Error(error.status);
      });
  };
};

export const addCategoryAction = () => {
  return (dispatch, getState) => {
    const state = getState();

    const access_token = localStorage.getItem('access_token');

    if (!access_token) {
      throw new Error('Un authorized request');
      history.push('/login');
    }
    BaseParams.headers.append('Authorization', `Bearer ${access_token}`);
    const params = {
      ...BaseParams,
      body: JSON.stringify({
        name: state.expenses.nameInput,
        amount: state.expenses.amountInput,
        category_id: 1
      })
    };

    const res = fetch(`${URL}/expense`, params)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(json => {
        dispatch({ type: EXPENSE_ADDED });
        dispatch({ type: CLEAR_ADD_EXPENSE_FORM });
        history.push('/');
      })
      .catch(error => {
        dispatch({
          type: ADD_EXPENSE_ERROR,
          payload: error
        });
      });
  };
};
