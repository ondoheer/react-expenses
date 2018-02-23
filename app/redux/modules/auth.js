import history from "../../index";
import { requestError, requestsErrorMap, CLEAR_ERROR } from "./errors";
import { URL } from "../../config";

/**
 * constants
 */
export const AUTHENTICATED = "AUTHENTICATED";
export const UNAUTHENTICATED = "UNAUTHENTICATED";

export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_FULLNAME = "SET_FULLNAME";
export const SET_CONFIRM = "SET_CONFIRM";
export const CLEAR_AUTH_FORMS_DATA = "CLEAR_AUTH_FORMS_DATA";

export const LOGOUT = "LOGOUT";

/**
 * action creators
 */
export const authenticated = { type: AUTHENTICATED };
export const unauthenticated = { type: UNAUTHENTICATED };

export const clearAuthFormsData = {
  type: CLEAR_AUTH_FORMS_DATA
};
export const logout = { type: LOGOUT };

export const setEmail = value => ({
  type: SET_EMAIL,
  value
});

export const setPassword = value => ({
  type: SET_PASSWORD,
  value
});

export const setFullName = value => ({
  type: SET_FULLNAME,
  value
});

export const setConfirm = value => ({
  type: SET_CONFIRM,
  value
});

/**
 * reducer
 */
export default (
  state = {
    emailInput: "",
    passwordInput: "",
    fullNameInput: "",
    confirmInput: ""
  },
  action
) => {
  switch (action.type) {
    case AUTHENTICATED:
      return state;
    case UNAUTHENTICATED:
      return state;
    case LOGOUT:
      return state;

    case SET_EMAIL:
      return { ...state, emailInput: action.value };
    case SET_PASSWORD:
      return { ...state, passwordInput: action.value };
    case SET_CONFIRM:
      return { ...state, confirmInput: action.value };
    case SET_FULLNAME:
      return { ...state, fullNameInput: action.value };
    case CLEAR_AUTH_FORMS_DATA:
      return { ...state, emailInput: "", passwordInput: "" };

    default:
      return state;
  }
};

/**
 *  Undiscovered heroes
 */
export const logoutRemoveTokens = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  console.log(`this is the current window location ${window.location}`);
  history.push("/login");
  console.log(`this is the current window location ${window.location}`);
};

/**
 * epics
 */

const BaseParams = {
  method: "POST",
  headers: new Headers({ "Content-Type": "application/json" })
  // method: "cors"
};

export const loginAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    // clear the errors bucket
    dispatch({ type: CLEAR_ERROR });

    const params = {
      ...BaseParams,
      body: JSON.stringify({
        email: state.auth.emailInput,
        password: state.auth.passwordInput
      })
    };
    const res = fetch(`${URL}/login`, params)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(json => {
        dispatch({ type: AUTHENTICATED });
        dispatch({ type: CLEAR_AUTH_FORMS_DATA });
        localStorage.setItem("access_token", json.access_token);
        localStorage.setItem("refresh_token", json.refresh_token);
        // console.log("from login before pushing new route");
        // console.log(`this is the current window location ${window.location}`);

        history.push("/main");
        // window.location = "/"; // HAACK
        // console.log("from login after pushing new route");
        // console.log(`this is the current window location ${window.location}`);
      })
      .catch(error => {
        dispatch(requestError(requestsErrorMap[error.message]));
      });
  };
};

export const registerAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    // clear the errors bucket
    dispatch({
      type: CLEAR_ERROR
    });

    const params = {
      ...BaseParams,
      body: JSON.stringify({
        email: state.auth.emailInput,
        password: state.auth.passwordInput,
        fullname: state.auth.fullNameInput,
        confirm: state.auth.confirmInput
      })
    };

    // clean the error pool

    // debugger;
    const res = fetch(`${URL}/register`, params)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }

        return res.json();
      })
      .then(json => {
        dispatch({
          type: AUTHENTICATED
        });

        localStorage.setItem("access_token", json.access_token);
        localStorage.setItem("refresh_token", json.refresh_token);
        console.log("from login before pushing new route");
        console.log(`this is the current history location ${history}`);
        console.log(history);
        const prevHistory = { ...history };
        console.log(prevHistory);
        history.push("/main");
        console.log("from login after pushing new route");
        console.log(`this is the current history location ${history}`);
        const lastHistory = { ...history };
        console.log(lastHistory);
      })
      .catch(error => {
        console.error(error.message);

        dispatch(requestError(requestsErrorMap[error.message]));
      });
  };
};
