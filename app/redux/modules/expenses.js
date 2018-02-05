/**
 * constants
 */
export const INC_COUNT = 'INC_COUNT';
export const GET_FOO = 'GET_FOO';


/**
 * action creators
 */
export const incCount = () => ({ type: INC_COUNT });
export const getFoo = () => ({ type: GET_FOO });
export const getFooSuccess = (result) => ({ type: 'FETCH_SUCCESS', result });
export const getFooError = (error) => ({ type: 'FETCH_ERROR', error, });


/**
 * reducer
 */
export default (
  state = {
    count: 0,
    fooStatus: 'complete',
  },
  action
) => {
  if (action.type === INC_COUNT) {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === GET_FOO) {
    return {
      ...state,
      fooStatus: 'pending',
    };
  }

  return state;
};

/**
 * epics
 */
export const getFooEpic = () => (dispatch) => {
  console.log(dispatch);
  dispatch(getFoo());

  fetch('me.com')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(res.statusCode);
    })
    .then((result) => {
      dispatch(getFooSuccess(result));
    })
    .catch((err) => {
      console.error('ERROR', err);
      dispatch(getFooError(err));
    });
};

