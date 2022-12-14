import { MicrosoftPowerpointLogo } from "phosphor-react";
import { useState } from "react";
import { WordInfo } from "../../App";
import { Container, Title, DefinitionsView, HoverDefinitions } from "./styles";

interface DefinitionsProps {
    word: string,
    wordInfo: WordInfo,
    handleExportPptx: () => void
}

export function Definitions({ word, wordInfo, handleExportPptx }: DefinitionsProps){
    const [ definitionHover, setDefinitionHover ] = useState('default')
    
    function handleMouseOverDefinition(def: string){
        setDefinitionHover(def)
    }

    function handleMouseOutDefinition(){
        setDefinitionHover('default')
    }

    return (
        <Container onMouseLeave={handleMouseOutDefinition}>
            <Title>
                <h1>{word}</h1>
            
                <button type="button" onClick={handleExportPptx} >
                    Exportar
                    <MicrosoftPowerpointLogo size={24}/>
                </button>
            </Title>

            {definitionHover === 'default' &&
                <DefinitionsView>
                    {wordInfo.meanings && wordInfo.meanings.length > 0 &&
                        <>
                            <h2>Definição:</h2>
                            {wordInfo.meanings.map((meaning) => (
                                <p key={meaning}>{meaning}</p>
                            ))}
                        </>                
                    }

                    {wordInfo.etymology &&
                        <>
                            <h2>Etimologia:</h2>
                            <p>{wordInfo.etymology}</p>
                        </>
                    }
                </DefinitionsView>
            }

            {definitionHover === 'quotes' && wordInfo.quotes
                ? 
                <DefinitionsView>
                    {wordInfo.quotes.map((quote) => (
                        <>
                            <p key={quote.quote}>{quote.quote}</p>
                            <p className="author">{quote.author}</p>
                        </>
                    ))}
                </DefinitionsView>

                : <DefinitionsView>
                    {wordInfo.other_defs && wordInfo.other_defs[definitionHover] &&
                        wordInfo.other_defs[definitionHover].map((meaning) => (
                            <p key={meaning}>{meaning}</p>
                        ))
                    }
                </DefinitionsView>
            }

            <HoverDefinitions>
                <li className={definitionHover === 'quotes' ? 'active' : ''} onMouseOver={() => handleMouseOverDefinition('quotes')}>
                    Citações
                </li>

                {wordInfo.other_defs &&
                    Object.keys(wordInfo.other_defs).map((key) => (
                        <li key={key} className={definitionHover === key ? 'active' : ''} onMouseOver={() => handleMouseOverDefinition(key)}>
                            {key}
                        </li>
                    ))
                }
            </HoverDefinitions>
        </Container>
    )
}