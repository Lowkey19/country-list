import { Dispatch, useReducer } from 'react';

import { api } from '../../helpers/api';
import { defaultState } from '../../providers/country';
import { country } from './reducers';
import { Actions, ICountry, CountryState, CountryTypes } from './types';

const initialState: CountryState = defaultState.store;

export const useCountry = (): [CountryState, Dispatch<CountryTypes>] => {
  const [state, dispatch] = useReducer(country, initialState);
  return [state, dispatch];
}

export async function getCountryList(dispatch: Dispatch<CountryTypes>): Promise<void> {
  dispatch({ type: Actions.GET_COUNTRY_LIST_START, payload: undefined });
  try {
    const { data } = await api({
      url: '/all',
      method: 'get',
    });

    const countriesData = data.map((d: any) => {
      return {
        name: d.name.common || '',
        capital: d.capital && d.capital.length ? d.capital[0] : '',
        region: d.region || '',
        subregion: d.subregion || '',
        languages: { ...d.languages } || {},
        latlng: d.latlng || [],
        area: d.area || 0,
        population: d.population || 0,
      } as ICountry;
    })

    dispatch({ type: Actions.GET_COUNTRY_LIST_FULFILLED, payload: countriesData });
  } catch (e) {
    dispatch({ type: Actions.GET_COUNTRY_LIST_REJECTED, payload: undefined });
  }
}
