import { MONTH_DATA_RECEIVED } from './homepage';
import { omit } from 'ramda';

/**
 * constants
 */
export const TOGGLE_ACCORDEON_ITEM = 'TOGGLE_ACCORDEON_ITEM';
export const POPULATE_ACCDORDEON_TABS = 'POPULATE_ACCDORDEON_TABS';

/**
 * action creators
 */
export const toggleAccordeonItem = id => ({
  type: TOGGLE_ACCORDEON_ITEM,
  id
});

export const populateAccordeonTabs = months => ({
  type: POPULATE_ACCDORDEON_TABS,
  months
});

/**
 * Heroes
 */

/**
 * reducer
 */
export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_ACCORDEON_ITEM:
      if (state[action.id]) {
        return omit([action.id], state);
      }
      return {
        ...state,
        [action.id]: true
      };

    default:
      return state;
  }
};

/**
 * epics
 */
