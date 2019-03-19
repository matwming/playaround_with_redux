import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { infoReducer } from "./infoReducer";
export const rootReducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});
