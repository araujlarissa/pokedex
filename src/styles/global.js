import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    height: 100vh;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
    color: #333;

    background: #f5f5f5;
  }
`;
