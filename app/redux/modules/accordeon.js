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
        id: '2018-2-4',
        categories: {
          '3': {
            amount: 23.5,
            label: 'Taxi',
            name: 'taxi'
          },
          '2': {
            amount: 305.5,
            label: 'Clothing',
            name: 'clothing'
          },
          '1': {
            amount: 305.5,
            label: 'Groceries',
            name: 'groceries'
          }
        },
        total: 634.5,
        open: false
      },
      {
        id: '2018-1-4',
        categories: {
          '3': {
            amount: 2305.5,
            label: 'Taxi',
            name: 'taxi'
          },
          '2': {
            amount: 5305.5,
            label: 'Clothing',
            name: 'clothing'
          },
          '1': {
            amount: 1305.5,
            label: 'Groceries',
            name: 'groceries'
          }
        },
        total: 8646.5,
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
