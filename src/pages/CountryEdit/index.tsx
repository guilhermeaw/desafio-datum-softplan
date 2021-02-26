import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';
import { Header, MainPane } from '../../components';
import { Country as CountryModel } from '../../models/Country';
import { GET_COUNTRY } from '../../queries/queries';

import { Container, EditorPane, FlagContainer } from './styles';

type QueryType = {
  Country: CountryModel[];
}

type RouteProps = {
  id: string;
}

function CountryEdit({match}: RouteComponentProps<RouteProps>) {
  const { loading, error, data } = useQuery<QueryType>(GET_COUNTRY, {
    variables: { id: match.params.id }
  });
  const [country, setCountry] = useState({} as CountryModel | undefined);
  const [areaInputValue, setAreaInputValue] = useState('');
  const [populationInputValue, setPopulationInputValue] = useState('');

  useEffect(() => {
    const countryValue = data?.Country[0];

    if (countryValue !== undefined) {
      setCountry(countryValue);
      setAreaInputValue(countryValue.area.toString());
      setPopulationInputValue(countryValue.population.toString());
    }
  }, [data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCountry = {
      ...country, 
      area: Number(areaInputValue), 
      population: Number(populationInputValue)
    }
  };

  return (
    <Container>
      <Header 
        showNavigationButton 
        title="Editar país" 
        description="Edite as informações do país selecionado" 
      />

      <MainPane>
        <EditorPane>
          <header>
            <h1>Editar país</h1>
          </header>

          {loading && <p>Carregando...</p>}
          {error && <p>{error.name}: {error.message}</p>}
          {country && (
            <form onSubmit={handleSubmit}>
              <FlagContainer imageUrl={country.flag?.svgFile} />
              
              <h1>{country.name}</h1>

                <div>
                  <label htmlFor="area">Área (km²)</label>
                  <input 
                    value={areaInputValue} 
                    id="area" 
                    type="number" 
                    onChange={e => setAreaInputValue(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="population">População</label>
                  <input 
                    value={populationInputValue} 
                    id="population" 
                    type="number" 
                    onChange={e => setPopulationInputValue(e.target.value)}
                  />
                </div>

                <button type="submit"><span>Salvar alterações</span></button>
            </form>
          )}
        </EditorPane>
      </MainPane>
    </Container>
  )
}

export default CountryEdit;
