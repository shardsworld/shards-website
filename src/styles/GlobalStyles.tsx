import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg: #F8FDF2;
        /* --main: #172437; */
        /* --main: #003482; */
        --main: #0f2c57;
        --sub: #647AAA;
        --primary: #0082D8;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 10px;
        font-family: 'aeonik', sans-serif;

        -ms-overflow-style: none;
        scrollbar-width: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    div {
        color: var(--main);
    }

    button {
        background: none;
        border: none;
        outline: none;
    }
    
    input {
        border: none;
        outline: none;
        background: none;
        -moz-appearance: textfield;
        appearance: textfield;

        // Remove arrows from number input
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    a {
        text-decoration: none;
    }
`;

const GlobalStyles = (): JSX.Element => {
  return <GlobalStyle />;
};

export default GlobalStyles;
