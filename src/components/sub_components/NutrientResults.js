////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nutrient Result component. 
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useLocation, useHistory } from "react-router-dom";
import React from 'react';
import { useState } from 'react';
import UnorderedList from '../compositableComponents/Unorderedlist'
import MyResponsivePie from "./Chart";


const NutrientResults = (props) => {
    const location = useLocation()
    const history = useHistory()
    const { vitamin, mineral } = location.state
    const margin = { top: 30, right: 200, bottom: 30, left: 30 };

    // const clicked = (node) => {
    //     console.log(node["data"]["links"])
    //     history.push({
    //         pathname: `/vitamin/${node.id}`,
    //     })
    // }
    const cleanValue = (value) => {

        if (value.includes(","))
            value = value.replace(",", "")

        if (value.toString().indexOf('.') != -1)
            return parseFloat(value)

        return parseInt(value)
    }

    const convertingUnits = (value) => {
        const splitArray = value.split(" ")
        const cleanedValue = cleanValue(splitArray[0])

        if(splitArray.length < 2)
            return cleanedValue * 1000

        if (splitArray[1].includes("mg")) 
            return cleanedValue * 1000

        else if (value.includes(" g"))
            return cleanedValue * 1000000
        
        // console.log(`new unit encountered please check ${splitArray[1]}`)
        return cleanedValue
    }

    const addKeyToJsonArray = (arr) => {
        const data = arr.map(element => {
            element["id"] = element.name
            element["label"] = element.name
            element["value"] = convertingUnits(element.recommended_intake)
            return element
        })
        
        return data
    }
    const [ vitaminArray, setVitaminArray ] = useState(addKeyToJsonArray(vitamin));
    const [ mineralArray, setMineralArray ] = useState(addKeyToJsonArray(mineral));
    console.log(mineralArray)
    const styles = {
        root: {
          textAlign: "center",
          position: "relative",
        },
        overlay: {
          position: "absolute",
          top: 0,
          right: margin.right,
          bottom: 0,
          left: margin.left,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
          textAlign: "center",
          pointerEvents: "none"
        }
    };

    return (
        
       <div className="nutrient-results-wrapper">
           <div className="nutrient-calculator-introduction">
                <div className="nutrient-calculator-header">
                    <h2>Nutrient Calculator</h2>
                    <p>
                            Here are your results. This suggestions are in no way medical advice. If you are feeling seriously unwell, please, go see a doctor. Your physician’s word is final. This calculator is here to help you to make your daily diet healthier, not to substitute medical advice.
                    </p>
                </div>
           </div>
           <div className="results-wrapper">
                <h2 className="result-heading">Your Results</h2>
                <div className="chart-vitamin-result-wrapper">
                    <div className="vitamin-result-wrapper">
                        <UnorderedList heading="Vitamin" classname="test" name="test" arr={vitamin} flag={true}/>
                    </div>
                    <div className="chart-wrapper" >
                        <MyResponsivePie data={vitaminArray} callback={undefined} />

                        <div className="overlay" style={styles.overlay}>
                            <span>Vitamins</span>
                        </div>
                    </div>
                    
                </div>
                <div className="chart-mineral-result-wrapper">
                    <div className="mineral-result-wrapper">
                        <UnorderedList heading="Mineral" classname="test" name="test" arr={mineral} flag={true}/>
                    </div>
                    <div className="chart-wrapper">
                        <MyResponsivePie data={mineralArray} callback={undefined} />
                        <div className="overlay" style={styles.overlay}>
                            <span>Minerals</span>
                        </div>      
                    </div>
                    
                </div>
           </div>
           <div>

           </div>
       </div>
    )
}

export default NutrientResults;