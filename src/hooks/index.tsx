import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

import { CountryProvider } from './countries';

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_CLIENT_URI,
  cache: new InMemoryCache()
});

const AppProvider: React.FC = ({ children }) => (
  <ApolloProvider client={client}>
    <CountryProvider>{children}</CountryProvider>
  </ApolloProvider>
);

export default AppProvider;
