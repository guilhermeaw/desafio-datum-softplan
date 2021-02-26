import styled from 'styled-components';
import MapGL from 'react-map-gl';

type FlagContainerProps = {
  imageUrl: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  height: 100vh;
`;

export const EditCountryButton = styled.button`
  display: flex;
  align-items: flex-end;

  border-radius: 8px;
  border: 1px solid #DCE2E6;
  padding: 16px;
`;

export const FlagContainer = styled.div<FlagContainerProps>`
  min-height: 16rem;
  margin: -2rem 0 0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background: url(${props => props.imageUrl}) no-repeat center;
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

export const CountryDetailsWrapperHeader = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 64px;
    border-radius: 4px;
  }

  @media (max-width: 650px) {
    flex-direction: column;

    img {
      margin: 1rem 0;
      width: 80%;
      height: auto;
    }
  }
`;

export const CountryDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #DCE2E6;
  min-width: 200px;
  transition: 0.3s all;

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
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CountryMap = styled(MapGL)`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: 1px solid #fff;
`;
