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
        display: flex;
        align-items: center;
        gap: 10px;

        background: var(--orange);

        padding: 10px 15px;

        color: var(--white);
        font-size: 1rem;
        font-weight: bold;

        cursor: pointer;
        transition: filter 0.2s;

        border-radius: 50px;
        border: none;

        &:hover {
            filter: brightness(0.8);
        }
    }
`

export const DefinitionsView = styled.div`
    display: grid;
    gap: 20px;
    
    animation: fadein 1s;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

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
        border: 1px solid var(--blue-dark);
        background: var(--blue-dark);

        padding: 10px 15px;

        list-style: none;
        text-align: center;

        cursor: pointer;
        transition: background-color 0.2s;

        border-radius: 50px;

        &:hover {
            background: var(--blue-light);
        }

        &.active {
            background: var(--blue-light);
        }
    }
`