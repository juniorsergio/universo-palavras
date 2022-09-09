import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 25%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vh;

    img {
        height: 50vh;
        animation: fadein 1s linear infinite alternate-reverse;
    }

    @keyframes fadein {
        from {
            opacity: 0.2;
        }
        to {
            opacity: 1;
        }
    }
`