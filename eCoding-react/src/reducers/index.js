import { combineReducers } from "redux";
import loggedReducer from "./loggedReducer";
import chooseLanguageReducer from "./chooseLanguageReducer";
import unregisteredUserCodeReducer from "./unregisteredUserCodeReducer";
import codeOutputReducer from "./codeOutputReducer";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  programmingLanguageToRunCode: chooseLanguageReducer,
  userCode: unregisteredUserCodeReducer,
  codeOutput: codeOutputReducer,
});

export default allReducers;
