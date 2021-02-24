import React, { ReactNode } from 'react';

import { Container } from './styles';

type HeaderProps = {
  title: string;
  description: string;
  children?: ReactNode;
}

function Header({ title, description, children }: HeaderProps) {
  return (
    <Container>
      {children && <div style={{ marginRight: 16 }}>{children}</div>}
      
      <div>
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
    </Container>
  );
}

export default Header;