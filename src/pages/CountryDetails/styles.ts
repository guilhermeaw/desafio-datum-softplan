import styled from 'styled-components';
import { StaticMap } from 'react-map-gl';

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
  min-height: 10rem;
  margin: -2rem 0 0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background: url("https://restcountries.eu/data/bra.svg") no-repeat center;
  background-size: cover;
`;

export const CountryContainer = styled.div`
  margin: 2rem 0 1rem;
  height: auto;

  h1 {
    font-size: 48px;
  }
`;

export const CountryDetailsWrapper = styled.div`
  background-color: #e8e8e8;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 1rem 2rem;
`;

export const CountryDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #DCE2E6;
  width: 180px;
  transition: 0.3s all;

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  header {
    padding: 1.5rem;
    border-bottom: 1px solid #DCE2E6;
  }

  div {
    display: flex;
    flex-direction: column;

    padding: 3rem 1.5rem 2rem;
    user-select: none;

    h2 {
      font-size: 21px;
      margin-bottom: 0.5rem;
    }
    
    span {
      margin-right: 4rem;
      line-height: 22px;
    }
  }
`;

export const CountryDetailsCardsWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 180px));
`;

export const CountryMap = styled(StaticMap)`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: 1px solid #fff;
`;
