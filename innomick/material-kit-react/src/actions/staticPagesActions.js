/**
 * @action        : Health History Actions
 * @description   : Handles all the actions that are related to health history
 * @Created by    : smartData
 */
import { AXIOS_INSTANCE, GET_ABOUT_ME_API, HIDE_START_MODAL, HOME_CONTENT_API, RESEARCHER_CONST, SPARKCURES_TRIAL } from "./constants";
// import { changeProfileComplete, changeSurvey } from "./miscActions.js";
import { checkHttpStatus, parseJSON } from "../utils";
import Alert from "react-s-alert";
import { browserHistory } from "react-router";
import { userInterest } from "./miscActions.js";

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

// actiont to get dynamic listing of all the options of the my health history
export function getConsentFormRequest(token = null) {
  return (dispatch) => {

    dispatch(getRequest(RESEARCHER_CONST.CONSENT_FORM_REQUEST));
    let config = { "headers": { "Authorization": token } };
    AXIOS_INSTANCE.get(`${HOME_CONTENT_API}?filter[slug]=consent-form`, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(RESEARCHER_CONST.CONSENT_FORM_SUCCESS, success.data));
      })
      .catch((error) => {
        dispatch(getFailure(RESEARCHER_CONST.CONSENT_FORM_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };
}

// hide get started modal
export function hideGetStartedModal(token, saveObj) {
  let config = { "headers": { "Authorization": token } };
  return (dispatch) => {
    let postData = { data: saveObj };
    // dispatch(getRequest(RESEARCHER_CONST.MODAL_CLOSE_REQUEST));
    AXIOS_INSTANCE.put(HIDE_START_MODAL, postData, config)
      .then((success) => {

        dispatch(getSuccess(RESEARCHER_CONST.MODAL_CLOSE_SUCCESS, success.data));
      })
      .catch((error) => {
        // dispatch(getFailure(RESEARCHER_CONST.MODAL_CLOSE_FAILURE, {
        //   // response: {
        //   //   statusCode: 403,
        //   //   statusText: null,
        //   // }
        // }));
      });
  };
}



// actiont to get dynamic listing of all the options of the my health history
export function getPrivacyPolicy(token = null) {
  return (dispatch) => {

    dispatch(getRequest(RESEARCHER_CONST.PRIVACY_POLICY_REQUEST));
    let config = { "headers": { "Authorization": token } };

    AXIOS_INSTANCE.get(`${HOME_CONTENT_API}?filter[slug]=privacy-policy`, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(RESEARCHER_CONST.PRIVACY_POLICY_SUCCESS, success.data));
      })
      .catch((error) => {
        dispatch(getFailure(RESEARCHER_CONST.PRIVACY_POLICY_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };
}

export function getTermsOfUse(token = null) {
  return (dispatch) => {

    dispatch(getRequest(RESEARCHER_CONST.PRIVACY_POLICY_REQUEST));
    let config = { "headers": { "Authorization": token } };

    AXIOS_INSTANCE.get(`${HOME_CONTENT_API}?filter[slug]=terms-of-use`, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(RESEARCHER_CONST.PRIVACY_POLICY_SUCCESS, success.data));
      })
      .catch((error) => {
        dispatch(getFailure(RESEARCHER_CONST.PRIVACY_POLICY_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };
}
