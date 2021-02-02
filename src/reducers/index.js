import { combineReducers } from "redux";
import firstLoad from "./firstLoad";
import stateLanguage from "./language";
const rootReducer = combineReducers({
  stateLoad: firstLoad,
  stateLanguage,
});
export default rootReducer;
