import { createReducer } from "../utils";
import { RESEARCHER_CONST } from "../actions/constants";
const initialState = {
  "isRequesting": false,
  "isError": false,
  "isSuccess": false,
  "data": null,
  "isQuestionRequesting": false,
  "isQuestionError": false,
  "isQuestionSuccess": false,
  "questions": null,
  "answer_data": null,
};

export default createReducer(initialState, {
  [RESEARCHER_CONST.SURVEY_FETCH_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": true,
      "isSuccess": false,
      "isError": false,
      "data": null,
    });
  },
  [RESEARCHER_CONST.SURVEY_FETCH_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": true,
      "isError": false,
      "data": payload,
    });
  },
  [RESEARCHER_CONST.SURVEY_FETCH_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": false,
      "isError": true,
      "data": null,
    });
  },
  [RESEARCHER_CONST.SURVEY_RESET]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": false,
      "isError": false,
      "isQuestionRequesting": false,
      "isQuestionError": false,
      "isQuestionSuccess": false,
    });
  },
  [RESEARCHER_CONST.SURVEY_QUESTION_FETCH_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isQuestionRequesting": true,
      "isQuestionError": false,
      "isQuestionSuccess": false,
      "questions": null,
    });
  },
  [RESEARCHER_CONST.SURVEY_QUESTION_FETCH_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isQuestionRequesting": false,
      "isQuestionError": false,
      "isQuestionSuccess": true,
      "questions": payload,
    });
  },
  [RESEARCHER_CONST.SURVEY_QUESTION_FETCH_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isQuestionRequesting": false,
      "isQuestionError": true,
      "isQuestionSuccess": false,
      "questions": null,
    });
  },
  [RESEARCHER_CONST.SURVEY_QUESTION_RESET]: (state, payload) => {
    return Object.assign({}, state, {
      "isQuestionRequesting": false,
      "isQuestionError": false,
      "isQuestionSuccess": false,
      "isRequesting": false,
      "isError": false,
      "isSuccess": false,
      "data": null,
      // "questions": null,
    });
  },
  [RESEARCHER_CONST.ANSWER_FETCH_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": true,
      "isSuccess": false,
      "isError": false,
      "answer_data": null,
    });
  },
  [RESEARCHER_CONST.ANSWER_FETCH_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": true,
      "isError": false,
      "answer_data": payload,
    });
  },
  [RESEARCHER_CONST.ANSWER_FETCH_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": false,
      "isError": true,
      "answer_data": null,
    });
  },
  [RESEARCHER_CONST.ANSWER_RESET]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": false,
      "isError": false,
      "isQuestionRequesting": false,
      "isQuestionError": false,
      "isQuestionSuccess": false,
    });
  },
});
