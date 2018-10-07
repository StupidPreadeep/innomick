/**
 * @reducer       : user reducer
 * @description   : handle all request and response for the user actions
 * @Created by    : smartData
 */

import { createReducer } from "../utils";
import { MISC_CONST } from "../actions/constants";

const initialState = {
  // profileComplete: null,
  profileComplete: 0,
  surveyPending: 0,
  userInterest: null,
  treatmentAddData: null,
};

export default createReducer(initialState, {
  [MISC_CONST.PROFILE_COMPLETE]: (state, payload) => {
    return Object.assign({}, state, {
      profileComplete: payload,
    });
  },
  [MISC_CONST.SURVEY_PENDING]: (state, payload) => {
    return Object.assign({}, state, {
      surveyPending: payload,
    });
  },
  [MISC_CONST.USER_INTEREST]: (state, payload) => {
    return Object.assign({}, state, {
      userInterest: payload,
    });
  },
  [MISC_CONST.NEWLY_DIAGNOSED]: (state, payload) => {
    return Object.assign({}, state, {
      any_treatment: payload,
    });
  },
  [MISC_CONST.DIAGNOSIS_DATA]: (state, payload) => {
    return Object.assign({}, state, {
      diagnosis_data: payload,
    });
  },
  [MISC_CONST.USER_COUNTS]: (state, payload) => {
    return Object.assign({}, state, {
      moduleCounts: payload,
    });
  },
  [MISC_CONST.VIDEO_DETAIL]: (state, payload) => {
    return Object.assign({}, state, {
      video_detail: payload,
    });
  },
  [MISC_CONST.TOOL_TIP]: (state, payload) => {
    if (payload && payload.length > 0) {
      return Object.assign({}, state, {
        tooltip: payload,
      });
    }
  },
});
