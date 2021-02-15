import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'Lato';
    src: url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
  }
  body {
    margin : 0;
    background: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.text} !important;
    border-color: ${({ theme }) => theme.vertical_border} !important;
    font-family: 'Lato', sans-serif;
    transition: all 0.25s linear;
    /* a {
      color: ${({ theme }) => theme.text} !important;
      text-decoration : none;
    } */
  }
  `;

export default GlobalStyles;
