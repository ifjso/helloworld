import { createGlobalStyle } from 'styled-components';
import { codeBlock } from './code-block-style';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: #1a1919;
    color: #999
  }

  body {
    transition: background-color 0.5s ease;

    &.light-mode {
      background-color: #fff;
      color: #000;
    }

    &.dark-mode {
      background-color: #1a1919;
      color: #999;
    }
  }

  ${codeBlock}
`;
