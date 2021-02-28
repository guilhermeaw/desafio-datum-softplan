import React, { useState } from 'react';

import { 
  Header, 
  CountriesList, 
  CountryCard, 
  MainPane 
} from '../../components';

import { Container, SearchField } from './styles';
import { useCountry } from '../../hooks/countries';

function Countries() {
  const [inputValue, setInputValue] = useState('');

  const { loading, error, countries } = useCountry();

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
          {countries.map(country => (
            <CountryCard key={country._id} country={country} />
          )) }
        </CountriesList>
      </MainPane>
    </Container>
  );
}

export default Countries;
