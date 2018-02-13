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
export const clearAddCategoryForm = { type: CLEAR_ADD_CATEGORY_FORM };
export const getCategories = { type: GET_CATEGORIES };

export const categoryAdded = data => ({
  type: CATEGORY_ADDED,
  category: data
});
export const addCategoryError = error => ({
  type: ADD_CATEGORY_ERROR,
  error
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
    case CATEGORY_ADDED:
      return { ...state, categories: [...state.categories, action.category] };
    case CLEAR_ADD_CATEGORY_FORM:
      return { ...state, nameInput: '' };

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
  headers: new Headers({ 'Content-Type': 'application/json' }),
  mode: 'cors'
};

export const getCategoriesAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      throw new Error('Un authorized request');
      history.push('/login');
    }
    BaseParams.headers.set('Authorization', `Bearer ${access_token}`);
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
      history.push('/login');
      //throw new Error('Un authorized request');
    }
    BaseParams.headers.set('Authorization', `Bearer ${access_token}`);
    const params = {
      ...BaseParams,
      body: JSON.stringify({
        label: state.categories.nameInput
      })
    };

    const res = fetch(`${URL}/category`, params)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(json => {
        dispatch({ type: CATEGORY_ADDED, category: json });
        dispatch({ type: CLEAR_ADD_CATEGORY_FORM });
        //history.push('/');
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: ADD_CATEGORY_ERROR,
          error
        });
      });
  };
};
