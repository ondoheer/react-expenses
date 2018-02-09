/****
 * Constants
 */
const GET_MAIN_DATA = 'GET_MAIN_DATA';

/**
 * action creators
 */

/**
 * Reducer
 */

export default (
  state = {
    months: [
      {
        id: '0000-00-00',
        categories: []
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case GET_MAIN_DATA:
      return { ...state, months: action.data };
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

export const homeDataAction = () => {
  return (dispatch, getState) => {
    const state = getState();

    const access_token = localStorage.getItem('access_token');

    if (!access_token) {
      throw new Error('Un authorized request');
      history.push('/login');
    }
    BaseParams.headers.set('Authorization', `Bearer ${access_token}`);
    const params = { ...BaseParams, method: 'GET' };

    const res = fetch(`${URL}/main`, params)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(json => {
        dispatch({ type: GET_MAIN_DATA, data: json });
      })
      .catch(error => {
        throw new Error(error.status);
      });
  };
};
