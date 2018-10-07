/**
 * @constants
 * @description  : Hold CONSTANTS and APIs
 * @Created by   : smartData
 */

import axios from "axios";

/* ****************************** Define Pagination Constants *****************************/

export const PAGINATION_DEFAULT_LIMIT = "10";

/* ****************************** Define and Export Constants ****************************/

export const MENU_LINK = { UPDATE_ACTIVE_LINK: "UPDATE_ACTIVE_LINK" };

export const AUTH_CONST = {
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILURE: "REGISTER_FAILURE",
  REGISTER_RESET: "REGISTER_RESET",
  TOKEN_SUCCESS: "TOKEN_SUCCESS",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",

  LOGOUT: "LOGOUT",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",

  FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAILURE: "FORGOT_PASSWORD_FAILURE",

  RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILURE: "RESET_PASSWORD_FAILURE",
  LOGIN_REQUEST_RESET: "LOGIN_REQUEST_RESET",

  GET_HOME_CONTENT_REQUEST: "GET_HOME_CONTENT_REQUEST",
  GET_HOME_CONTENT_SUCCESS: "GET_HOME_CONTENT_SUCCESS",
  GET_HOME_CONTENT_FAILURE: "GET_HOME_CONTENT_FAILURE",

  CHANGE_PASSWORD_REQUEST: "CHANGE_PASSWORD_REQUEST",
  CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
  CHANGE_PASSWORD_FAILURE: "CHANGE_PASSWORD_FAILURE",
  CHANGE_PASSWORD_RESET: "CHANGE_PASSWORD_RESET",

  STATUS_UPDATE: "STATUS_UPDATE",


};

export const USER_CONST = {
  GET_USER_INFO_REQUEST: "GET_USER_INFO_REQUEST",
  GET_USER_INFO_SUCCESS: "GET_USER_INFO_SUCCESS",
  GET_USER_INFO_FAILURE: "GET_USER_INFO_FAILURE",
  SAVE_USER_INFO_REQUEST: "SAVE_USER_INFO_REQUEST",
  SAVE_USER_INFO_SUCCESS: "SAVE_USER_INFO_SUCCESS",
  SAVE_USER_INFO_FAILURE: "SAVE_USER_INFO_FAILURE",
  RESET_USER_INFO: "RESET_USER_INFO",
};


export const RESEARCHER_CONST = {
  GET_QUESTION_ANSWERS_SUCCESS: "GET_QUESTION_ANSWERS_SUCCESS",
  GET_RESEARCHER_INFO_REQUEST: "GET_RESEARCHER_INFO_REQUEST",
  GET_RESEARCHER_INFO_SUCCESS: "GET_RESEARCHER_INFO_SUCCESS",
  GET_RESEARCHER_INFO_FAILURE: "GET_RESEARCHER_INFO_FAILURE",
  RESEARCHER_RESET: "RESEARCHER_RESET",
  SAVE_RESEARCHER_INFO_SUCCESS: "SAVE_RESEARCHER_INFO_SUCCESS",
  SAVE_RESEARCHER_INFO_REQUEST: "SAVE_RESEARCHER_INFO_REQUEST",
  GET_MYELOMA_CENTERS_REQUEST: "GET_MYELOMA_CENTERS_REQUEST",
  GET_MYELOMA_CENTERS_SUCCESS: "GET_MYELOMA_CENTERS_SUCCESS",
  GET_MYELOMA_CENTERS_FAILURE: "GET_MYELOMA_CENTERS_FAILURE",
  PRIVACY_POLICY_REQUEST: "PRIVACY_POLICY_REQUEST",
  PRIVACY_POLICY_FAILURE: "PRIVACY_POLICY_FAILURE",
  SURVEY_FETCH_REQUEST: "SURVEY_FETCH_REQUEST",
  SURVEY_FETCH_SUCCESS: "SURVEY_FETCH_SUCCESS",
  SURVEY_FETCH_FAILURE: "SURVEY_FETCH_FAILURE",
  SURVEY_RESET: "SURVEY_RESET",

  SURVEY_QUESTION_FETCH_REQUEST: "SURVEY_QUESTION_FETCH_REQUEST",
  SURVEY_QUESTION_FETCH_SUCCESS: "SURVEY_QUESTION_FETCH_SUCCESS",
  SURVEY_QUESTION_FETCH_FAILURE: "SURVEY_QUESTION_FETCH_FAILURE",
  SURVEY_QUESTION_RESET: "SURVEY_QUESTION_RESET",

  SAVE_SURVEY_REQUEST: "SAVE_SURVEY_REQUEST",
  SAVE_SURVEY_SUCCESS: "SAVE_SURVEY_SUCCESS",
  SAVE_SURVEY_FAILURE: "SAVE_SURVEY_FAILURE",
  SAVE_SURVEY_RESET: "SAVE_SURVEY_RESET",
  ANSWER_FETCH_REQUEST: "ANSWER_FETCH_REQUEST",
  ANSWER_FETCH_SUCCESS: "ANSWER_FETCH_SUCCESS",
  ANSWER_FETCH_FAILURE: "ANSWER_FETCH_FAILURE",
  ANSWER_RESET: "ANSWER_RESET",
  DELETE_QUESTION_REQUEST: "DELETE_QUESTION_REQUEST",
  DELETE_QUESTION_SUCCESS: "DELETE_QUESTION_SUCCESS",
  DELETE_QUESTION_FAILURE: "DELETE_QUESTION_FAILURE",
};
// MISC
export const MISC_CONST = {

  TOOL_TIP: "TOOL_TIP",

};

