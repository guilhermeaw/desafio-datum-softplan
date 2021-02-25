import React from 'react';
import { useHistory } from 'react-router-dom';
import { Country } from '../../models/Country';

import { Container, FlagContainer, InfoContainer } from './styles';

type CountryCardProps = {
  country: Country;
}

function CountryCard({ country }: CountryCardProps) {
  const history = useHistory();
  
  const handleNavigateToCountry = () => {
    history.push({
      pathname: `/countries/${country.numericCode}`,
      state: { country }
    });
  }
  
  return (
    <Container onClick={handleNavigateToCountry}>
        <FlagContainer imageUrl={country.flag.svgFile} />

        <InfoContainer>
          <h1>{country.name}</h1>
          <span>{country.capital}</span>
        </InfoContainer>
      </Container>
  );
}

export default CountryCard;
