import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem 8rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    padding: 2rem 4rem;
  }
`;
