import React, { ReactNode } from 'react';

import { Container } from './styles';

type CountriesListProps = {
  children?: ReactNode
}

function CountriesList({ children }: CountriesListProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default CountriesList;