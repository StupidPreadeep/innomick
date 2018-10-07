import { createReducer } from "../utils";
import { RESEARCHER_CONST } from "../actions/constants";
const initialState = {
  isRequesting: false,
  isError: false,
  isSuccess: false,
  data: null,
};

export default createReducer(initialState, {
  [RESEARCHER_CONST.FORM_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": true,

      "statusText": null,
    });
  },
  [RESEARCHER_CONST.FORM_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": true,
      "data": payload,
    });
  },
  [RESEARCHER_CONST.FORM_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": false,
      "isError": true,
    });
  },
});
