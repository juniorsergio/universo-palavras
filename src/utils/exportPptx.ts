import html2canvas from "html2canvas";
import { RefObject } from "react";
//import pptxgen from "pptxgenjs";

export function exportPptx(printRef: RefObject<HTMLDivElement>, word: string){
    const cloudImg = onDownloadImage(printRef.current!)

    /* let pptx = new pptxgen()
    let slide = pptx.addSlide()

    slide.addImage({ data: "image/png;base64,cloudImg" })
    pptx.writeFile({ fileName: `${word}.pptx` }) */
}

async function onDownloadImage(element: HTMLDivElement) {
    const canvas = await html2canvas(element!, {backgroundColor:null});
    const data = canvas.toDataURL('image/png');

    const link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.href = data;
        link.download = 'image.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    else {
        window.open(data);
    }

    return data
}