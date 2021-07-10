// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const MyResponsivePie = ({ data, callback, legendFlag, centreText, subCentreText }) => {
    const CenteredMetric = ({ dataWithArc, centerX, centerY}) => {
        return (
            <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                    fontSize: `${window.innerWidth < 600 ? "1.5rem" : "2rem"}`,
                    fontWeight: 600
                }}
            >
                {centreText}
            </text>
        )
    }

    const SubCenteredMetric = ({ dataWithArc, centerX, centerY}) => {
        return (
            <text
                x={centerX}
                y={centerY + 30}
                textAnchor="middle"
                className="subcenter-text"
                dominantBaseline="central"
                style={{
                    fontSize: `${window.innerWidth < 600 ? ".7rem" : ".9rem"}`
                }}
            >
                {subCentreText}
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
            valueFormat={value =>`${Number(value)}%`}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={"white"}
            fill={[
            ]}
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
            layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric, SubCenteredMetric]}
            theme={{
                "background": "transparent",
                "textColor": "#ffffff",
                "fontSize": `${window.innerWidth < 600 ? "1.5rem" : "1.7    rem"}`
            }}
        />
    )
}


export default MyResponsivePie;