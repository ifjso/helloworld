import { createGlobalStyle } from 'styled-components';
import { codeBlock } from './code-block';
import { fontFamily } from './typography';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: #141319;
    color: #999;
    ${fontFamily}
  }

  body {
    transition: background-color 0.5s ease;
    background-color: var(--backgroundColor);
    color: var(--color);

    &.light {
      --backgroundColor: #fff;
      --color: #000;
    }

    &.dark {
      --backgroundColor: #141319;
      --color: rgba(255, 255, 255, 0.8);
    }
  }

  ${codeBlock}
`;
