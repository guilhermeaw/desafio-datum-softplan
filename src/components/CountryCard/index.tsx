import React from 'react';

import { Container, FlagContainer, InfoContainer, InfoWrapper } from './styles';

interface TopLevelDomain {
  name: string;
}

export interface Country {
  name: string;
  capital: string;
  area: number;
  population: number;
  topLevelDomains: TopLevelDomain[];
}

type CountryCardProps = {
  country: Country;
}

function CountryCard({ country }: CountryCardProps) {
  return (
    <Container>
        <FlagContainer />

        <InfoContainer>
          <h1>{country.name}</h1>
          <InfoWrapper>
            <div>
              <strong>Capital</strong>
              <span>{country.capital}</span>
            </div>
            
            <div>
              <strong>Área</strong>
              <span>{country.area}</span>
            </div>
          </InfoWrapper>

          <InfoWrapper>
            <div>
              <strong>População</strong>
              <span>{country.population}</span>
            </div>

            <div>
              <strong>Top-level-domain</strong>
              <span>{country.topLevelDomains[0]?.name}</span>
            </div>
          </InfoWrapper>
        </InfoContainer>
      </Container>
  );
}

export default CountryCard;
