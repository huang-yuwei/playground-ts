import { createGlobalStyle } from 'styled-components';
import { NORMALIZE } from './normalize';
import { FONT_FAMILY } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${NORMALIZE};

  html {
    font-family: ${FONT_FAMILY};
  }
  body {
    overflow: hidden;
  }
`;
