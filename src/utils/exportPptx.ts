import { WordInfo } from './../App';
import html2canvas from "html2canvas";
import pptxgen from "pptxgenjs";

interface TableProps {
    text: string
}

export async function exportPptx(printRef: HTMLDivElement, word: string, wordInfo: WordInfo){
    const cloudImg = await onDownloadImage(printRef)
    const pptx = new pptxgen()

    addWordCloudToPptx(pptx, cloudImg, word)
    addWordDefinitionsToPptx(pptx, wordInfo)
    
    pptx.writeFile({ fileName: `${word}.pptx` })
}

async function onDownloadImage(element: HTMLDivElement) {
    const canvas = await html2canvas(element!, {backgroundColor:null});
    const data = canvas.toDataURL('image/png');
    return data
}

async function addWordCloudToPptx(pptx: pptxgen, img: string, word: string){
    const slide = pptx.addSlide()
    slide.addText('Nuvem de palavras', {
        w: '100%',
        h: '10%',
        align: 'center',
        bold: true,
        isTextBox: true
    })

    slide.addImage({
        data: img,
        x: '25%',
        y: '25%',
        w: '50%',
        h: '65%',
        altText: `Relacionamentos da palavra ${word}`
    })
}

function addWordDefinitionsToPptx(pptx: pptxgen, wordInfo: WordInfo){
    const slide = pptx.addSlide()
    slide.addText('Definições', {
        w: '100%',
        h: '10%',
        align: 'center',
        bold: true,
        isTextBox: true
    })

    const table = [[
        { text: 'Tipo' },
        { text: 'Descrição' }
    ]]

    createTableBody(table, wordInfo)
    slide.addTable(table)
}

function createTableBody(table: TableProps[][], wordInfo: WordInfo){
    const definitions = [
        {
            'type': 'meanings',
            'name': 'Significados'
        },
        {
            'type': 'etymology',
            'name': 'Etimologia'
        },
        {
            'type': 'other_defs',
            'name': 'Outros'
        }
    ]

    for (const def of definitions){
        if (def.type === 'other_defs' && wordInfo.other_defs){
            Object.entries(wordInfo.other_defs).map(([key, value]) => {
                table.push([
                    { text: key },
                    { 'text': value.join('\n') }
                ])
            })
        }
        else {
            const row = [{ text: def.name }]

            if (def.type === 'meanings' && wordInfo.meanings){
                row.push({ text: wordInfo.meanings.join('\n') })
            }
            else if (wordInfo.etymology) {
                row.push({ text: wordInfo.etymology })
            }
            else {
                continue
            }

            table.push(row)
        }
    }
}