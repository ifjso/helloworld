import { css } from 'styled-components';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/command-line/prism-command-line.css';

export const CodeBlock = css`
  .gatsby-highlight-code-line {
    background-color: var(--deep-red);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 1em;
  }

  .gatsby-highlight pre[class*='language-'] {
    border-radius: 0.4em;
  }
`;
