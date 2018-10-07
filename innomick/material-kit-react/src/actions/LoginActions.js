/**
 * @action        : LoginActions
 * @description   : Handles signup, signin, forget and reset password actions
 * @Created by    : smartData
 */


import {
  AUTH_CONST,
  AXIOS_INSTANCE,
  FORGOT_PWD_API,
  HOME_CONTENT_API,
  LOGIN_API,
  RESAERCHER_REGISTRATION_API,
  RESET_PWD_API,
  VALIDATE_TOKEN_API,
} from "./constants";


import { checkHttpStatus, handleLoginRedirect, handleLogoutRedirect, parseJSON } from "../utils";
import Alert from "react-s-alert";
// import Cookies from "js-cookie";

import { browserHistory } from "react-router";

import { debug } from "util";
import signup from "../components/Logins/signup";


// handle state when request is send and resposen is awaited
export function getRequest(REQUEST) {
  return {
    type: REQUEST,
  };
}

// handle state and redirection if user is successfully logged in
export function getSuccess(SUCCESS, data) {

  return {
    type: SUCCESS,
    payload: data,
  };
}

export function reset(RESET) {
  return {
    type: RESET,
  };
}

// validate token
export function validateToken(token) {
  return (dispatch) => {
    dispatch(reset(AUTH_CONST.LOGIN_REQUEST_RESET));
    let config = { "headers": { "Content-Type": "application/vnd.api+json" } };
    AXIOS_INSTANCE.get(VALIDATE_TOKEN_API + "?token=" + token, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
        // let authToken = response.data.attributes ? response.data.attributes.key : null;
        if (response.status !== 200) {
          Alert.error("This Link is not valid.", { timeout: 8000 });
          browserHistory.push("/signin");
        }

        dispatch(getSuccess(AUTH_CONST.TOKEN_SUCCESS, {
          response: {
            statusCode: 200,
            statusText: "Token validated successfully.",
            data: response,
          },
        }));

      })
      .catch((error) => {
        // console.log(error);
        browserHistory.push("/signin");


      }
      );

  };
}
export function resetResearcher(token) {
  return (dispatch) => {
    dispatch(reset(AUTH_CONST.LOGIN_REQUEST_RESET));
  };
}
export function resetRegister(token) {
  return (dispatch) => {
    dispatch(reset(AUTH_CONST.REGISTER_RESET));
  };
}

// handle state in case of failure of user login
export function getFailure(FAILURE, error) {
  return {
    type: FAILURE,
    payload: error,
  };
}

// Custom context - "userbrowser-currentDate" concatination
function contextGenerator() {
  let currentDate = new Date();
  let context = `${navigator.userAgent}-${currentDate}`;
  return context;
}

/**
 * [RESEARCHERRegister description]
 * @param  {[type]} formData [description]
 * @return {[type]}          [description]
 */
export function resaercherRegister(formData) {
  return (dispatch) => {
    dispatch(getRequest(AUTH_CONST.REGISTER_REQUEST));
    let context = contextGenerator();
    const postData = {
      data:
        {
          type: "researchers",
          attributes: {
            // email: formData.email,
            password: formData.password,
            context: context,
            password_confirmation: formData.confirm_password,
            user_name: formData.username,
            token: formData.token,
          },
        },
    };
    let config = { "headers": { "Content-Type": "application/vnd.api+json" } };
    AXIOS_INSTANCE.post(RESAERCHER_REGISTRATION_API, postData, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
        if (response.status === 200) {
          browserHistory.push("/signin");
        }
      })
      .catch((error) => {
        let error_message = error.response;
        let obj = {};

        // if user account is created successfully
        if (error.response.status === 200) {
          dispatch(getSuccess(AUTH_CONST.REGISTER_SUCCESS, {
            response: {
              statusCode: 200,
              statusText: "You are logged in successfully.",
              // data: response.data.attributes,
            },
          }));
          return;
        }

        if (error_message.errors) {
          if (error_message.errors.email) {
            let email_err = "Email address already exists in Healthtree, please use a different email address.";
            obj.emailErr = email_err;
          }
          if (error_message.errors.user_name) {
            let username_err;
            if (error_message.errors.user_name.length) {
              if (error_message.errors.user_name[0] === "is invalid") {
                username_err = "Please enter valid username.";
              } else {
                username_err = "Username address already exists in Healthtree, please use a different username.";
              }
            }

            obj.usernameErr = username_err;
          }
        }
        dispatch(getFailure(AUTH_CONST.REGISTER_FAILURE, {
          error: {
            statusCode: 422,
            statusText: obj,
            data: null,
          },
        }));
      });
  };
}

/**
 * [RESEARCHERLogin description]
 * @param  {[type]} formData [description]
 * @return {[type]}          [description]
 */
