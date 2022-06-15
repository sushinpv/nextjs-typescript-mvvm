import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { createSelector } from "reselect";

import * as action from "../api-action-types/api";

const urlCountries = "api/address?type=COUNTRIES";
const urlStates = "api/address?type=STATES";
const urlCities = "api/address?type=CITIES";

//Slice => reducer and actions
const slice = createSlice({
  name: "address",
  initialState: <Address>{
    countries: {
      list: [],
      lastFetch: 0,
      loaded: false,
      loading: false,
    },
    states: {
      list: new Object(),
      lastFetch: 0,
      loaded: false,
      loading: false,
    },
    cities: {
      list: new Object(),
      lastFetch: 0,
      loaded: false,
      loading: false,
    },
  },
  reducers: {
    addressCountriesRequested: (address: Address, action) => {
      address.countries.loading = true;
      address.countries.loaded = false;
    },

    addressCountriesRequestFailed: (address: Address, action) => {
      address.countries.loading = false;
      address.countries.loaded = false;
    },

    addressStatesRequested: (address: Address, action) => {
      address.states.loading = true;
      address.states.loaded = false;
    },

    addressStatesRequestFailed: (address: Address, action) => {
      address.states.loading = false;
      address.states.loaded = false;
    },

    addressCitiesRequested: (address: Address, action) => {
      address.cities.loading = true;
      address.cities.loaded = false;
    },

    addressCitiesRequestFailed: (address: Address, action) => {
      address.cities.loading = false;
      address.cities.loaded = false;
    },

    addressCountriesReceived: (address: Address, action) => {
      address.countries.list = action.payload.data;
      address.countries.loading = false;
      address.countries.loaded = true;
      address.countries.lastFetch = Date.now();
    },

    addressStatesReceived: (address: Address, action) => {
      const { data, reducerData } = action.payload;
      address.states.list[reducerData.countryCode] = data;
      address.states.loading = false;
      address.states.loaded = true;
      address.states.lastFetch = Date.now();
    },

    addressCitiesReceived: (address: Address, action) => {
      const { data, reducerData } = action.payload;
      address.cities.list[reducerData.countryCode + "-" + reducerData.stateCode] = data;
      address.cities.loading = false;
      address.cities.loaded = true;
      address.cities.lastFetch = Date.now();
    },
  },
});
const { addressCountriesReceived, addressCountriesRequested, addressCountriesRequestFailed, addressStatesReceived, addressStatesRequested, addressStatesRequestFailed, addressCitiesReceived, addressCitiesRequested, addressCitiesRequestFailed } = slice.actions;

export default slice.reducer;

//Action Creators

/**
 * Function which is used to load countries
 * @param dispatch
 * @param getState
 * @returns
 */
export const loadCountries = (dispatch: Dispatch, getState: any): any => {
  const { list } = getState().entities.address.countries;
  if (list.length != 0) return;

  return dispatch({
    type: action.apiCallBegan.type,
    payload: {
      url: urlCountries,
      onStart: addressCountriesRequested.type,
      onError: addressCountriesRequestFailed.type,
      onSuccess: addressCountriesReceived.type,
    },
  });
};

/**
 * Function which is used to load states
 * @param countryCode
 * @returns
 */
export const loadStates =
  (countryCode: string) =>
  (dispatch: Dispatch, getState: any): any => {
    const { list } = getState().entities.address.states;
    if (list[countryCode]) return;

    return dispatch({
      type: action.apiCallBegan.type,
      payload: {
        url: `${urlStates}&countryCode=${countryCode}`,
        onStart: addressStatesRequested.type,
        onError: addressStatesRequestFailed.type,
        onSuccess: addressStatesReceived.type,
        reducerData: {
          countryCode,
        },
      },
    });
  };

/**
 * Function which is used to load cities
 * @param countryCode
 * @param stateCode
 * @returns
 */
export const loadCities =
  (countryCode: string, stateCode: string) =>
  (dispatch: Dispatch, getState: any): any => {
    const { list } = getState().entities.address.cities;
    if (list[countryCode + "-" + stateCode]) return;

    return dispatch({
      type: action.apiCallBegan.type,
      payload: {
        url: `${urlCities}&countryCode=${countryCode}&stateCode=${stateCode}`,
        onStart: addressCitiesRequested.type,
        onError: addressCitiesRequestFailed.type,
        onSuccess: addressCitiesReceived.type,
        reducerData: {
          countryCode,
          stateCode,
        },
      },
    });
  };

// Selectors

export const getCountries = () =>
  createSelector(
    (state: any) => state.entities.address.countries,
    (countries: Countries) => ({
      countriesList: countries.list,
      countriesLoaded: countries.loaded,
      countriesLoading: countries.loading,
    })
  );

export const getStates = (countryCode: string) =>
  createSelector(
    (state: any) => state.entities.address.states,
    (states: States) => ({
      statesList: states.list[countryCode] || [],
      statesLoaded: states.loaded,
      statesLoading: states.loading,
    })
  );

export const getCities = (countryCode: string, stateCode: string) =>
  createSelector(
    (state: any) => state.entities.address.cities,
    (cities: Cities) => ({
      citiesList: cities.list[countryCode + "-" + stateCode] || [],
      citiesLoaded: cities.loaded,
      citiesLoading: cities.loading,
    })
  );
