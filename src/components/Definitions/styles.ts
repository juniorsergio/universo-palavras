import styled from "styled-components"

export const Container = styled.div`
    width: 30%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 10px;
    padding: 20px 0;

    @media (max-width: 920px) {
        width: 100%;
    }

    h1 {
        text-align: center;
    }

    p {
        text-align: justify;
    }
`
export const Title = styled.div`
    display: flex;
    justify-content: space-around;

    button {
        border: 1px solid var(--blue-500);
        background: var(--blue-500);

        padding: 10px 15px;

        color: var(--white);
        font-size: 1rem;
        font-weight: bold;

        cursor: pointer;
        transition: background-color 0.2s;

        border-radius: 50px;

        &:hover {
            background: var(--blue-300);
        }
    }
`

export const DefinitionsView = styled.div`
    display: grid;
    gap: 20px;

    .author {
        font-style: italic;
        font-size: 0.8rem;
    }
`

export const HoverDefinitions = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 20px;

    li {
        border: 1px solid var(--blue-500);
        background: var(--blue-500);

        padding: 10px 15px;

        list-style: none;
        text-align: center;

        cursor: pointer;
        transition: background-color 0.2s;

        border-radius: 50px;

        &:hover {
            background: var(--blue-300);
        }

        &.active {
            background: var(--blue-300);
        }
    }
`