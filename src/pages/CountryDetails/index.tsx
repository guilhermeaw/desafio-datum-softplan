import React, { useCallback, useMemo, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { FiEdit, FiGlobe, FiMap, FiMapPin, FiUsers } from 'react-icons/fi';
import { useQuery } from '@apollo/client';
import { Marker } from 'react-map-gl';
import { MainPane, Header } from '../../components';
import { Country as CountryModel } from '../../models/Country';
import { GET_COUNTRY } from '../../queries/queries';

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

type RouteProps = {
  id: string;
}

type QueryType = {
  Country: CountryModel[];
}

function CountryDetails({ match }: RouteComponentProps<RouteProps>) {
  const history = useHistory();
  const { loading, error, data } = useQuery<QueryType>(GET_COUNTRY, {
    variables: { id: match.params.id }
  });

  const [viewport, setViewport] = useState(data?.Country[0] !== undefined ? {
    latitude: data.Country[0].location.latitude,
    longitude: data.Country[0].location.longitude,
    zoom: 4
  } : {});

  const handleEditCountry = useCallback(() => {
    console.log(data?.Country[0])
    
    if (data?.Country[0] !== undefined) {
      const country = data.Country[0];

      history.push(`/countries/${country._id}/edit`);
    }
  }, [history, data]);
  
  const domains = useMemo(() => {
    return data?.Country[0] !== undefined
      && data.Country[0].topLevelDomains.map(domain => domain.name).join(' ')
  }, [data])

  const country = data?.Country[0];

  return (
    <Container>
      <Header showNavigationButton title="Detalhes" description="Detalhes do país selecionado">
        <EditCountryButton onClick={handleEditCountry}>
          <FiEdit size={16} style={{ marginRight: 8 }} />
          Editar país
        </EditCountryButton>
      </Header>
      
      <MainPane>
        {loading && <p>Carregando...</p>}
        {error && <p>{error.name}: {error.message}</p>}
        {country && (
          <>
            <FlagContainer imageUrl={country.flag.svgFile} />
          
            <CountryContainer>
              <CountryDetailsWrapper>
                <CountryDetailsWrapperHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h1>{country.name}</h1>
                    <p>Descrição do país</p>
                  </div>
    
                  <img src={country.flag.svgFile} alt="country-flag"/>
                </CountryDetailsWrapperHeader>
                
                <CountryDetailsCardsWrapper>
                  <CountryDetailItem>
                    <header>
                      <FiMapPin size={40} />
                    </header>
    
                    <div>
                      <h2>{country.capital}</h2>
                      <span>Capital</span>
                    </div>
                  </CountryDetailItem>
                  
                  <CountryDetailItem>
                    <header>
                      <FiMap size={40} />
                    </header>
    
                    <div>
                      <h2>{country.area} km²</h2>
                      <span>Área</span>
                    </div>
                  </CountryDetailItem>
    
                  <CountryDetailItem>
                    <header>
                      <FiUsers size={40} />
                    </header>
    
                    <div>
                      <h2>{country.population}</h2>
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
                  latitude={country.location.latitude}
                  longitude={country.location.longitude}
                >
                  <FiMapPin fill="red" size={24} />
                </Marker>
              </CountryMap>
            </CountryContainer>
          </>
        )}
      </MainPane>
    </Container>
  );
}

export default CountryDetails;
