import { createReducer } from "../utils";
import { RESEARCHER_CONST } from "../actions/constants";
const initialState = {
  "isRequesting": false,
  "isError": false,
  "isSuccess": false,
  "data": null,
  isDeleted: false,
};

export default createReducer(initialState, {
  [RESEARCHER_CONST.SAVE_SURVEY_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": true,
      "isSuccess": false,
      "isError": false,
      "data": null,
    });
  },
  [RESEARCHER_CONST.SAVE_SURVEY_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": true,
      "isError": false,
      "data": payload,
    });
  },
  // RESEARCHER_CONST.GET_QUESTION_ANSWERS_SUCCESS
  [RESEARCHER_CONST.GET_QUESTION_ANSWERS_SUCCESS]: (state, payload) => {
    // console.log("payload", payload);
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": true,
      "isError": false,
      "answer_data": payload,
    });
  },
  [RESEARCHER_CONST.SAVE_SURVEY_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": false,
      "isError": true,
      "data": null,
    });
  },
  [RESEARCHER_CONST.SAVE_SURVEY_RESET]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": false,
      "isError": false,
      "data": null,
    });
  },
  // RESEARCHER_CONST.GET_QUESTION_ANSWERS_SUCCESS
  [RESEARCHER_CONST.DELETE_QUESTION_SUCCESS]: (state, payload) => {
    console.log("payload", payload);
    return Object.assign({}, state, {
      "isRequesting": false,
      "isDeleted": true,
      "isError": false,
      "answer_data": payload,
    });
  },
  [RESEARCHER_CONST.DELETE_QUESTION_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": false,
      "isError": true,
      "data": null,
    });
  },
  [RESEARCHER_CONST.DELETE_QUESTION_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": true,
      "isSuccess": false,
      "isError": false,
      "data": null,
    });
  },
});
