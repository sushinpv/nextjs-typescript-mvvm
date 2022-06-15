interface Country {
  id: number;
  name: string;
  country_code: string;
  iso2: string;
}

interface State {
  id: number;
  name: string;
  state_code: string;
  iso2: string;
}

interface City {
  id: number;
  name: string;
  iso2: string;
}

interface listStates {
  [countryCode: string]: State[];
}

interface listCities {
  [countryStateCode: string]: City[];
}

interface Cities {
  list: listCities;
  loading: boolean;
  loaded: boolean;
  lastFetch: number;
}

interface States {
  list: listStates;
  loading: boolean;
  loaded: boolean;
  lastFetch: number;
}

interface Countries {
  list: Country[];
  loading: boolean;
  loaded: boolean;
  lastFetch: number;
}
interface Address {
  countries: Countries;
  states: States;
  cities: Cities;
}
