import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, auto));
  
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
