/**
 * @action        : UserActions
 * @description   : Handles actions performed by login users and provide logged in user information
 * @Created by    : smartData
 * @Created       : 26 Jun 2017
 */

import {
  AXIOS_INSTANCE,
  GET_USER_INFO_API,
  MENU_LINK,
  USER_CONST,
} from "./constants";

import { checkHttpStatus, handleLogoutRedirect, parseJSON } from "../utils";

export function resetProps(RESET) {
  return {
    type: RESET,
  };
}
// handle state when request is send and resposen is awaited
export function getRequest(REQUEST) {
  return {
    type: REQUEST,
  };
}

// handle state in case of resposen is success
export function getSuccess(SUCCESS, data) {

  return {
    type: SUCCESS,
    payload: data,
  };
}

// handle state in case of resposen is failure
export function getFailure(FAILURE, error) {
  return {
    type: FAILURE,
    payload: error,
  };
}

/**
 * [getUserInfo - GET - login user information]
 * @return {[api]} [/users]
 */
export function getUserInfo(token) {
  return function (dispatch) {

    dispatch(getRequest(USER_CONST.GET_USER_INFO_REQUEST));

    let config = { "headers": { "Authorization": token } };

    AXIOS_INSTANCE.get(GET_USER_INFO_API, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(function (success) {

        dispatch(getSuccess(USER_CONST.GET_USER_INFO_SUCCESS, {
          response: {
            statusCode: 200,
            statusText: null,
            data: success.data,
          },
        }));
      })
      .catch(function (error) {
        console.log("error - ", error);
        dispatch(handleLogoutRedirect);

      });
  };
}

export function saveUserInfo(token, formData) {

  return function (dispatch) {

    dispatch(getRequest(USER_CONST.SAVE_USER_INFO_REQUEST));

    let config = { "headers": { "Authorization": token } };
    let postObj = {
      "data": {
        "type": "users",
        "attributes": formData,
      }
    };
    AXIOS_INSTANCE.put(GET_USER_INFO_API, postObj, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(function (success) { // console.log(success.data.attributes);


        dispatch(getSuccess(USER_CONST.SAVE_USER_INFO_SUCCESS, {
          response: {
            statusCode: 200,
            statusText: null,
            data: success.data,
          },
        }));
        dispatch(getSuccess(USER_CONST.GET_USER_INFO_SUCCESS, {
          response: {
            statusCode: 200,
            statusText: null,
            data: success.data,
          },
        }));
      })
      .catch(function (error) {
        console.log("error - ", error.response.data.errors);
        if (error.response.status === 500 || error.response.status === 422) {
          dispatch(getFailure(USER_CONST.SAVE_USER_INFO_FAILURE, {
            response: {
              statusCode: error.response.status,
              statusText: (error.response && error.response.data && error.response.data.errors[0]) ? error.response.data.errors[0] : null,
            },
          }));
        } else {
          dispatch(handleLogoutRedirect);
        }

      });
  };
}
export function getURL(SUCCESS, link) {
  return {
    type: SUCCESS,
    payload: link,
  };
}

// export function percentageCalculator() {
//   return function(dis)
// }

export function getActiveLink() { // console.log('aaaaaaaaa---');
  return function (dispatch) {

    dispatch(getURL(MENU_LINK.UPDATE_ACTIVE_LINK, "about-me"));
  };
}

export function resetFormVar() { // console.log('aaaaaaaaa---');
  return function (dispatch) {
    dispatch(resetProps(USER_CONST.RESET_USER_INFO, "about-me"));
  };
}
