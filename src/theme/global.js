import { createGlobalStyle } from 'styled-components';
import { codeBlock } from './code-block';
import { fontFamily } from './typography';
import 'normalize.css';

export const Media = Object.freeze({ BASE: '1170px' });

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: #141319;
    color: #999;
    ${fontFamily}
  }

  body {
    transition: background-color 0.5s ease;
    background-color: var(--background-color);
    color: var(--color);

    &.light {
      --background-color: #fff;
      --color: #000;
    }

    &.dark {
      --background-color: #141319;
      --color: rgba(255, 255, 255, 0.8);
    }
  }

  ${codeBlock}
`;
