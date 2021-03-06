import fetchWithJWT from "../../utils/fetchWithJWT";
import { URL } from "../../config";
/****
 * Constants
 */
export const MONTH_DATA_RECEIVED = "MONTH_DATA_RECEIVED";

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
        id: "0000-00-00",
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

const BaseParams = {
  method: "POST",
  headers: new Headers({ "Content-Type": "application/json" })
};

export const homeDataAction = () => {
  return (dispatch, getState) => {
    const state = getState();

    const params = { ...BaseParams, method: "GET" };

    const res = fetchWithJWT("main", "", params)
      .then(res => {
        if (!res.ok && res.status === 401) {
          console.log("trying to refresh token");
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
