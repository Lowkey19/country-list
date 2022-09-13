import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { getCountryList } from '../api/country';
import FoodRecipeContext from '../providers/country';
import CountryCard from '../components/CountryCard';

const TitleContainer = styled.div`
  font-size: 36px;
  margin: 30px 120px
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 100px;
`;

const MainView: FunctionComponent = () => {
  const { store, dispatch } = useContext(FoodRecipeContext);
  const [countryList, setCountryList] = useState(store.countryList);

  useEffect(() => {
    getCountryList(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setCountryList(store.countryList);
  }, [store.countryList]);

  return (
    <>
      <TitleContainer>Country List</TitleContainer>
      <Container>
        {countryList.map((country, key) => {
          return (
            <CountryCard key={key} country={country} />
          )
        })}
      </Container>
    </>
  )
}

export default MainView