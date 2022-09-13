export interface Action<T, P extends unknown = undefined> {
  payload: P extends infer Q ? Q : undefined;
  type: T;
}

export enum Actions {
  GET_COUNTRY_LIST_START = "@country/GET_COUNTRY_LIST_START",
  GET_COUNTRY_LIST_FULFILLED = "@country/GET_COUNTRY_LIST_FULFILLED",
  GET_COUNTRY_LIST_REJECTED = "@country/GET_COUNTRY_LIST_REJECTED",
}

export interface ICountry {
  name: string;
  capital: string;
  region: string;
  subregion: string;
  languages: object;
  latlng: number[];
  area: number;
  population: number;
}

export type CountryState = {
  countryList: ICountry[];
  isLoading: boolean;
}

type GetCountryListRequest = Action<typeof Actions.GET_COUNTRY_LIST_START>;
type GetCountryListAction = Action<typeof Actions.GET_COUNTRY_LIST_FULFILLED, ICountry[]>;
type GetCountryListError = Action<typeof Actions.GET_COUNTRY_LIST_REJECTED>;

export type CountryTypes =
  | GetCountryListRequest
  | GetCountryListAction
  | GetCountryListError;