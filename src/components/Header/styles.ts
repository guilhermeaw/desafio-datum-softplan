import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  margin: 0 auto;
  padding: 1rem 8rem;
  box-shadow: 0px 0px 10px rgba(178, 178, 178, 0.25);
  background-color: #fafafa;

  @media (max-width: 768px) {
    padding: 1rem 4rem;
  }
`;
