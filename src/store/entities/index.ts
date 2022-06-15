/**
 * Load all required libraries
 */
import { combineReducers, ReducersMapObject } from "@reduxjs/toolkit";

/**
 * Load all redux splices which makes the redux
 */
import addressReducer from "./address";

/**
 * Combine all reducers and return a ReducersMapObject
 * @return { ReducersMapObject }
 */
export default combineReducers({
  address: addressReducer,
});
