import { createRef, RefObject, useEffect, useState } from "react"
import html2canvas from 'html2canvas';

import { WordInfo } from "../../App"
import { WordBubble } from "../WordBubble/WordBubble"

import { CloudButtons, Container } from "./styles"

interface WordCloudData {
    label: string,
    value: number,
    color: string
}

interface WordRelationships {
    [key: string]: {
        text: string,
        active: boolean
    }
}

interface WordCloudProps {
    printRef: RefObject<HTMLDivElement>,
    getWordInfo: (name: string) => void,
    word: string,
    wordInfo: WordInfo
}

type WordCloudType = 'related' | 'synonyms' | 'antonyms'

const inititalWordRelationships: WordRelationships = {
    related: {
        text: 'Relacionadas',
        active: true
    },
    synonyms: {
        text: 'Sinônimos',
        active: true
    },
    antonyms: {
        text: 'Antônimos',
        active: true
    }
}

export function WordCloud({ printRef, getWordInfo, word, wordInfo }: WordCloudProps) {
    const [ wordCloudData, setWordCloudData ] = useState<WordCloudData[]>([])
    const [ wordRelationships, setWordRelationships ] = useState<WordRelationships>(inititalWordRelationships)

    function mapDataForWordCloud(data: WordInfo, removedType = ''){
        let cloudData: WordCloudData[] = []
        let cloudTypes = inititalWordRelationships

        const types: WordCloudType[] = ['related', 'synonyms', 'antonyms']
        const colors = {
            'related': '#00BDAF',
            'synonyms': '#14c061',
            'antonyms': '#F75A68'
        }

        types.forEach((type) => {
            if (
                data[type] && (
                    (
                        ((type !== removedType && wordRelationships[type].active)
                        || (type === removedType && !wordRelationships[removedType].active))
                    )
                    || removedType === ''
                )
            ){
                data[type]?.map((word) => {
                    cloudData.push({
                        label: word,
                        value: 1,
                        color: colors[type]
                    })
                })

                cloudTypes[type].active = true
            }
            else {
                cloudTypes[type].active = false
            }
        })

        setWordRelationships(cloudTypes)
        setWordCloudData(cloudData)
    }

    useEffect(() => {
        mapDataForWordCloud(wordInfo)
    }, [wordInfo])
    
    return (
        <Container ref={printRef}>
            <WordBubble data={wordCloudData} getWordInfo={getWordInfo} word={word} />

            <CloudButtons>
                {Object.keys(wordRelationships).map((key) => {
                    if (wordInfo[key as WordCloudType] && wordInfo[key as WordCloudType]!.length > 0){
                        return (
                            <li
                                key={key}
                                className={key + ' ' + (!wordRelationships[key].active ? 'disabled' : '')}
                                onClick={() => mapDataForWordCloud(wordInfo, key)}
                            >
                                {wordRelationships[key].text}
                            </li>
                        )
                    }
                })}
            </CloudButtons>
        </Container>
    )
}