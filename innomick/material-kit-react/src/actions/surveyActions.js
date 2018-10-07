/**
 * @action        : survey Actions
 * @description   : Handles all the actions that are related to outcomes
 * @Created by    : smartData
 */
import { AXIOS_INSTANCE, GET_ANSWER_API, RESEARCHER_CONST, SURVEY_API } from "./constants";

import { checkHttpStatus, parseJSON } from "../utils";
import { browserHistory } from "react-router";
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
// reset
export function reset(RESET, error) {
  return {
    type: RESET,
    payload: error,
  };
}

// actiont to get dynamic listing of all the options of the my health history
export function getSurveys(token) {
  return (dispatch) => {

    dispatch(getRequest(RESEARCHER_CONST.SURVEY_FETCH_REQUEST));
    let config = { "headers": { "Authorization": token } };

    AXIOS_INSTANCE.get(`${SURVEY_API}`, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(RESEARCHER_CONST.SURVEY_FETCH_SUCCESS, success.data));

      })
      .catch((error) => {
        dispatch(getFailure(RESEARCHER_CONST.SURVEY_FETCH_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };
}
// actiont to get dynamic listing of all the options of the my health history
export function getAnswers(token, question_id) {
  return (dispatch) => {

    dispatch(getRequest(RESEARCHER_CONST.ANSWER_FETCH_REQUEST));
    let config = { "headers": { "Authorization": token } };

    AXIOS_INSTANCE.get(`${GET_ANSWER_API}` + "/" + question_id, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(RESEARCHER_CONST.ANSWER_FETCH_SUCCESS, success.data));

      })
      .catch((error) => {
        dispatch(getFailure(RESEARCHER_CONST.ANSWER_FETCH_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };
}

// reset vars
export function resetSurveys(token) {
  return function(dispatch) {
    dispatch(getRequest(RESEARCHER_CONST.SURVEY_RESET));
  };
}

export function resetSurveyQues() {
  return function(dispatch) {
    dispatch(reset(RESEARCHER_CONST.SURVEY_QUESTION_RESET));
  };
}


