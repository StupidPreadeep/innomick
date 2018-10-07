import { createReducer } from "../utils";
import { FACILITIES_CONST } from "../actions/constants";
const initialState = {
  isRequesting: false,
  isError: false,
  isSuccess: false,
  data: null,

  isSavingRequest: true,
  isSavingError: false,
  isSavingSuccess: false,

  isSavingRequestNextDiag: true,
  isSavingErrorNextDiag: false,
  isSavingSuccessNextDiag: false,
  dataNextDiag: null,

  // "myMyeloma": null,
  isDeleted: false,
  isDeletedPhysician: false,
  isDeleting: false,
  isDeleteError: false,

  isSavingRequestPhysician: true,
  isSavingErrorPhysician: false,
  isSavingSuccessPhysician: false,
  dataPhysician: null,
};

export default createReducer(initialState, {
  [FACILITIES_CONST.FACILITY_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isRequesting": true,
      "statusText": null,
      "isSavingSuccess": false,
    });
  },
  [FACILITIES_CONST.FACILITY_SUCCESS]: (state, payload) => {

    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": true,
      "data": payload,
    });
  },
  [FACILITIES_CONST.FACILITY_FAILURE]: (state, payload) => {

    return Object.assign({}, state, {
      "isRequesting": false,
      "isSuccess": false,
      "isError": true,
    });
  },
  [FACILITIES_CONST.GET_MYMYELOMA_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "statusText": null,
      "myMyeloma": payload,
      "isRequesting": true,
      "isError": false,
      "isSuccess": false,
      "isSavingSuccess": false,
      "isSavingSuccessNextDiag": false,
      "isSavingSuccessPhysician": false,
      "isSavingRequest": false,
      "isDeleted": false,
      "isDeletedPhysician": false,
    });
  },
  [FACILITIES_CONST.GET_MYMYELOMA_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      "statusText": null,
      "myMyeloma": payload,
      // "myMyelomaId": typeof(payload) === "object" ? payload.id : null,
      "isRequesting": false,
      "isError": false,
      "isSuccess": true,
    });
  },

  [FACILITIES_CONST.GET_MYMYELOMA_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "statusText": payload,
      "isRequesting": false,
      "isError": true,
      "isSuccess": false,
    });
  },

  [FACILITIES_CONST.SAVE_MYMYELOMA_REQUEST]: (state, payload) => {

    return Object.assign({}, state, {
      "isSavingRequest": true,
      "isSavingError": false,
      "isSavingSuccess": false,
      "data": null,
    });
  },
  [FACILITIES_CONST.SAVE_MYMYELOMA_SUCCESS]: (state, payload) => {

    return Object.assign({}, state, {
      "isSavingRequest": false,
      "isSavingError": false,
      "isSavingSuccess": true,
      "data": payload,
    });
  },

  [FACILITIES_CONST.SAVE_MYMYELOMA_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isSavingRequest": false,
      "isSavingError": true,
      "isSavingSuccess": false,
      "data": null,
    });
  },

  [FACILITIES_CONST.SAVE_MYMYELOMA_RESET]: (state, payload) => {
    return Object.assign({}, state, {
      "isSavingRequest": false,
      "isSavingError": false,
      "isSavingSuccess": false,
      "data": null,
    });
  },

  [FACILITIES_CONST.SAVE_MYMYELOMA_NEXT_DIAG_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      "isSavingRequest": true,
      "isSavingError": false,
      "isSavingSuccessNextDiag": false,
      "dataNextDiag": null,
    });
  },
  [FACILITIES_CONST.SAVE_MYMYELOMA_NEXT_DIAG_SUCCESS]: (state, payload) => {

    return Object.assign({}, state, {
      "isSavingRequest": false,
      "isSavingError": false,
      "isSavingSuccessNextDiag": true,
      "dataNextDiag": payload,
    });
  },

  [FACILITIES_CONST.SAVE_MYMYELOMA_NEXT_DIAG_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isSavingRequest": false,
      "isSavingError": true,
      "isSavingSuccessNextDiag": false,
      "dataNextDiag": null,
    });
  },

  [FACILITIES_CONST.SAVE_MYMYELOMA_NEXT_DIAG_RESET]: (state, payload) => {
    return Object.assign({}, state, {
      "isSavingRequest": false,
      "isSavingError": false,
      "isSavingSuccessNextDiag": false,
      "dataNextDiag": null,
    });
  },


  [FACILITIES_CONST.DELETE_MY_MYELOMA_REQUEST]: (state, payload) => {

    return Object.assign({}, state, {
      "isDeleted": false,
      "isDeleting": true,
      "isDeleteError": false,
    });
  },

  [FACILITIES_CONST.DELETE_MY_MYELOMA_SUCCESS]: (state, payload) => {

    return Object.assign({}, state, {
      "isDeleted": true,
      "isDeleting": false,
      "isDeleteError": false,
      "del_id": payload,
    });
  },

  [FACILITIES_CONST.DELETE_MY_MYELOMA_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isDeleted": false,
      "isDeleting": false,
      "isDeleteError": true,
    });
  },

  [FACILITIES_CONST.DELETE_MY_MYELOMA_RESET]: (state, payload) => {
    return Object.assign({}, state, {
      "isDeleted": false,
      "isDeleting": false,
      "isDeleteError": false,
    });
  },

  [FACILITIES_CONST.SAVE_CURRENT_PHYSICIAN_REQUEST]: (state, payload) => {

    return Object.assign({}, state, {
      "isSavingRequest": true,
      "isSavingError": false,
      "isSavingSuccessPhysician": false,
      "data": null,
    });
  },
  [FACILITIES_CONST.SAVE_CURRENT_PHYSICIAN_SUCCESS]: (state, payload) => {

    return Object.assign({}, state, {
      "isSavingRequest": false,
      "isSavingError": false,
      "isSavingSuccessPhysician": true,
      "data": payload,
    });
  },

  [FACILITIES_CONST.SAVE_CURRENT_PHYSICIAN_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isSavingRequest": false,
      "isSavingError": true,
      "isSavingSuccessPhysician": false,
      "data": null,
    });
  },

  [FACILITIES_CONST.SAVE_CURRENT_PHYSICIAN_RESET]: (state, payload) => {
    return Object.assign({}, state, {
      "isSavingRequest": false,
      "isSavingError": false,
      "isSavingSuccessPhysician": false,
      "data": null,
    });
  },

  [FACILITIES_CONST.DELETE_CURRENT_PHYSICIAN_REQUEST]: (state, payload) => {

    return Object.assign({}, state, {
      "isDeletedPhysician": false,
      "isDeleting": true,
      "isDeleteError": false,
    });
  },

  [FACILITIES_CONST.DELETE_CURRENT_PHYSICIAN_SUCCESS]: (state, payload) => {

    return Object.assign({}, state, {
      "isDeletedPhysician": true,
      "isDeleting": false,
      "isDeleteError": false,
      "del_id": payload,
    });
  },

  [FACILITIES_CONST.DELETE_CURRENT_PHYSICIAN_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      "isDeletedPhysician": false,
      "isDeleting": false,
      "isDeleteError": true,
    });
  },

  [FACILITIES_CONST.DELETE_CURRENT_PHYSICIAN_RESET]: (state, payload) => {
    return Object.assign({}, state, {
      "isDeletedPhysician": false,
      "isDeleting": false,
      "isDeleteError": false,
    });
  },
});
