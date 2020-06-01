import { createGlobalStyle } from 'styled-components';
import { codeBlock } from './code-block';
import { fontFamily } from './typography';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: #1a1919;
    color: #999;
    ${fontFamily}
  }

  body {
    transition: background-color 0.5s ease;

    &.light {
      background-color: #fff;
      color: #000;
    }

    &.dark {
      background-color: #1a1919;
      color: #999;
    }
  }

  ${codeBlock}
`;
