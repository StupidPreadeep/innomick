/**
 * @reducer       : user reducer
 * @description   : handle all request and response for the user actions
 * @Created by    : smartData
 */

import { createReducer } from "../utils";
import { RESEARCHER_CONST } from "../actions/constants";

const initialState = {
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusCode: null,
  statusText: null,
  myelomaCenters: [],
  isAuthenticatingMyelomaCenter: false,
  isFetching: false,
  isError: false,
  isSuccess: false,
  isSavingSuccess: false,
  not_a_us_citizen: false,
  isErrorMyelomaCenter: false,
};

export default createReducer(initialState, {
  [RESEARCHER_CONST.RESEARCHER_RESET]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "isSavingSuccess": false,
      "isSuccess": false,
      "isAuthenticated": false,
      "isFetching": false,
      "isError": false,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_INFO_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "researcherInfo": null,
      "isSavingSuccess": false,
      "isSuccess": false,
      "isAuthenticated": false,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_INFO_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "researcherInfo": payload,
      "isSavingSuccess": false,
      "isSuccess": true,
      "isAuthenticated": true,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_INFO_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
      "isSuccess": true,
      "isAuthenticated": false,
    });
  },
  [RESEARCHER_CONST.SAVE_RESEARCHER_INFO_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isSaving": true,
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
    });
  },
  [RESEARCHER_CONST.SAVE_RESEARCHER_INFO_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isSaving": false,
      "isAuthenticating": false,
      "statusText": null,
      "isSavingSuccess": true,
      "savedResearcherInfo": payload,
    });
  },
  [RESEARCHER_CONST.SAVE_RESEARCHER_INFO_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
    });
  },

  [RESEARCHER_CONST.GET_RESEARCHER_FACILITIES_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_FACILITIES_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "RESEARCHERFacilities": payload,
      "isSavingSuccess": false,
      "isSuccess": true,
      "isAuthenticated": true,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_FACILITIES_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
    });
  },

  [RESEARCHER_CONST.SAVE_RESEARCHER_FACILITIES_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
      "saveRESEARCHERFacility": null,
    });
  },
  [RESEARCHER_CONST.SAVE_RESEARCHER_FACILITIES_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "isSavingSuccess": true,
      "saveRESEARCHERFacility": payload,
    });
  },

  [RESEARCHER_CONST.SAVE_RESEARCHER_FACILITIES_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
    });
  },

  [RESEARCHER_CONST.GET_RESEARCHER_PREF_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_PREF_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "RESEARCHERPrefs": payload,
      "isSavingSuccess": false,
      "isSuccess": true,
      "isAuthenticated": true,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_PREF_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
    });
  },


  [RESEARCHER_CONST.SAVE_RESEARCHER_PREF_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
      "saveRESEARCHERPref": null,
    });
  },
  [RESEARCHER_CONST.SAVE_RESEARCHER_PREF_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "isSavingSuccess": true,
      "saveRESEARCHERPref": payload,
    });
  },
  [RESEARCHER_CONST.SAVE_RESEARCHER_PREF_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
    });
  },

  [RESEARCHER_CONST.UPDATE_RESEARCHER_PREF_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
      "saveRESEARCHERPref": null,
    });
  },
  [RESEARCHER_CONST.UPDATE_RESEARCHER_PREF_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "isSavingSuccess": true,
      "saveRESEARCHERPref": payload,
    });
  },
  [RESEARCHER_CONST.UPDATE_RESEARCHER_PREF_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
    });
  },

  [RESEARCHER_CONST.DELETE_RESEARCHER_FACILITY_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
    });
  },
  [RESEARCHER_CONST.DELETE_RESEARCHER_FACILITY_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "isSavingSuccess": true,
    });
  },
  [RESEARCHER_CONST.DELETE_RESEARCHER_FACILITY_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
    });
  },

  [RESEARCHER_CONST.SAVE_RESEARCHER_PORTAL_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
    });
  },
  [RESEARCHER_CONST.SAVE_RESEARCHER_PORTAL_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "isSavingSuccess": true,
      "saveRESEARCHERPref": null,
    });
  },
  [RESEARCHER_CONST.SAVE_RESEARCHER_PORTAL_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
      "saveRESEARCHERPref": null,
    });
  },

  [RESEARCHER_CONST.UPDATE_RESEARCHER_PORTAL_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
    });
  },
  [RESEARCHER_CONST.UPDATE_RESEARCHER_PORTAL_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "isSavingSuccess": true,
      "saveRESEARCHERPref": null,
    });
  },
  [RESEARCHER_CONST.UPDATE_RESEARCHER_PORTAL_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
      "saveRESEARCHERPref": null,
    });
  },

  [RESEARCHER_CONST.SET_CURRENT_FACILITY]: (state, payload) => {
    return Object.assign({}, state, {
      currentFacility: payload,
    });
  },

  [RESEARCHER_CONST.GET_RESEARCHER_PORTALS_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_PORTALS_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "isSavingSuccess": true,
      "RESEARCHERPortals": payload,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_PORTALS_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
    });
  },

  [RESEARCHER_CONST.GET_RESEARCHER_REPORT_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
      "isSavingSuccess": false,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_REPORT_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": null,
      "isSavingSuccess": true,
      "RESEARCHERReports": payload,
    });
  },
  [RESEARCHER_CONST.GET_RESEARCHER_REPORT_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
      "isSavingSuccess": false,
    });
  },


  [RESEARCHER_CONST.GET_MYELOMA_CENTERS_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticatingMyelomaCenter": true,
      "isErrorMyelomaCenter": false,
      "statusText": null,
      "isSavingSuccess": false,
    });
  },
  [RESEARCHER_CONST.GET_MYELOMA_CENTERS_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticatingMyelomaCenter": false,
      "isErrorMyelomaCenter": false,
      "statusText": null,
      "myelomaCenters": payload,
      "isSavingSuccess": false,
    });
  },
  [RESEARCHER_CONST.GET_MYELOMA_CENTERS_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticatingMyelomaCenter": false,
      "isErrorMyelomaCenter": true,
      "statusText": payload,
    });
  },

  [RESEARCHER_CONST.NOT_A_US_CITIZEN]: (state, payload) => {
    return Object.assign({}, state, {
      "not_a_us_citizen": true,
      // "statusText": payload,
    });
  },

  [RESEARCHER_CONST.RESET_NOT_A_US_CITIZEN]: (state, payload) => {
    return Object.assign({}, state, {
      "not_a_us_citizen": false,
      // "statusText": payload,
    });
  },

  [RESEARCHER_CONST.GET_FITNESS_LEVEL_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticatingFitnessLevel": true,
      "statusText": null,
      "fitnessLevel": payload,
    });
  },
  [RESEARCHER_CONST.GET_FITNESS_LEVEL_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticatingFitnessLevel": false,
      "statusText": null,
      "fitnessLevel": typeof(payload) === "object" ? payload.attributes : {},
      "fitnessLevelId": typeof(payload) === "object" ? payload.id : null,
    });
  },
  [RESEARCHER_CONST.GET_FITNESS_LEVEL_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticatingFitnessLevel": false,
      "statusText": payload,
    });
  },
  [RESEARCHER_CONST.SAVE_FITNESS_LEVEL_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": true,
      "statusText": null,
    });
  },
  [RESEARCHER_CONST.SAVE_FITNESS_LEVEL_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isFetching": false,
      "isSuccess": true,
      "sideEffects": payload,
    });
  },
  [RESEARCHER_CONST.SAVE_FITNESS_LEVEL_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isAuthenticating": false,
      "statusText": payload,
    });
  },
  [RESEARCHER_CONST.GET_MY_SIDE_EFFECTS_API]: (state, payload) => {
    return Object.assign({}, state, {
      "isFetching": true,
      "statusText": null,
    });
  },
  [RESEARCHER_CONST.GET_MY_SIDE_EFFECTS_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isFetching": false,
      "isSuccess": true,
      "sideEffects": payload,
    });
  },
  [RESEARCHER_CONST.GET_MY_SIDE_EFFECTS_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isFetching": false,
      "isSuccess": true,
      "isError": true,
    });
  },
  [RESEARCHER_CONST.GET_MY_TREATMENTS_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isFetching": true,
      "isSuccess": false,
      "isError": false,
      "treatments": null,
    });
  },
  [RESEARCHER_CONST.GET_MY_TREATMENTS_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isFetching": false,
      "isSuccess": true,
      "isError": false,
      "treatments": payload,
    });
  },
  [RESEARCHER_CONST.GET_MY_TREATMENTS_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isFetching": false,
      "isSuccess": false,
      "isError": true,
    });
  },
  [RESEARCHER_CONST.GET_REMISSION_STATUS_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isFetching": true,
      "statusText": null,
    });
  },
  [RESEARCHER_CONST.GET_REMISSION_STATUS_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "isFetching": false,
      "statusText": null,
      "remissions": payload,
    });
  },
  [RESEARCHER_CONST.GET_REMISSION_STATUS_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isFetching": false,
      "isSuccess": false,
      "isError": true,
    });
  },
  // [RESEARCHER_CONST.SAVE_MY_SIDE_EFFECTS_REQUEST]: (state, payload) => {
  //   return Object.assign({}, state, {
  //     "isFetching": true,
  //     "statusText": null,
  //   });
  // },
  // [RESEARCHER_CONST.SAVE_MY_SIDE_EFFECTS_SUCCESS]: (state, payload) => {
  //   return Object.assign({}, state, {
  //     "isFetching": false,
  //     "isSuccess": true,
  //     "statusText": null,
  //   });
  // },
  // [RESEARCHER_CONST.SAVE_MY_SIDE_EFFECTS_FAILURE]: (state, payload) => {
  //   return Object.assign({}, state, {
  //     "isFetching": false,
  //     "isSuccess": true,
  //     "isError": true,
  //     "statusText": payload,
  //   });
  // },
});
