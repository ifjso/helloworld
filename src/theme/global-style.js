import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: #1a1919;
    color: #999
  }

  body {
    transition: background-color 0.5s ease;
  }

  body.light-mode {
    background-color: #fff;
    color: #000;
  }

  body.dark-mode {
    background-color: #1a1919;
    color: #999;
  }
`;
