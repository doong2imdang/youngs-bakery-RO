import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  button {
    border: 0;
    background: #b0b0b0;
    box-shadow: inset 1px 1px 1px white, inset -1px -1px 1px black;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: var(--color-blue);
  }

  :root {
    --color-white: #ffffff;
    --color-black: #000000;
    --color-yellow: #FDFD54;
    --color-blue : #000079;
    --color-grey: #B0B0B0;
    --color-red: #EC1A1A;
  }

  body, button, input {
    font-family: "DungGeunMo"
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
