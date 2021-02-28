import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { FiEdit, FiGlobe, FiMap, FiMapPin, FiUsers } from 'react-icons/fi';
import { Marker } from 'react-map-gl';
import { MainPane, Header } from '../../components';
import { Country as CountryModel } from '../../models/Country';

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
import { useCountry } from '../../hooks/countries';

type RouteProps = {
  id: string;
}

function CountryDetails({ match }: RouteComponentProps<RouteProps>) {
  const [country, setCountry] = useState({} as CountryModel);
  const [viewport, setViewport] = useState({});
  
  const history = useHistory();
  const { loading, error, getCountry } = useCountry();

  useEffect(() => {
    const findCountry = getCountry(match.params.id);

    if (findCountry !== undefined) {
      setCountry(findCountry);
      setViewport({
        latitude: findCountry.location.latitude,
        longitude: findCountry.location.longitude,
        zoom: 4
      });
    }
  }, [getCountry, match.params.id]);

  const handleEditCountry = useCallback(() => {
    country && history.push(`/countries/${country._id}/edit`);
  }, [history, country]);
  
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
        {country && country.flag !== undefined && country.location !== undefined 
          && country.topLevelDomains !== undefined && (
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
                      <h2>{country.topLevelDomains.map(domain => domain.name).join(' ')}</h2>
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
