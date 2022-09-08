import { ChangeEvent, FormEvent, useState } from "react";
import { Container, Input } from "./styles";

interface SearchBoxProps {
    getWordInfo: (word: string) => void;
}

export function SearchBox({ getWordInfo }: SearchBoxProps){
    const [ word, setWord ] = useState('')

    function handleWordInput(event: FormEvent){
        event.preventDefault()

        if (word !== ''){
            getWordInfo(word.toLocaleLowerCase())
            setWord('')
        }
    }

    function handleWordChange(event: ChangeEvent<HTMLInputElement>){
        setWord(event.target.value)
    }

    return (
        <Container onSubmit={handleWordInput}>      
            <Input
                type='text'
                placeholder="Procure uma palavra (com acentos)"
                value={word}
                onChange={handleWordChange}
            />
            <button type="submit">
                <img
                    src="search-icon.svg"
                    alt="Ícone de busca"
                />
            </button>
        </Container>
    )
}