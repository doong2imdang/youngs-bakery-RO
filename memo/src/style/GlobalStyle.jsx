import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  :root {
    --color-white: #ffffff;
    --color-black: #000000;
    --color-yellow: #FDFD54;
    --color-blue : #000079;
    --color-grey: #B0B0B0;
    --color-red: #EC1A1A;
  }
`;

export default GlobalStyles;
