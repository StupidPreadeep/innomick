/**
 * @action        : RESEARCHERsActions
 * @description   : Handles RESEARCHER actions
 * @Created by    : smartData
 */

import {
  AXIOS_INSTANCE,
  FACILITIES_CONST,
  GET_ABOUT_ME_API,
  GET_MYELOMA_API,
  GET_MYELOMA_CENTERS_API,
  RESEARCHER_CONST,
  RESEARCHER_FACILITIES_API,

} from "./constants";
import { getTooltip } from "./miscActions.js";
import { checkHttpStatus, parseJSON } from "../utils";
import Alert from "react-s-alert";
import base64 from "base-64";
import { browserHistory } from "react-router";
// import Cookies from "js-cookie";

import moment from "moment";

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

// handle state in case of resposen is success
export function getValue(VALUE, data) {
  return {
    type: VALUE,
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
export function reset(RESET) {
  return {
    type: RESET,
  };
}

export function resetResearcher(token) {
  return (dispatch) => {
    dispatch(reset(RESEARCHER_CONST.RESEARCHER_RESET));
  };
}

/**
 * [getResearcherInfo - get RESEARCHER information]
 * @param  {[type]} token [access token]
 * @return {[type]}       [description]
 */
export function getResearcherInfo(token) {
  return (dispatch) => {

    dispatch(getRequest(RESEARCHER_CONST.GET_RESEARCHER_INFO_REQUEST));
    let config = { "headers": { "Authorization": token } };

    AXIOS_INSTANCE.get(GET_ABOUT_ME_API, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {

        if (success.meta && success.meta.tooltips) {
          let tooltip = success.meta.tooltips;
          dispatch(getTooltip(tooltip));
        }

        let researcherAttributes = success.data[0].attributes;

        let researcherId = success.data[0].id;
        researcherAttributes["id"] = researcherId;
        dispatch(getSuccess(RESEARCHER_CONST.GET_RESEARCHER_INFO_SUCCESS, researcherAttributes));
      })
      .catch((error) => {
        dispatch(getFailure(RESEARCHER_CONST.GET_RESEARCHER_INFO_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };
}

/**
 * [saveResearcherInfo - save and update RESEARCHER"s basic information - About me page]
 * @param  {[type]} token       [access token]
 * @param  {[type]} formData    [first_name, last_name, gender etc.]
 * @param  {[type]} researcherInfo [for already saved RESEARCHER data - to update RESEARCHER]
 * @param  {[type]} userId      [login user's id]
 * @return {[type]}             [description]
 */
export function saveResearcherInfo(token, data, researcherInfo, userId) {
  console.log("researcher", researcherInfo, token, data, userId);
  return (dispatch) => {
    dispatch(getRequest(RESEARCHER_CONST.SAVE_RESEARCHER_INFO_REQUEST));
    let config = { "headers": { "Authorization": token } };
    let postData = {};
    if (researcherInfo.id) {
      postData = {
        data: {
          type: "researchers",
          id: (researcherInfo.id),
          attributes: data,
          "relationships": {
            "user": {
              "data": { type: "users", id: userId },
            },
          },
        },
      };
    } else {
      postData = {
        data: {
          type: "researchers",
          id: (researcherInfo.id),
          attributes: data,
          "relationships": {
            "user": {
              "data": { type: "users", id: userId },
            },
          },
        },
      };
    }
    let APICALL = userId ? AXIOS_INSTANCE.put(`${GET_ABOUT_ME_API}/${researcherInfo.id}`, postData, config) : AXIOS_INSTANCE.post(GET_ABOUT_ME_API, postData, config);
    APICALL.then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {


        dispatch(getSuccess(RESEARCHER_CONST.SAVE_RESEARCHER_INFO_SUCCESS, {
          response: {
            statusCode: 200,
            statusText: null,
            data: success.data,
          },
        }));

      })
      .catch((error) => {
        console.log("error - ", error);
        dispatch(getFailure(RESEARCHER_CONST.SAVE_RESEARCHER_INFO_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };
}

/**
 * [getMyelomaCenters - get myeloma centers based on zipcode]
 * @param  {[type]} token   [access token]
 * @param  {[type]} zipcode [description]
 * @return {[type]}         [description]
 */
export function getMyelomaCenters(token, zipcode) {
  return (dispatch) => {
    dispatch(getRequest(RESEARCHER_CONST.GET_MYELOMA_CENTERS_REQUEST));
    let config = { "headers": { "Authorization": token } };

    let axios = (zipcode) ? AXIOS_INSTANCE.get(`${GET_MYELOMA_CENTERS_API}?filter[zipcode]=${zipcode}`, config)
      : AXIOS_INSTANCE.get(`${GET_MYELOMA_CENTERS_API}`, config);
    axios.then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(RESEARCHER_CONST.GET_MYELOMA_CENTERS_SUCCESS, success.data));
      })
      .catch((error) => {
        console.log("error", error);
        if (error.response && error.response.status === 422) {

          dispatch(getFailure(RESEARCHER_CONST.GET_MYELOMA_CENTERS_FAILURE, {
            response: {
              statusCode: 422,
              statusText: null,
            },
          }));
        } else {
          dispatch(getFailure(RESEARCHER_CONST.GET_MYELOMA_CENTERS_FAILURE, {
            response: {
              statusCode: 403,
              statusText: null,
            },
          }));
        }

      });
  };
}

export function resetMyelomaCenters() {
  return (dispatch) => {
    // dispatch(reset(RESEARCHER_CONST.RESET_NOT_A_US_CITIZEN));
  };
}

/**
 * [getResearcherFacilities - get RESEARCHER facililities]
 * @param  {[type]} token [access token]
 * @return {[type]}       [description]
 */
export function getResearcherFacilities(token) {
  return (dispatch) => {

    dispatch(getRequest(RESEARCHER_CONST.GET_RESEARCHER_FACILITIES_REQUEST));
    let config = { "headers": { "Authorization": token } };

    AXIOS_INSTANCE.get(RESEARCHER_FACILITIES_API, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(RESEARCHER_CONST.GET_RESEARCHER_FACILITIES_SUCCESS, success.data));
      })
      .catch((error) => {
        dispatch(getFailure(RESEARCHER_CONST.GET_RESEARCHER_FACILITIES_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };
}
