/**
 * @reducer       : index reducer
 * @description   :
 * @Created by    : smartData
 */
import ChangePassword from "./changePasswordReducer";

import { combineReducers } from "redux";

import { reducer as formReducer } from "redux-form"; // SAYING use redux form reducer as reducer

import LoginReducer from "./loginReducer";
import MiscReducer from "./miscReducer";

import MyelomaReducer from "./myelomaReducer";

import ResearcherReducer from "./researcherReducer";

import PrivacyPolicyReducer from "./privacyPolicyReducer";

import saveSurveyReducer from "./saveSurveyReducer";

import StaticPageReducer from "./staticPagesReducer";

import SurveyReducer from "./surveyReducer";

import UserReducer from "./userReducer";


const rootReducer = combineReducers({

  form: formReducer,
  login: LoginReducer,
  user: UserReducer,
  researcher: ResearcherReducer,
  facilityForm: StaticPageReducer,
  changePassword: ChangePassword,
  surveyQuestions: SurveyReducer,
  saveSurvey: saveSurveyReducer,
  metaData: MiscReducer,
  facilities: MyelomaReducer,
  privacyPolicy: PrivacyPolicyReducer,

});

export default rootReducer;
