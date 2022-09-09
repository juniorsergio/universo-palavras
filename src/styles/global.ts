import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --gray-600: #323238;
        --gray-800: #202024;
    
        --blue-light: #00BDAF;
        --blue-dark: #142C5A;

        --green: #14c061;
        --red: #F75A68;
        --orange: #D14524;
    }
    
    * {  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: url('stilingue.png'), radial-gradient(var(--gray-800), black);
        background-size: 50vh, 100%;
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
    width: 90vw;
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
    flex: 1;

    width: 100%;
    margin-bottom: 20px;

    animation: fadein 2s;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (max-width: 920px) {
        flex-direction: column;
    }
`