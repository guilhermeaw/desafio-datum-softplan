import React from 'react';
import { useLocation } from 'react-router-dom';
import { MainPane, Header } from '../../components';
import { Country } from '../../models/Country';

import { Container } from './styles';

type StateType = {
  country: Country;
}

function CountryDetails() {
  const { state } = useLocation<StateType>();
  const { country} = state;

  return (
    <Container>
      <Header title="Detalhes" description="Detalhes do país selecionado" />
      
      <MainPane>
        <h1>{country.name}</h1>

        
      </MainPane>
    </Container>
  );
}

export default CountryDetails;