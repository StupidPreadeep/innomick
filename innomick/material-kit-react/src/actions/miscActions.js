/**
 * @action        : survey Actions
 * @description   : Handles all the actions that are related to outcomes
 * @Created by    : smartData
 */

import { MISC_CONST } from "./constants";

export function setMisc(PARAM, data) {
  return {
    type: PARAM,
    payload: data,
  };
}

// set tooltip
export function getTooltip(data) {
  return (dispatch) => {
    // remove this when login is implemented
    dispatch(setMisc(MISC_CONST.TOOL_TIP, data));
  };
}


