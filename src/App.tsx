import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Routes from './routes';
import GlobalStyle from './styles/global';

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_CLIENT_URI,
  cache: new InMemoryCache()
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
