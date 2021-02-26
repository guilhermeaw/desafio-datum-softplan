import React, { useMemo, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { FiEdit, FiGlobe, FiMap, FiMapPin, FiUsers } from 'react-icons/fi';
import { Marker } from 'react-map-gl';
import { MainPane, Header } from '../../components';
import { Country } from '../../models/Country';

import { 
  Container, 
  EditCountryButton,
  FlagContainer, 
  CountryContainer,
  CountryDetailsWrapper,
  CountryDetailsWrapperHeader,
  CountryDetailItem,
  CountryDetailsCardsWrapper,
  CountryMap
} from './styles';

type StateType = {
  country: Country;
}

function CountryDetails() {
  const { state } = useLocation<StateType>();
  const [viewport, setViewport] = useState(state !== undefined ? {
    latitude: state.country.location.latitude,
    longitude: state.country.location.longitude,
    zoom: 4
  } : {});
  
  const domains = useMemo(() => {
    return state !== undefined 
      && state.country.topLevelDomains.map(domain => domain.name).join(' ')
  }, [state])

  if(state === undefined) return <Redirect to="/" />

  return (
    <Container>
      <Header showNavigationButton title="Detalhes" description="Detalhes do país selecionado">
        <EditCountryButton>
          <FiEdit size={16} style={{ marginRight: 8 }} />
          Editar país
        </EditCountryButton>
      </Header>
      
      <MainPane>
        <FlagContainer imageUrl={state.country.flag.svgFile} />
        
        <CountryContainer>
          <CountryDetailsWrapper>
            <CountryDetailsWrapperHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h1>{state.country.name}</h1>
                <p>Descrição do país</p>
              </div>

              <img src={state.country.flag.svgFile} alt="country-flag"/>
            </CountryDetailsWrapperHeader>
            
            <CountryDetailsCardsWrapper>
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
                  <h2>{domains}</h2>
                  <span>Domínios</span>
                </div>
              </CountryDetailItem>
            </CountryDetailsCardsWrapper>
          </CountryDetailsWrapper>

          <CountryMap
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            onViewportChange={setViewport}
            width="100%"
            height="560px"
          >
            <Marker 
              latitude={state.country.location.latitude}
              longitude={state.country.location.longitude}
            >
              <FiMapPin fill="red" size={24} />
            </Marker>
          </CountryMap>
        </CountryContainer>
      </MainPane>
    </Container>
  );
}

export default CountryDetails;
