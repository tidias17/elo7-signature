import { createGlobalStyle } from 'styled-components'
import { theme } from 'theme'

export const StyledGlobal = createGlobalStyle`
  a, a:hover, ul, li, p, span, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    text-transform: none;
    font-style: normal;
    text-decoration: none;
    line-height: 1.5;
  }
  * {
    box-sizing: border-box;
    font-family: ${theme.fontFamily.sourceSansPro};
    color: ${theme.colors.sampa};
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-size: 16px;
    background-color: ${theme.colors.white};
    font-family: ${theme.fontFamily.sourceSansPro};
    margin: 0;
    padding: 0;
    margin-top: 64px;
  }
  ul {
    list-style: none;
  }
  a, a:hover {
    text-decoration: none;
    color: ${theme.colors.darker};
  }
  .container-position {
    max-width: 1200px;
    margin: 0px auto;
  }
`
