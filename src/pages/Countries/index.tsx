import React, { useState } from 'react';
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
  const [inputValue, setInputValue] = useState('');

  const { loading, error, data } = useQuery<QueryType>(GET_COUNTRIES, {
    variables: { searchQuery: inputValue }
  });

  return (
    <Container>
      <Header title="Países" description="Busque pelos países de seu interesse" />

      <MainPane>
        <SearchField>
          <input 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Buscar..."
          />

          <button type="button">
            Buscar
          </button>
        </SearchField>
        
        <CountriesList>
          {loading && <p>Carregando...</p>}
          {error && <p>{error.name}: {error.message}</p>}
          {data?.Country.map(country => (
            <CountryCard key={country._id} country={country} />
          )) }
        </CountriesList>
      </MainPane>
    </Container>
  );
}

export default Countries;
