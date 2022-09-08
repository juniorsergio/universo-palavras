import styled from "styled-components";

export const Container = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 20px;    

    @media (max-width: 920px) {
        width: 100%;
    }

    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }
`

export const CloudButtons = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-width: 80%;
    gap: 20px;
  
    li {
        padding: 10px 15px;

        list-style: none;
        text-align: center;
        font-weight: bold;

        cursor: pointer;
        transition: all 0.2s;

        border-radius: 50px;

        &:hover {
            background: transparent;
        }

        &.related {
            background: var(--blue-300);
        }

        &.synonyms {
            background: var(--green-300);
        }

        &.antonyms {
            background: var(--red-300);
        }

        &.disabled {
            background: transparent;
            border: 1px solid var(--blue-500);
        }
    }
`