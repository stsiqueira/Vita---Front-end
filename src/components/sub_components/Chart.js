import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and

const MyResponsivePie = ({ data, callback, removeDataMetrics,legendFlag, parentFlag, centreText, subCentreText, bottomCentreText }) => {
    const metric = (text, flag, centerY, centerX, style, classname) => {
        return (
            <text
                x={centerX}
                y={centerY}
                className={classname}
                textAnchor="middle"
                dominantBaseline="central"
                style={style}
            >
                {text}
            </text>
        )
    }
    const CenteredMetric = ({ dataWithArc, centerX, centerY}) => {
        const style = {
            fontSize: `${window.innerWidth < 600 ? "1.3rem" : "2rem"}`,
            fontWeight: 600
        }
        return ( metric(centreText, 0, centerY, centerX, style, "centre-text"))
    }

    const SubCenteredMetric = ({ dataWithArc, centerX, centerY}) => {
        const style = {
            fontSize: `${window.innerWidth < 600 ? ".8rem" : ".9rem"}`
        }
        return ( metric(subCentreText, 0, window.innerWidth > 600 ? centerY+30 : centerY+20, centerX, style, "subcenter-text"))
    }

    const bottomMetric = ({ dataWithArc, centerX, centerY}) => {
        const style = {
            fontSize: `${window.innerWidth < 600 ? ".8rem" : ".9rem"}`
        }
        let arr = bottomCentreText.split("  ")
        return (
            <text
                x={centerX}
                y={(2*centerY) + 10}
                className="bottomcenter-text"
                textAnchor="middle"
                dominantBaseline="central"
                style={style}
            >
                <tspan x={centerX} dy="15">
                    {arr[0]}
                </tspan>
                <tspan x={centerX} dy="15">
                    {arr[1]}
                </tspan>
            </text>
        )
    }

    return (
        <ResponsivePie
            onClick={callback}
            data={data}
            margin={window.innerWidth > 600 ? { top: 40, right: 80, bottom: 80, left: 80 } : { top: 30, right: 30, bottom: 50, left: 30 }}
            sortByValue={false}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            colors={{ datum: 'data.color' }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#000"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabel="label"
            valueFormat={value =>`${Number(value)}`}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={"white"}
            fill={[]}
            tooltip={({datum}) => (
                <div
                className="tooltip"
                style={{
                    padding: 10,
                    color: "black",
                    background: '#fff',
                }}
                >
                    <svg style={{width: "1rem", height: "1rem", marginRight: "0.5rem"}}>
                        <rect 
                            style={{fill: datum.color, width: "1rem", height: "1rem"}}
                        />
                    </svg>
                    
                    <strong>
                        {datum.id}{removeDataMetrics ? "" : `: ${datum.data.recommended_intake}`} 
                    </strong>
                </div>
            )}
            legends={legendFlag ? undefined : [
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'square',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
            layers={parentFlag ? ['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric, SubCenteredMetric, bottomMetric] : ['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]}
            theme={{
                "background": "transparent",
                "textColor": "#ffffff",
                "fontSize": `${window.innerWidth < 600 ? "1.2rem" : "1.6rem"}`
            }}
        />
    )
}


export default MyResponsivePie;