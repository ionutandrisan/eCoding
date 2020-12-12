import { combineReducers } from "redux";
import loggedReducer from "./loggedReducer";
import chooseLanguageReducer from "./chooseLanguageReducer";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  programmingLanguageToRunCode: chooseLanguageReducer,
});

export default allReducers;
