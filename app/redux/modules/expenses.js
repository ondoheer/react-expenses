import history from "../../index";
import fetchWithJWT from "../../utils/fetchWithJWT";
/**
 * constants
 */

export const ADD_EXPENSE_NAME = "ADD_EXPENSE_NAME";
export const ADD_EXPENSE_AMOUNT = "ADD_EXPENSE_AMOUNT";
export const SELECT_EXPENSE_CATEGORY = "SELECT_EXPENSE_CATEGORY";
export const EXPENSE_ADDED = "EXPENSE_ADDED";
export const CLEAR_ADD_EXPENSE_FORM = "CLEAR_ADD_EXPENSE_FORM";
export const ADD_EXPENSE_ERROR = "ADD_EXPENSE_ERROR";
export const GET_LAST_EXPENSE = "GET_LAST_EXPENSE";
export const GET_FILTERED_EXPENSES = "GET_FILTERED_EXPENSES";
export const SET_SEARCH_INPUT = "SET_SEARCH_INPUT";
export const SET_PAGE = "SET_PAGE";
export const INCREASE_PAGE = "INCREASE_PAGE";
export const DECREASE_PAGE = "DECREASE_PAGE";

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

export const filterExpenses = value => ({
  type: GET_FILTERED_EXPENSES,
  value
});

export const setSearchInput = value => ({
  type: SET_SEARCH_INPUT,
  value
});

export const setPage = value => ({
  type: SET_PAGE,
  value
});

export const increasePage = {
  type: INCREASE_PAGE
};
export const decreasePage = {
  type: DECREASE_PAGE
};

/**
 * reducer
 */

export default (
  state = {
    nameInput: "",
    amountInput: "",
    categoryInput: "",
    lastExpense: "",
    searchInput: "",
    perPage: 10,
    page: 1,
    expenses: {
      has_prev: false,
      has_next: false,
      next_num: null,
      prev_num: null,
      pages: 1,
      expenses: []
    }
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
      return { ...state, lastExpense: action.data.expenses[0] };
    case GET_FILTERED_EXPENSES:
      return { ...state, expenses: action.data };
    case SET_SEARCH_INPUT:
      return { ...state, searchInput: action.value };
    case SET_PAGE:
      return { ...state, page: action.value };
    case INCREASE_PAGE:
      return { ...state, page: state.page + 1 };
    case DECREASE_PAGE:
      return { ...state, page: state.page - 1 };
    default:
      return state;
  }
};

/**
 * epics
 */
const URL = "http://localhost:5000";
const BaseParams = {
  method: "POST",
  headers: new Headers({ "Content-Type": "application/json" })
};

/**
 * GETS THET LAST EXPENSE
 */
export const getLastExpense = () => {
  return (dispatch, getState) => {
    const state = getState();

    const params = {
      ...BaseParams,
      method: "GET"
    };
    const QUERY_ARGS = "?last=true";

    const res = fetchWithJWT("expense", QUERY_ARGS, params)
      .then(res => {
        if (!res.ok) {
          console.error(res.status);
        }
        return res.json();
      })
      .then(json => {
        dispatch({ type: GET_LAST_EXPENSE, data: json });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

/**
 * GETS THE EXPENSES USING QUERY PARAMETERS
 */
export const getFilteredExpenses = () => {
  return (dispatch, getState) => {
    const state = getState();

    const params = { ...BaseParams, method: "GET" };
    const QUERY_ARGS = `?page=${state.expenses.page}&per_page=${
      state.expenses.perPage
    }&search=${state.expenses.searchInput}`;
    // debugger;
    const res = fetchWithJWT("expense", QUERY_ARGS, params)
      .then(res => {
        if (!res.ok) {
          console.error(res.status);
        }
        return res.json();
      })
      .then(json => {
        dispatch({ type: GET_FILTERED_EXPENSES, data: json });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

/**
 * GET NEXT PAGE
 */
export const getNextPage = () => {
  return dispatch => {
    dispatch(increasePage);
    dispatch(getFilteredExpenses());
  };
};

/**
 * GET PREVIOUS PAGE
 */
export const getPreviousPage = () => {
  return dispatch => {
    dispatch(decreasePage);
    dispatch(getFilteredExpenses());
  };
};

/**
 * ADDS A NEW EXPENSE
 */
export const addExpenseAction = () => {
  return (dispatch, getState) => {
    const state = getState();

    const params = {
      ...BaseParams,
      body: JSON.stringify({
        name: state.expenses.nameInput,
        amount: state.expenses.amountInput,
        category_id: state.expenses.categoryInput
      })
    };

    const res = fetchWithJWT("expense", "", params)
      .then(res => {
        if (!res.ok) {
          console.error(res.status);
        }
        return res.json();
      })
      .then(json => {
        dispatch({ type: EXPENSE_ADDED });
        dispatch({ type: CLEAR_ADD_EXPENSE_FORM });
        history.push("/");
      })
      .catch(error => {
        dispatch({
          type: ADD_EXPENSE_ERROR,
          payload: error
        });
      });
  };
};
