import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 0 auto;
  padding: 1rem 8rem;
  box-shadow: 0px 0px 10px rgba(178, 178, 178, 0.25);
  background-color: #fafafa;

  @media (max-width: 768px) {
    padding: 1rem 4rem;
  }
`;

export const HeaderDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowBackButton = styled.button`
  border-radius: 4px;
  border: 1px solid #DCE2E6;
  height: 40px;
  width: 40px;
  margin-right: 16px;
`;
