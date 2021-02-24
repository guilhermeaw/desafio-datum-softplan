import React, { useMemo } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { FiArrowLeft, FiGlobe, FiMap, FiMapPin, FiUsers } from 'react-icons/fi';
import { MainPane, Header } from '../../components';
import { Country } from '../../models/Country';

import { 
  Container, 
  ArrowBackButton, 
  FlagContainer, 
  CountryContainer,
  CountryDetailItem,
  CountryDetailsWrapper
} from './styles';

type StateType = {
  country: Country;
}

function CountryDetails() {
  const history = useHistory();
  const { state } = useLocation<StateType>();

  const handleGoBack = () => {
    history.goBack();
  }

  const getDomains = useMemo(() => {
    return state !== undefined 
      && state.country.topLevelDomains.map(domain => domain.name).join(',')
  }, [state])

  return state !== undefined ? (
    <Container>
      <Header title="Detalhes" description="Detalhes do país selecionado">
        <ArrowBackButton onClick={handleGoBack}>
          <FiArrowLeft size={16} />
        </ArrowBackButton>
      </Header>
      
      <MainPane>
        <FlagContainer />
        
        <CountryContainer>
          <h1>{state.country.name}</h1>
          <p>Descrição do país</p>
          
          <CountryDetailsWrapper>
            <CountryDetailItem>
              <header>
                <FiMapPin size={40} />
              </header>

              <div>
                <h2>{state.country.capital}</h2>
                <span>Capital</span>
              </div>
            </CountryDetailItem>
            
            <CountryDetailItem>
              <header>
                <FiMap size={40} />
              </header>

              <div>
                <h2>{state.country.area} km²</h2>
                <span>Área</span>
              </div>
            </CountryDetailItem>

            <CountryDetailItem>
              <header>
                <FiUsers size={40} />
              </header>

              <div>
                <h2>{state.country.population}</h2>
                <span>População</span>
              </div>
            </CountryDetailItem>

            <CountryDetailItem>
              <header>
                <FiGlobe size={40} />
              </header>

              <div>
                <h2>{getDomains}</h2>
                <span>Domínios</span>
              </div>
            </CountryDetailItem>
          </CountryDetailsWrapper>
        </CountryContainer>
      </MainPane>
    </Container>
  ) : (
    <Redirect to="/" />
  );
}

export default CountryDetails;
