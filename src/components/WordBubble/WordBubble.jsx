import BubbleChart from '@weknow/react-bubble-chart-d3';
import useScreenSize from "use-screen-size";

export function WordBubble({ data, getWordInfo, word }){
    const size = useScreenSize()

    function handleBubbleClick(label){
        if (label !== word){
            getWordInfo(label)
        }
    }

    return (
        <BubbleChart
            graph={{
                zoom: size.width > 920 ? 0.63 : 0.95,
                offsetX: size.width > 920 ? 0.18 : 0.03,
                offsetY: 0
            }}
            width={size.width > 920 ? size.width * 0.5 : size.width}
            height={size.width > 920 ? size.height * 0.7 : size.height * 0.48}
            data={data}
            showLegend={false}
            bubbleClickFun={handleBubbleClick}
            valueFont={{
                size: 0
            }}
            labelFont={{
                size: size.width > 920 ? 12 : 10,
                color: '#FFFFFF',
                weight: 'normal'
            }}
        />
    )
}