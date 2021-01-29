import { combineReducers } from "redux";
import firstLoad from "./firstLoad";

const rootReducer = combineReducers({
    stateLoad:firstLoad
});
export default rootReducer;