export function researcherLogin(formData) {
  return (dispatch) => {
    dispatch(getRequest(AUTH_CONST.LOGIN_REQUEST));
    // Custom context - "userbrowser-currentDate" concatination
    let context = contextGenerator();
    const postData = {
      data:
        {
          email: formData.username,
          context: context,
          password: formData.password,
        },
    };

    let config = { "headers": { "Content-Type": "application/vnd.api+json" } };
    AXIOS_INSTANCE.post(LOGIN_API, postData, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
        let authToken = response.data.attributes ? response.data.attributes.key : null;


        dispatch(getSuccess(AUTH_CONST.LOGIN_SUCCESS, {
          response: {
            statusCode: 200,
            statusText: "You are logged in successfully.",
            data: response.data.attributes,
          },
        }));

        handleLoginRedirect(authToken);
      })
      .catch((error) => {
        let error_message = (error && error.response && error.response.data) ? error.response.data : "";
        let error_status = error && error.response && error.response.status ? error.response.status : false;
        dispatch(getFailure(AUTH_CONST.LOGIN_FAILURE, {
          error: {
            statusCode: 403,
            statusText: (error_status === 403) ? "Invalid Username or Password." : "Something went wrong, please try again.",
            data: null,
          },
        }));
      });
  };
}

/**
 * [logout description]
 * @return {[type]} [description]
 */
export function logout() {
  return (dispatch) => {

    dispatch(getSuccess(AUTH_CONST.LOGOUT, {
      response: {
        statusCode: 200,
        statusText: "You have been logged out successfully.",
        data: null,
      },
    }));
    handleLogoutRedirect();
  };
}

/**
 * [forgotPassword description]
 * @param  {[type]} formData       [description]
 * @param  {String} [redirect="/"] [description]
 * @return {[type]}                [description]
 */
export function forgotPassword(formData, redirect = "/") {
  return (dispatch) => {
    dispatch(getRequest(AUTH_CONST.FORGOT_PASSWORD_REQUEST));
    const postData = {
      "data": {
        "email": formData.email,
      },
    };

    let config = { "headers": { "Content-Type": "application/vnd.api+json" } };
    AXIOS_INSTANCE.post(FORGOT_PWD_API, postData, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(AUTH_CONST.FORGOT_PASSWORD_SUCCESS, {
          response: {
            statusCode: 200,
            statusText: "Please check your email to reset your password.",
          },
        }));
        // browserHistory.push("/login");
      })
      .catch((error) => {
        dispatch(getFailure(AUTH_CONST.FORGOT_PASSWORD_FAILURE, {
          response: {
            statusCode: 200,
            statusText: "Please check your email to reset your password.",
          },
        }));
      });
  };
}

/**
 * [resetPassword description]
 * @param {[type]} token    [description]
 * @param {[type]} formData [description]
 */
export function resetPassword(token, formData) {
  return (dispatch) => {
    dispatch(getRequest(AUTH_CONST.RESET_PASSWORD_REQUEST));
    const postData = {
      "data": {
        "reset_password_token": token,
        "password": formData.password,
        "password_confirmation": formData.confirm_password,
      },
    };

    let config = { "headers": { "Content-Type": "application/vnd.api+json" } };
    AXIOS_INSTANCE.post(RESET_PWD_API, postData, config)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(AUTH_CONST.RESET_PASSWORD_SUCCESS, {
          response: {
            statusCode: 200,
            statusText: "Your password has been successfully updated. Please Sign in.",
          },
        }));

        // browserHistory.push("/login");
      })
      .catch((error) => {
        dispatch(getFailure(AUTH_CONST.RESET_PASSWORD_FAILURE, {
          error: {
            statusCode: 403,
            statusText: "Token is either invalid or expired! Please try again.",
          },
        }));
      });
  };
}

/**
 * [statusUpdate description]
 * @return {[type]} [description]
 */
export function statusUpdate() {
  return (dispatch) => {
    dispatch(getRequest(AUTH_CONST.STATUS_UPDATE));
  };
}

/**
 * [loginPageContent description]
 * @return {[type]} [description]
 */
export function loginPageContent() {
  return (dispatch) => {
    dispatch(getRequest(AUTH_CONST.GET_HOME_CONTENT_REQUEST));
    // let config = { "headers" : { "Content-Type": "application/vnd.api+json" } };
    AXIOS_INSTANCE.get(`${HOME_CONTENT_API}?filter[slug]=home-page`)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((success) => {
        dispatch(getSuccess(AUTH_CONST.GET_HOME_CONTENT_SUCCESS, {
          response: {
            statusCode: 200,
            data: success.data,
          },
        }));

        // browserHistory.push("/login");
      })
      .catch((error) => {
        dispatch(getFailure(AUTH_CONST.GET_HOME_CONTENT_FAILURE, {
          error: {
            statusCode: 403,
            statusText: "Forbidden.",
          },
        }));
      });
  };
}
