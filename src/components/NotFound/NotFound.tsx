import { Container } from "./styles";

interface NotFoundProps {
    word: string,
    alternatives: string[],
    getWordInfo: (name: string) => void
}

export function NotFound({ word, alternatives, getWordInfo }: NotFoundProps){
    return (
        <Container style={{width: '100%'}}>
            <h1>{word}</h1>

            <div>
                {alternatives.map((word) => (
                    <a key={word} onClick={() => getWordInfo(word)}>{word}</a>
                ))}
            </div>

            <p>Infelizmente não foi possível encontrar essa palavra no banco de dados...</p>
            <p>Que tal tentar alguma das alternativas acima?</p>
        </Container>
    )
}