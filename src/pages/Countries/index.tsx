import React from 'react';
import { useQuery } from '@apollo/client';

import { 
  Header, 
  CountriesList, 
  CountryCard, 
  MainPane 
} from '../../components';
import { Country as CountryModel } from '../../models/Country';
import { GET_COUNTRIES } from '../../queries/queries';

import { Container, SearchField } from './styles';

type QueryType = {
  Country: CountryModel[];
}

function Countries() {
  const { loading, error, data } = useQuery<QueryType>(GET_COUNTRIES);

  return (
    <Container>
      <Header title="Países" description="Busque pelos países de seu interesse" />

      <MainPane>
        <SearchField>
          <input type="text"/>
          <button type="button">
            Buscar
          </button>
        </SearchField>
        
        <CountriesList>
          {loading && <p>Carregando...</p>}
          {error && <p>{error.name}: {error.message}</p>}
          {console.log(data)}
          {data?.Country.map(country => (
            <CountryCard key={country.numericCode} country={country} />
          )) }
        </CountriesList>
      </MainPane>
    </Container>
  );
}

export default Countries;
