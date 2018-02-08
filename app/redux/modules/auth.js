import history from '../../index';

/**
 * constants
 */
export const AUTHENTICATED = 'AUTHENTICATED';
export const UNAUTHENTICATED = 'UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_FULLNAME = 'SET_FULLNAME';
export const SET_CONFIRM = 'SET_CONFIRM';
export const CLEAR_AUTH_FORMS_DATA = 'CLEAR_AUTH_FORMS_DATA';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGOUT = 'LOGOUT';

/**
 * action creators
 */
export const authenticated = { type: AUTHENTICATED };
export const unauthenticated = { type: UNAUTHENTICATED };
export const authError = error => ({
  type: AUTHENTICATION_ERROR,
  payload: error
});
export const registerError = error => ({
  type: REGISTER_ERROR,
  payload: error
});
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
    emailInput: '',
    passwordInput: '',
    fullNameInput: '',
    confirmInput: '',
    authenticated: false
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
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case REGISTER_ERROR:
      return { ...state, error: action.payload };
    case SET_EMAIL:
      return { ...state, emailInput: action.value };
    case SET_PASSWORD:
      return { ...state, passwordInput: action.value };
    case SET_CONFIRM:
      return { ...state, confirmInput: action.value };
    case SET_FULLNAME:
      return { ...state, fullNameInput: action.value };
    case CLEAR_AUTH_FORMS_DATA:
      return { ...state, emailInput: '', passwordInput: '' };

    default:
      return state;
  }
};

// Undiscovered heroes
export const logoutRemoveTokens = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  console.log('logging out');

  history.push('/');
};

/**
 * epics
 */
const URL = 'http://localhost:5000';
const BaseParams = {
  method: 'POST',
  headers: new Headers({ 'Content-Type': 'application/json' })
};

export const loginAction = () => {
  return (dispatch, getState) => {
    const state = getState();
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
        localStorage.setItem('access_token', json.access_token);
        localStorage.setItem('refresh_token', json.refresh_token);
        history.push('/');
      })
      .catch(error => {
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'Auth general error'
        });
      });
  };
};

export const registerAction = () => {
  console.log('register first level');
  return (dispatch, getState) => {
    const state = getState();

    const params = {
      ...BaseParams,
      body: JSON.stringify({
        email: state.auth.emailInput,
        password: state.auth.passwordInput,
        fullname: state.auth.fullNameInput,
        confirm: state.auth.confirmInput
      })
    };
    console.log('before fetching');
    // debugger;
    const res = fetch(`${URL}/register`, params)
      .then(res => {
        console.log('before checking ok');
        if (!res.ok) {
          throw new Error(res.status);
        }
        // debugger;
        return res.json();
      })
      .then(json => {
        console.log(json);
        console.log('this is register');
        dispatch({ type: AUTHENTICATED });
        dispatch({ type: CLEAR_AUTH_FORMS_DATA });
        localStorage.setItem('access_token', json.access_token);
        localStorage.setItem('refresh_token', json.refresh_token);
        history.push('/');
      })
      .catch(error => {
        dispatch({
          type: REGISTER_ERROR,
          payload: 'Email or password already exists'
        });
      });
  };
};
