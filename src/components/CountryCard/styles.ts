import styled from 'styled-components';

type FlagContainerProps = {
  imageUrl: string;
}

export const Container = styled.button`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(178, 178, 178, 0.25);
  transition: 0.2s all;

  &:active {
    transform: scale(1.1);
  }
`;

export const FlagContainer = styled.div.attrs<FlagContainerProps>(props => ({
  style: {
    background: `url(${props.imageUrl}) no-repeat center`,
    backgroundSize: 'cover'
  },
}))<FlagContainerProps>`
  height: 180px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const InfoContainer = styled.div`
  padding: 1rem;
  text-align: left;

  h1 {
    font-size: 20px;
  }

  span {
    font-size: 12px;
    line-height: 28px;
    display: block;
  }
`;
