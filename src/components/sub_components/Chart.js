// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


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
            fontSize: `${window.innerWidth < 600 ? "1.1rem" : "2rem"}`,
            fontWeight: 600
        }
        return ( metric(centreText, 0, centerY, centerX, style, "centre-text"))
    }

    const SubCenteredMetric = ({ dataWithArc, centerX, centerY}) => {
        const style = {
            fontSize: `${window.innerWidth < 600 ? ".7rem" : ".9rem"}`
        }
        return ( metric(subCentreText, 0, centerY+30, centerX, style, "subcenter-text"))
    }

    const bottomMetric = ({ dataWithArc, centerX, centerY}) => {
        const style = {
            fontSize: `${window.innerWidth < 600 ? ".5rem" : ".9rem"}`
        }
        let arr = bottomCentreText.split("  ")
        return (
            <text
                x={centerX}
                y={(2*centerY) - 40}
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
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
            tooltip={({ datum: { id, value, color } }) => (
                <div
                className="tooltip"
                style={{
                    padding: 12,
                    color: "black",
                    background: '#fff',
                }}
                >
                    <svg style={{width: "1rem", height: "1rem", marginRight: "0.5rem"}}>
                        <rect 
                            style={{fill: color, width: "1rem", height: "1rem"}}
                        />
                    </svg>
                    
                    <strong>
                        {id}{removeDataMetrics ? "" : `: ${value}`} 
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