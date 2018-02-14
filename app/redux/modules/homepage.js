/****
 * Constants
 */
export const MONTH_DATA_RECEIVED = 'MONTH_DATA_RECEIVED';

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
    case MONTH_DATA_RECEIVED:
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
      console.error('Un authorized request');
      history.push('/login');
    }
    BaseParams.headers.set('Authorization', `Bearer ${access_token}`);
    const params = { ...BaseParams, method: 'GET' };

    const res = fetch(`${URL}/main`, params)
      .then(res => {
        if (!res.ok && res.status === 401) {
          console.log('trying to refresh token');
        }
        return res.json();
      })
      .then(json => {
        dispatch({ type: MONTH_DATA_RECEIVED, data: json });
      })
      .catch(error => {
        console.error(error);
      });
  };
};
