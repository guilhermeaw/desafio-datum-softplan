import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  height: 100vh;
`;

export const SearchField = styled.div`
  display: flex;
  justify-content: center;
  
  width: 100%;
  margin-bottom: 2rem;

  input {
    padding: 0 16px;
    font-size: 16px;
    color: #617480;
    flex: 1;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  button {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #cecece;
    color: #000;
    padding: 1rem;
    font-weight: bold;
    font-size: 16px;
    width: 10rem;
  }
`;
