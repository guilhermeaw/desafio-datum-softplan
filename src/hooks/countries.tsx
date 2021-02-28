import React, { createContext, useCallback, useState, useContext } from 'react';
import { ApolloError, useLazyQuery } from '@apollo/client';
import { Country as CountryModel } from '../models/Country';
import { GET_COUNTRIES } from '../operations/queries/queries';

type CountryContextData = {
  countries: CountryModel[];
  loading: boolean;
  error: ApolloError | undefined;
  updateCountry(country: CountryModel): void;
  getCountry(id: string): CountryModel | undefined;
}

type CountryState = {
  countries: CountryModel[];
  loading: boolean;
  error: ApolloError | undefined;
}

type QueryType = {
  Country: CountryModel[];
}

const CountryContext = createContext<CountryContextData>({} as CountryContextData);

const CountryProvider: React.FC = ({ children }) => {
  const [getCountries, { loading, error, data: queryData }] = useLazyQuery<QueryType>(GET_COUNTRIES, {
    variables: { searchQuery: '' }
  });
  
  const [data, setData] = useState<CountryState>(() => {
    const countries = localStorage.getItem('@GraphCountries:countries');

    if (countries) {
      const countriesObject = JSON.parse(countries) as CountryModel[];
      
      return { countries: countriesObject, loading: false, error: undefined };
    }

    return {
      countries: queryData !== undefined ? queryData.Country : [],
      loading,
      error
    };
  });

  React.useEffect(() => {
    getCountries({ variables: { searchQuery: '' } });

    const countryList = queryData !== undefined ? queryData.Country : [];

    setData({ countries: countryList, error, loading });
    localStorage.setItem('@GraphCountries:countries', JSON.stringify(countryList));
  }, [error, loading, queryData, getCountries]);

  const updateCountry = useCallback(
    (country: CountryModel) => {
      const { countries } = data;

      const findCountry = countries.find(countryIterator => country._id === countryIterator._id);

      if (findCountry) {
        const newCountryList = countries.map(countryIterator => {
          if (countryIterator._id === country._id) {
            return country;
          }

          return countryIterator;
        });

        setData({ countries: newCountryList, loading: false, error: undefined });
        localStorage.setItem('@GraphCountries:countries', JSON.stringify(newCountryList));
      }
    },
    [data],
  );

  const getCountry = useCallback((id: string) => {
    const { countries } = data;

    const findCountry = countries.find(countryIterator => countryIterator._id === id);

    console.log('findCOuntry', findCountry);

    return findCountry;
  }, [data]);

  return (
    <CountryContext.Provider
      value={{ countries: data.countries, error: data.error, loading: data.loading, updateCountry, getCountry }}
    >
      {children}
    </CountryContext.Provider>
  );
};

function useCountry(): CountryContextData {
  const context = useContext(CountryContext);

  return context;
}

export { CountryProvider, useCountry };
