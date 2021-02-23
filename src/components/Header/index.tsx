import React from 'react';

import { Container } from './styles';

type HeaderProps = {
  title: string;
  description: string;
}

function Header({ title, description }: HeaderProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <span>{description}</span>
    </Container>
  );
}

export default Header;