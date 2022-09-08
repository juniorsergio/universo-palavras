import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --gray-600: #323238;
        --gray-800: #202024;
    
        --blue-300: #00BDAF;
        --blue-500: #142C5A;

        --green-300: #14c061;
        --red-300: #F75A68;
    }
    
    * {  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: url('background.png'), radial-gradient(var(--gray-800), black);
        background-blend-mode: overlay;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;

        font: 1rem/1.5 "Poppins", sans-serif;
        color: var(--white);
        -webkit-font-smoothing: antialiased;
    }
`

export const Container = styled.div`
    width: 80vw;
    height: 100vh;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 920px) {
        width: 90vw;
    }
`

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    flex: 1;

    width: 100%;
    margin-bottom: 20px;

    @media (max-width: 920px) {
        flex-direction: column;
    }
`