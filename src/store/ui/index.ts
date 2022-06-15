/**
 * Load all required libraries
 */
import { combineReducers, ReducersMapObject } from "@reduxjs/toolkit";

/**
 * Load all redux splices which makes the redux
 */
import bugsReducer from "./bugs";

/**
 * Combine all reducers and return a ReducersMapObject
 * @return { ReducersMapObject }
 */
export default combineReducers({
  bugs: bugsReducer,
});
