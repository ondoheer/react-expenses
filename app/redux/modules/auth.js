/**
 * constants
 */
export const AUTHENTICATED = 'AUTHENTICATED';
export const UNAUTHENTICATED = 'UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const CLEAR_AUTH_FORMS_DATA = 'CLEAR_AUTH_FORMS_DATA';

/**
 * action creators
 */
export const authenticated = { type: AUTHENTICATED };
export const unauthenticated = { type: UNAUTHENTICATED };
export const authError = error => ({
  type: AUTHENTICATION_ERROR,
  payload: error
});
export const clearAuthFormsData = {
  type: CLEAR_AUTH_FORMS_DATA
};

export const setEmail = value => ({
  type: SET_EMAIL,
  value
});

export const setPassword = value => ({
  type: SET_PASSWORD,
  value
});

/**
 * reducer
 */
export default (
  state = {
    emailInput: '',
    passwordInput: '',
    authenticated: false
  },
  action
) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case SET_EMAIL:
      return { ...state, emailInput: action.value };
    case SET_PASSWORD:
      return { ...state, passwordInput: action.value };
    case CLEAR_AUTH_FORMS_DATA:
      return { ...state, emailInput: '', passwordInput: '' };
    default:
      return state;
  }
};

/**
 * epics
 */
const URL = 'http://localhost:5000';

export const loginAction = () => {
  return (dispatch, getState) => {
    const state = getState();
    const params = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        email: state.auth.emailInput,
        password: state.auth.passwordInput
      }),
      headers: new Headers({ 'Content-Type': 'application/json' })
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
        window.location = '/';
      })
      .catch(error => {
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'Invalid email or password'
        });
      });
  };
};
