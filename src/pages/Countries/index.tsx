import React from 'react';
import { Header, CountriesList, CountryCard } from '../../components';
import { Country } from '../../models/Country';

import { Container, CountriesContainer } from './styles';

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

      <CountriesContainer>
        <CountriesList>
          <CountryCard country={country} />
        </CountriesList>
      </CountriesContainer>
    </Container>
  );
}

export default Countries;
