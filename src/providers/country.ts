import { Dispatch, createContext } from 'react';
import { CountryState, CountryTypes } from '../api/country/types'

interface ICountryContext {
  store: CountryState;
  dispatch: Dispatch<CountryTypes>;
}

export const defaultState: ICountryContext = {
  store: {
    countryList: [],
    isLoading: false,
  },
  dispatch: (country: CountryTypes): void => {},
}

const CountryContext = createContext(defaultState);

export default CountryContext;