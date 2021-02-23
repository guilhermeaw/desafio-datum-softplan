import React, { ReactNode } from 'react';

import { Container } from './styles';

type MainPaneProps = {
  children: ReactNode
}

function MainPane({ children }: MainPaneProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default MainPane;