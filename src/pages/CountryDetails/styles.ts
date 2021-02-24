import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  height: 100vh;
`;

export const ArrowBackButton = styled.button`
  border-radius: 4px;
  border: 1px solid #DCE2E6;
  height: 40px;
  width: 40px;
`;

export const FlagContainer = styled.div`
  height: 10rem;
  margin: -2rem 0 1rem;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background: url("https://restcountries.eu/data/bra.svg") no-repeat center;
  background-size: cover;
`;
