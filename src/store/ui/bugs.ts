import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { createSelector } from "reselect";

import * as action from "../api-action-types/api";

let url = "/bugs";

//Slice => reducer and actions
const slice = createSlice({
  name: "bugs",
  initialState: <Bugs>{
    list: [],
    loading: false,
    loaded: false,
    lastFetch: 0,
  },
  reducers: {
    bugsRequested: (bugs: Bugs, action) => {
      bugs.loading = true;
    },

    bugsRequestFailed: (bugs: Bugs, action) => {
      bugs.loading = false;
    },

    bugsReceived: (bugs: Bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugAssignToUser: (bugs: Bugs, action) => {
      let { id: bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },
    bugAdded: (bugs: Bugs, action) => {
      bugs.list.push(action.payload);
    },

    bugResolved: (bugs: Bugs, action) => {
      let index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },

    bugRemoved: (bugs: Bugs, action) => {
      bugs.list.filter((bug) => bug.id !== action.payload.id);
    },
  },
});
const { bugAdded, bugRemoved, bugResolved, bugAssignToUser, bugsReceived, bugsRequested, bugsRequestFailed } = slice.actions;

export const actionTypes = {
  bugAdded: bugAdded.type,
  bugRemoved: bugRemoved.type,
  bugsRequested: bugsRequested.type,
  bugsRequestFailed: bugsRequestFailed.type,
};

export default slice.reducer;

//Action Creators

export const loadBugs = () => (dispatch: Dispatch, getState: getState) => {
  const { lastFetch } = getState().ui.bugs;

  const diffInMin = ((new Date().getTime() - lastFetch) % 60) * 1000;

  if (diffInMin < 10) return;
  return dispatch({
    type: action.apiCallBegan.type,
    payload: {
      url: url,
      onStart: bugsRequested.type,
      onError: bugsRequestFailed.type,
      onSuccess: bugsReceived.type,
    },
  });
};

export const addBug = (bug: Bug) => (dispatch: Dispatch, getState: getState) => {
  dispatch({ type: bugAdded.type, payload: bug });
};

//Selector

export const getBugByUser = (userId: string) =>
  createSelector(
    (state: StateInstance) => state.ui.bugs,
    (bugs) => bugs.list.filter((bug: Bug) => bug.userId === userId)
  );
