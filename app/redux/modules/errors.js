import { omit } from "ramda";
/**
 * Constants
 */

export const REQUEST_ERROR = "REQUEST_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

/**
 * Action creators
 */

export const requestError = error => ({
  type: REQUEST_ERROR,
  error
});

/**
 * Reducer
 */
export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ERROR:
      return { ...state, error: action.error };
    case CLEAR_ERROR:
      return omit(["error"], state);
    default:
      return state;
  }
};

/**
 * Heroes
 */

export const requestsErrorMap = {
  409: "Resource already exists",
  400: "Bad Request, data you send was invalid",
  500: "Server error, blame Pedro!"
};
