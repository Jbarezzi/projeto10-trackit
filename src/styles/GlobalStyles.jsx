import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
    }

    body {
        background-color: #F2F2F2;
    }

    p {
        font-family: "Lexend Deca", sans-serif;
    }
    `;

export default GlobalStyles;