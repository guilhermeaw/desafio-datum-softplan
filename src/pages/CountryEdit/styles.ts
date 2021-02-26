import styled from 'styled-components';

type FlagContainerProps = {
  imageUrl: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  height: 100vh;
`;

export const EditorPane = styled.main`
  background-color: #fff;
  border-radius: 8px;

  header {
    background-color: #DCE2E6;
    border: 1px solid #ccc;
    border-radius: 8px;

    h1 {
      line-height: 64px;
      padding: 1rem 2rem;
    }
  }

  form {
    padding: 2rem;

    h1 {
      border-bottom: 1px solid #DCE2E6;
      line-height: 64px;
      margin-bottom: 3rem;
    }

    div {
      display: flex;
      flex-direction: column;

      margin-bottom: 2rem;

      label {
        font-size: 14px;
        line-height: 24px;
      }

      input {
        border-radius: 8px;
        padding: 1rem;

        &:focus {
          border: 1px solid #000;
        }
      }
    }

    button {
      width: 100%;
      height: 64px;
      border-radius: 8px;
    }
  }
`;

export const FlagContainer = styled.div<FlagContainerProps>`
  background: url(${props => props.imageUrl}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 20rem;
  border-radius: 8px;
  margin: 1rem 0 1rem;
`;
