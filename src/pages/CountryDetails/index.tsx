import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MainPane, Header } from '../../components';
import { Country } from '../../models/Country';

import { Container, ArrowBackButton, FlagContainer } from './styles';

type StateType = {
  country: Country;
}

function CountryDetails() {
  const history = useHistory();
  const { state } = useLocation<StateType>();

  const handleGoBack = () => {
    history.goBack();
  }

  return state !== undefined ? (
    <Container>
      <Header title="Detalhes" description="Detalhes do país selecionado">
        <ArrowBackButton onClick={handleGoBack}>
          <FiArrowLeft size={16} />
        </ArrowBackButton>
      </Header>
      
      <MainPane>
        <FlagContainer />
        
        <h1>{state.country.name}</h1>

        
      </MainPane>
    </Container>
  ) : (
    <Redirect to="/" />
  );
}

export default CountryDetails;