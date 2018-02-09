/**
 * constants
 */
export const TOGGLE_ACCORDEON_ITEM = 'TOGGLE_ACCORDEON_ITEM';

/**
 * action creators
 */
export const toggleAccordeonItem = index => ({
  type: TOGGLE_ACCORDEON_ITEM,
  index: index
});

/**
 * reducer
 */
export default (
  state = {
    months: [
      {
        open: false
      }
    ]
  },
  action
) => {
  if (action.type === TOGGLE_ACCORDEON_ITEM) {
    return {
      ...state,
      months: state.months.map((month, index) => {
        if (index === action.index) {
          return {
            ...month,
            open: !month.open
          };
        }
        return month;
      })
    };
  }
  return state;
};

/**
 * epics
 */
// export const getFooEpic = () => dispatch => {
//   console.log(dispatch);

//   fetch('me.com')
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }

//       throw new Error(res.statusCode);
//     })
//     .then(result => {
//       dispatch(getFooSuccess(result));
//     })
//     .catch(err => {
//       console.error('ERROR', err);
//       dispatch(getFooError(err));
//     });
// };
