import history from '../../index';

/**
 * constants
 */

export const ADD_EXPENSE_NAME = 'ADD_EXPENSE_NAME';
export const ADD_EXPENSE_AMOUNT = 'ADD_EXPENSE_AMOUNT';
export const SELECT_EXPENSE_CATEGORY = 'SELECT_EXPENSE_CATEGORY';
export const EXPENSE_ADDED = 'EXPENSE_ADDED';
export const CLEAR_ADD_EXPENSE_FORM = 'CLEAR_ADD_EXPENSE_FORM';
export const ADD_EXPENSE_ERROR = 'ADD_EXPENSE_ERROR';
export const GET_LAST_EXPENSE = 'GET_LAST_EXPENSE';

/**
 * action creators
 */
export const expenseAdded = { type: EXPENSE_ADDED };
export const clearAddExpenseForm = { type: CLEAR_ADD_EXPENSE_FORM };
export const addExpenseError = error => ({
  type: ADD_EXPENSE_ERROR,
  payload: error
});
export const setExpenseName = value => ({
  type: ADD_EXPENSE_NAME,
  value
});

export const setExpenseAmount = value => ({
  type: ADD_EXPENSE_AMOUNT,
  value
});

export const setExpenseCategory = value => ({
  type: SELECT_EXPENSE_CATEGORY,
  value
});

/**
 * reducer
 */

export default (
  state = {
    nameInput: '',
    amountInput: '',
    categoryInput: '',
    lastExpense: ''
  },
  action
) => {
  switch (action.type) {
    case ADD_EXPENSE_AMOUNT:
      return { ...state, amountInput: action.value };
    case ADD_EXPENSE_NAME:
      return { ...state, nameInput: action.value };
    case SELECT_EXPENSE_CATEGORY:
      return { ...state, categoryInput: action.value };
    case GET_LAST_EXPENSE:
      return { ...state, lastExpense: action.data };
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

export const getLastExpense = () => {
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
    const QUERY_ARGS = '?last=true';

    const res = fetch(`${URL}/expense${QUERY_ARGS}`, params)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(json => {
        dispatch({ type: GET_LAST_EXPENSE, data: json });
      })
      .catch(error => {
        throw new Error(error);
      });
  };
};

export const addExpenseAction = () => {
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
