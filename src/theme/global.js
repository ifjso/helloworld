import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';
import { CodeBlock } from './code-block';
import { FontFamily, FontWeight } from './typography';
import 'normalize.css';

export const Media = Object.freeze({ BASE: '1170px' });

export const GlobalStyle = createGlobalStyle`

  html {
    background-color: var(--black-russian);
    color: var(--light-gray);
    ${FontFamily}
    ${FontWeight}
    ${Colors}
  }

  body {
    transition: background-color 0.5s ease;
    background-color: var(--background-color);
    color: var(--color);

    &.light {
      --background-color: var(--white);
      --color: var(--black);
    }

    &.dark {
      --background-color: var(--black-russian);
      --color: var(--light-gray);
    }
  }

  ${CodeBlock}
`;
