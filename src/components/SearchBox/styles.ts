import styled from "styled-components";

export const Container = styled.form`
    width: 60%;
    position: relative;

    padding: 15px 0;
    gap: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 920px) {
        width: 100%;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;

        position: absolute;
        right: 15px;

        img {
            height: 2rem;
            width: 2rem;
        }
    }
`

export const Input = styled.input`
    width: 100%;
    height: 50px;

    padding: 15px;

    background: var(--gray-600);
    color: var(--white);
    font-size: 1rem;

    border: 1px solid black;
    border-radius: 50px;

    &:focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--blue-300);
    }
`