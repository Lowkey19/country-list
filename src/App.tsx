import React from 'react';

import MainView from './views/MainView';
import CountryContext from './providers/country';
import { useCountry } from './api/country';

function App() {
  const [country, countryDispatch] = useCountry();

  return (
    <CountryContext.Provider value={{ store: { ...country }, dispatch: countryDispatch }}>
      <MainView />
    </CountryContext.Provider>
  );
}

export default App;
