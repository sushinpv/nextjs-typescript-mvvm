/**
 * Load all required libraries
 */
import { combineReducers, ReducersMapObject } from "@reduxjs/toolkit";
import ui from "./ui";

/**
 * Load all redux splices which makes the redux
 * The default structure for redux is
 * { entities, ui, auth }
 */
import entities from "./entities";
// import auth from './auth';

/**
 * Combine all reducers and return a ReducersMapObject
 * @return { ReducersMapObject }
 */
export default combineReducers({
  entities: entities,
  // auth: auth,
  ui: ui,
});
