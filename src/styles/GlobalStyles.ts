'use client';

import { createGlobalStyle, css } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  ${() => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family: 'Poppins', 'Open Sans', sans-serif;
      font-size: ${theme.font.sizes.body};

      background-color: ${theme.colors.white};
      color: ${theme.colors.white};
    }
  `}

  .toastBody {
  
  font-size: 26px !important;
}
`;

export default GlobalStyles;
