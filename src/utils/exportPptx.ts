import { WordInfo } from './../App';
import html2canvas from "html2canvas";
import pptxgen from "pptxgenjs";
import PptxGenJS from "pptxgenjs";

interface TableProps {
    text: string,
    options?: {
        align: PptxGenJS.HAlign,
        bold: boolean
    }
}

export async function exportPptx(printRef: HTMLDivElement, word: string, wordInfo: WordInfo){
    const cloudImg = await onDownloadImage(printRef)
    const pptx = new pptxgen()
    
    createMasterSlide(pptx)

    addWordCloudToPptx(pptx, cloudImg, word)
    addWordDefinitionsToPptx(pptx, wordInfo)
    
    pptx.writeFile({ fileName: `${word}.pptx` })
}

async function onDownloadImage(element: HTMLDivElement) {
    const canvas = await html2canvas(element!, {backgroundColor:null});
    const data = canvas.toDataURL('image/png');
    return data
}

function createMasterSlide(pptx: pptxgen){
    pptx.defineSlideMaster({
        title: 'MASTER_SLIDE',
        background: { color: '#202024' },
        objects: [
            { image: { y: '80%', transparency: 80, path: '/stilingue.png' } }
        ]
    })
}

async function addWordCloudToPptx(pptx: pptxgen, img: string, word: string){
    const slide = pptx.addSlide({ masterName: "MASTER_SLIDE" })
    slide.addText('Nuvem de palavras', {
        w: '100%',
        h: '10%',
        y: '5%',
        align: 'center',
        bold: true,
        isTextBox: true,
        color: '#FFFFFF',
        fontFace: 'Poppins'
    })

    slide.addImage({
        data: img,
        x: '25%',
        y: '17.5%',
        w: '50%',
        h: '65%',
        altText: `Relacionamentos da palavra ${word}`
    })
}

function addWordDefinitionsToPptx(pptx: pptxgen, wordInfo: WordInfo){
    const slide = pptx.addSlide({ masterName: "MASTER_SLIDE" })
    slide.addText('Definições', {
        w: '100%',
        h: '10%',
        align: 'center',
        bold: true,
        isTextBox: true,
        color: '#FFFFFF',
        fontFace: 'Poppins'
    })

    const table: TableProps[][] = [[
        { text: 'Tipo', options: { align: "center", bold: true } },
        { text: 'Descrição', options: { align: "center", bold: true } }
    ]]

    createTableBody(table, wordInfo)
    slide.addTable(table, {
        color: '#FFFFFF',
        fontFace: 'Poppins',
        valign: 'middle',
        border: {
            color: '#142C5A',
            pt: 2
        },
        autoPage: true,
        autoPageRepeatHeader: true
    })
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