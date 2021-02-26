import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f5f5f5;
    color: #000;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  input {
    border: 1px solid #DCE2E6;
  }

  span, p, label {
    color: #617480;
    font-size: 12px;
  }
`;
