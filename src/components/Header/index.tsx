import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, ArrowBackButton, HeaderDetailsWrapper } from './styles';

type HeaderProps = {
  title: string;
  description: string;
  showNavigationButton?: boolean;
  children?: ReactNode;
}

function Header({ title, description, children, showNavigationButton = false }: HeaderProps) {
  const history = useHistory();
  
  const handleGoBack = () => {
    history.goBack();
  }
  
  return (
    <Container>
      <HeaderDetailsWrapper>
        {showNavigationButton && (
          <ArrowBackButton onClick={handleGoBack}>
            <FiArrowLeft size={16} />
          </ArrowBackButton>
        )}
        
        <div>
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
      </HeaderDetailsWrapper>
      
      {children && <div style={{ marginRight: 16 }}>{children}</div>}
    </Container>
  );
}

export default Header;