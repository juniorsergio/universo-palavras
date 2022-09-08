import html2canvas from "html2canvas";
import { createRef, useEffect, useState } from "react";

import { Definitions } from "./components/Definitions/Definitions";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { NotFound } from "./components/NotFound/NotFound";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { WordCloud } from "./components/WordCloud/WordCloud";

import { GlobalStyle, Container, Main } from "./styles/global";

export interface WordInfo {
    alternatives?: string[]
    antonyms?: string[],
    etymology?: string,
    meanings?: string[],
    other_defs?: {
        [key: string]: string[]
    },
    quotes?: {
        author: string,
        quote: string
    }[],
    related?: string[],
    synonyms?: string[]
}

export function App(){
    const [ wordInfo, setWordInfo ] = useState({} as WordInfo)
    const [ word, setWord ] = useState('universo')
    const [ isLoading, setIsLoading ] = useState(true)
    const printRef = createRef<HTMLDivElement>()

    async function getWordInfo(word: string){
        setIsLoading(true)

        const response = await fetch(`https://word-crawler-api.herokuapp.com/${word}`)

        if(response.status === 200){
            const data = await response.json()

            setWord(word)
            setWordInfo(data)
        }

        setIsLoading(false)
    }

    async function onDownloadImage() {
        const element = printRef.current;
        const canvas = await html2canvas(element!, {backgroundColor:null});
    
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');
    
        if (typeof link.download === 'string') {
            link.href = data;
            link.download = `${word}.png`;
        
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    }

    useEffect(() => {
        getWordInfo(word)
    }, [])

    return (
        <Container>
            <SearchBox getWordInfo={getWordInfo} />
            
            { isLoading
                ? <LoadingScreen />
                : <Main>
                    { wordInfo.alternatives
                        ? <NotFound word={word} alternatives={wordInfo.alternatives} getWordInfo={getWordInfo} />
                        : <>
                            <WordCloud
                                printRef={printRef}
                                getWordInfo={getWordInfo}
                                word={word}
                                wordInfo={wordInfo}
                            />

                            <Definitions
                                handleDownloadImage={onDownloadImage}
                                word={word}
                                wordInfo={wordInfo}
                            />
                        </>
                    }
                </Main>
            }

            <GlobalStyle />
        </Container>
    )
}