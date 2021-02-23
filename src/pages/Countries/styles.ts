import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  height: 100vh;
`;

export const CountriesContainer = styled.main`
  width: 100%;
  height: 100%;
  margin: 2rem auto;
  padding: 0 8rem;

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CountriesList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, auto));
  
  width: 100%;
  margin: 1rem 0 2rem 0;
`;

export const CountryCard = styled.button`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(178, 178, 178, 0.25);
  transition: 0.2s all;

  &:active {
    transform: scale(1.1);
  }
`;

export const FlagContainer = styled.div`
  height: 160px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background: url("https://restcountries.eu/data/bra.svg") no-repeat center;
  background-size: cover;
`;

export const InfoContainer = styled.div`
  padding: 1rem;

  h1 {
    line-height: 48px;
    border-bottom: 1px solid #e1e1e1;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50%;

    strong {
      margin-top: 0.5rem;
      font-size: 13px;
      line-height: 20px;
    }
  }
`;
