import React from 'react';
import { MainPane, Header } from '../../components';

import { Container } from './styles';

function CountryDetails() {
  return (
    <Container>
      <Header title="Detalhes" description="Detalhes do país selecionado" />
      
      <MainPane>
        <h1>Country details page</h1>
      </MainPane>
    </Container>
  );
}

export default CountryDetails;