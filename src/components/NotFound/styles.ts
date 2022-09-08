import styled from "styled-components";

export const Container = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 20px;

    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    a {
        color: var(--blue-300);
        transition: color 0.2s;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: var(--blue-500);
        }
    }
`