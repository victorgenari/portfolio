import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;
        list-style: none;
        font-family: 'Poppins', Arial, sans-serif;
        font-weight: 400;

        a {
            color: #000000;
        }
    }

    html {

        scroll-behavior: smooth;

        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        
    }

    body {
        /* Isso irá ajudar a fonte ficar mais detalhada/nítida entre os navegadores */
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    // Tudo que estiver desabilitado na aplicação, irá pegar esses estilos
    [disabled] {
        opacity: 0.8;
        cursor: not-allowed;
    }

`