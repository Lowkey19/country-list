import { Actions, CountryState, CountryTypes } from "./types";

export function country(state: CountryState, action: CountryTypes): CountryState {
  switch (action.type) {
    case Actions.GET_COUNTRY_LIST_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case Actions.GET_COUNTRY_LIST_FULFILLED: {
      return {
        ...state,
        countryList: action.payload,
        isLoading: false,
      }
    }
    case Actions.GET_COUNTRY_LIST_REJECTED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default:
      return state;
  }
}