// MYELOMA DIAGNOSIS FACILITIES
export const FACILITIES_CONST = {
  FACILITY_REQUEST: "FACILITY_REQUEST",
  FACILITY_SUCCESS: "FACILITY_SUCCESS",
  FACILITY_FAILURE: "FACILITY_FAILURE",

  SAVE_MYMYELOMA_REQUEST: "SAVE_MYMYELOMA_REQUEST",
  SAVE_MYMYELOMA_SUCCESS: "SAVE_MYMYELOMA_SUCCESS",
  SAVE_MYMYELOMA_FAILURE: "SAVE_MYMYELOMA_FAILURE",
  SAVE_MYMYELOMA_RESET: "SAVE_MYMYELOMA_RESET",
};


// version constt
export const VERSION = "v.0.9.2";
/* ************************************ API CONSTANTS ***************************************/

// creating global instance for the axios to call apis
export const AXIOS_INSTANCE = axios.create();
AXIOS_INSTANCE.defaults.headers["Accept"] = "application/vnd.api+json";
AXIOS_INSTANCE.defaults.headers["Content-Type"] = "application/vnd.api+json";
export const LOCALS_STORAGE_AUTHTOKEN = localStorage.getItem("authToken");

// --------------------------------------------------------------------------------------------
// Define APIS

const API_SLUG = `${process.env.REACT_APP_SERVER_URL}/api/v1`;
export const LOGIN_API = `${API_SLUG}/auth`; // POST - Get access token for the application on login
export const RESAERCHER_REGISTRATION_API = `${API_SLUG}/update_researcher`; // POST RESEARCHER registration
export const VALIDATE_TOKEN_API = `${API_SLUG}/validate_token`; // POST RESEARCHER registration
export const FORGOT_PWD_API = `${API_SLUG}/password/forgot`; // POST
export const CHANGE_PWD_API = `${API_SLUG}/password/change`; // POST

export const RESET_PWD_API = `${API_SLUG}/password/reset`;
export const HOME_CONTENT_API = `${API_SLUG}/pages`; // GET
export const GET_USER_INFO_API = `${API_SLUG}/users`; // GET
export const GET_ABOUT_ME_API = `${API_SLUG}/researchers`; // GET - RESEARCHER_infos - used in about me page
export const GET_MYELOMA_CENTERS_API = `${API_SLUG}/clinics`; // GET
export const GET_MYELOMA_API = `${API_SLUG}/myelomas`; // GET

export const RESEARCHER_FACILITIES_API = `${API_SLUG}/researcher_facilities`;
export const SURVEY_API = `${API_SLUG}/researcher_questions_group`;
export const SAVE_SURVEY_API = `${API_SLUG}/researcher_questions`;
export const HIDE_START_MODAL = `${API_SLUG}/read_myeloma`;
export const GET_ANSWER_API = `${API_SLUG}/researcher_question_info`;
