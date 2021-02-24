import React from 'react';
import { 
  Header, 
  CountriesList, 
  CountryCard, 
  MainPane 
} from '../../components';
import { Country } from '../../models/Country';

import { Container, SearchField } from './styles';

const country: Country =
  {
    name: 'Brasil',
    area: 8516000,
    population: 209000000,
    capital: 'Brasília',
    numericCode: '076',
    topLevelDomains: [
      { name: '.br' }
    ]
  };

function Countries() {
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
          <CountryCard country={country} />
        </CountriesList>
      </MainPane>
    </Container>
  );
}

export default Countries;
