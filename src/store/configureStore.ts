/**
 * Load all required libraries
 */
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

/**
 * Load all required reducers and middleware
 */
import reducer from "./reducers";
import toast from "./middleware/toast";
import logger from "./middleware/logger";
import { Context, createWrapper } from "next-redux-wrapper";

/**
 * Function which return EnhancedStore create function
 * @param { Context } context
 * @returns { EnhancedStore }
 */
export const makeStore = (context: Context): EnhancedStore =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware: any) => [...getDefaultMiddleware(), logger("console"), toast],
  });

/**
 * Create a redux wrapper which wrap the entire application,
 */
const wrapper = createWrapper(makeStore, {
  debug: process.env.ENV != "production",
});

export default wrapper;
