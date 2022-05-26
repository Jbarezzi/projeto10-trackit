import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
    }

    body {
        background-color: #FFFFFF;
    }

    p {
        font-family: "Lexend Deca", sans-serif;
    }
    `;

export default GlobalStyles;