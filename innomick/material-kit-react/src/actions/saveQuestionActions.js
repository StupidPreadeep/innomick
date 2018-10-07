/**
 * @action        : survey Actions
 * @description   : Handles all the actions that are related to outcomes
 * @Created by    : smartData
 */
import { AXIOS_INSTANCE, GET_ANSWER_API, RESEARCHER_CONST, SAVE_SURVEY_API } from "./constants";
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
export function reset(RESET) {
  return {
    type: RESET,
  };
}

export function getAnswers(token, questionId) {
  return (dispatch) => {
    dispatch(getRequest(RESEARCHER_CONST.SAVE_SURVEY_REQUEST));
    let config = { "headers": { "Authorization": token } };
    let APICALL = (AXIOS_INSTANCE.get(GET_ANSWER_API + "/" + questionId, config));
    // AXIOS_INSTANCE.post(`${SAVE_SURVEY_API}`, data, config)
    APICALL.then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        // console.log(success);
        dispatch(getSuccess(RESEARCHER_CONST.GET_QUESTION_ANSWERS_SUCCESS, success.data));
      })
      .catch((error) => {
        // console.log("error inssv", error);
        dispatch(getFailure(RESEARCHER_CONST.SAVE_SURVEY_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };

}

export function updateInfo(token, data, userId, questionId) {

}
export function saveSurvey(token, data, userId, questionId) {
  // console.log("data=========>", data);
  // return false;
  var question = {};
  if (questionId) {
    question = {
      "data": {
        "type": "researcher_questions",
        "id": questionId,
        "attributes": data,
        "relationships": {
          "user": {
            "data": { "type": "users", "id": userId },
          },
        },
      },
    };
  } else {
    question = {
      "data": {
        "type": "researcher_questions",
        "attributes": data,
        "relationships": {
          "user": {
            "data": { "type": "users", "id": userId },
          },
        },
      },
    };

  }

  return (dispatch) => {
    dispatch(getRequest(RESEARCHER_CONST.SAVE_SURVEY_REQUEST));
    let config = { "headers": { "Authorization": token } };
    let APICALL = questionId ? AXIOS_INSTANCE.patch(`${SAVE_SURVEY_API}/${questionId}`, question, config) : (AXIOS_INSTANCE.post(SAVE_SURVEY_API, question, config));
    // AXIOS_INSTANCE.post(`${SAVE_SURVEY_API}`, data, config)
    APICALL.then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(RESEARCHER_CONST.SAVE_SURVEY_SUCCESS, success.data));
      })
      .catch((error) => {
        console.log("error inssv", error);
        dispatch(getFailure(RESEARCHER_CONST.SAVE_SURVEY_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };
}
export function resetSaveSurvey() {
  return (dispatch) => {
    dispatch(reset(RESEARCHER_CONST.SAVE_SURVEY_RESET));
  };
}
export function deleteQuestion(token, id) {
  // console.log(token, " inside remove my treatments", id);
  return function(dispatch) {
    dispatch(getRequest(RESEARCHER_CONST.DELETE_QUESTION_REQUEST));
    let config = { "headers": { "Authorization": token } };
    AXIOS_INSTANCE.delete(`${SAVE_SURVEY_API}/${id}`, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(function(success) {
        dispatch(getSuccess(RESEARCHER_CONST.DELETE_QUESTION_SUCCESS, id));
      })
      .catch(function(error) {
        dispatch(getFailure(RESEARCHER_CONST.DELETE_QUESTION_FAILURE, {
          response: {
            statusCode: 403,
            statusText: null,
          },
        }));
      });
  };
}
