import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { Header, MainPane } from '../../components';
import { Country as CountryModel } from '../../models/Country';

import { Container, EditorPane, FlagContainer } from './styles';
import { useCountry } from '../../hooks/countries';

type RouteProps = {
  id: string;
}

function CountryEdit({match}: RouteComponentProps<RouteProps>) {
  const { loading, error, getCountry, updateCountry } = useCountry();

  const [country, setCountry] = useState({} as CountryModel | undefined);
  const [areaInputValue, setAreaInputValue] = useState('');
  const [populationInputValue, setPopulationInputValue] = useState('');

  const history = useHistory();

  useEffect(() => {
    const findCountry = getCountry(match.params.id);

    setCountry(findCountry);
    
    if (findCountry !== undefined) {
      setCountry(findCountry);
      setAreaInputValue(findCountry.area.toString());
      setPopulationInputValue(findCountry.population.toString());
    }
  }, [getCountry, match.params.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCountry = {
      ...country, 
      area: Number(areaInputValue), 
      population: Number(populationInputValue)
    } as CountryModel;

    updateCountry(newCountry);

    history.goBack();
  };

  return (
    <Container>
      <Header 
        showNavigationButton 
        title="Editor de país" 
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
