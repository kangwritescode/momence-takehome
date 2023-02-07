import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
       box-sizing: border-box;
    }
    body {
        background: rgb(249, 249, 250);
        font-family: 'Epilogue';
        margin: 16px;
    }
`
export default GlobalStyles;