import React from 'react';

import { 
  Container, 
  CountriesContainer, 
  CountriesList, 
  CountryCard,
  FlagContainer,
  InfoContainer,
  InfoWrapper
} from './styles';

function Countries() {
  return (
    <Container>
      <header>
        <h1>Países</h1>
        <span>Busque pelos países de seu interesse</span>
      </header>

      <CountriesContainer>
        <CountriesList>
          <CountryCard>
            <FlagContainer />

            <InfoContainer>
              <h1>Brasil</h1>
              <InfoWrapper>
                <div>
                  <strong>Capital</strong>
                  <span>Brasília</span>
                </div>
                
                <div>
                  <strong>Área</strong>
                  <span>8.516.000 km²</span>
                </div>
              </InfoWrapper>

              <InfoWrapper>
                <div>
                  <strong>População</strong>
                  <span>209000000</span>
                </div>

                <div>
                  <strong>Top-level-domain</strong>
                  <span>n/d</span>
                </div>
              </InfoWrapper>
            </InfoContainer>
          </CountryCard>
        </CountriesList>
      </CountriesContainer>
    </Container>
  );
}

export default Countries;