import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';
import { CodeBlock } from './code-block';
import { FontFamily, FontWeight } from './typography';
import 'normalize.css';

export const Media = Object.freeze({ BASE: '1170px' });

export const GlobalStyle = createGlobalStyle`

  html {
    ${FontFamily}
    ${FontWeight}
    ${Colors}
  }

  body {
    background-color: var(--background-color);
    color: var(--color);

    &.light {
      --background-color: var(--white);
      --timeline-element-background-color: var(--white-smoke);
      --color: var(--black);
    }

    &.dark {
      --background-color: var(--black-russian);
      --timeline-element-background-color: var(--jet);
      --color: var(--light-gray);
    }
  }

  ${CodeBlock}
`;
