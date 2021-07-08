////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nutrient Result component. 
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useLocation, useHistory, Link } from "react-router-dom";
import React from 'react';
import { useState } from 'react';
import UnorderedList from '../compositableComponents/Unorderedlist'
import MyResponsivePie from "./Chart";
import Recalculate from "./Recalculate";
import HealthConcerns from "./HealthConcerns";
import { healthData, vitaminColor, mineralColor } from '../../data/data.json';



const NutrientResults = (props) => {
    const location = useLocation()
    const history = useHistory()
    const { vitamin, mineral } = location.state
    

    const cleanValue = (value) => {

        if (value.includes(","))
            value = value.replace(",", "")

        if (value.toString().indexOf('.') !== -1)
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
        
        return cleanedValue
    }

    const addKeyToJsonArray = (arr) => {
        const data = arr.map(element => {
            element["id"] = element.name
            element["label"] = element.name.replace("Vitamin ", "")
            element["value"] = convertingUnits(element.recommended_intake)
            element["color"] = element.name.includes("Vitamin") ? vitaminColor[element.name] : mineralColor[element.name]

            if(element.name === "Niacin") {
                element["color"] = vitaminColor["Niacin"]
                element["id"] = "Vitamin B3"
                element["label"] = "B3"
            }    
            else if (element.name === "Pantothenic Acid") {
                element["id"] = "Vitamin B5"
                element["label"] = "B5"
                element["color"] = vitaminColor["Pantothenic Acid"]
            }

            return element
        })
        console.log(data)
        return data
    }

    const test = () => {
        console.log("changed")
    }
    const [ vitaminArray, setVitaminArray ] = useState(addKeyToJsonArray(vitamin));

    const [ mineralArray, setMineralArray ] = useState(addKeyToJsonArray(mineral));

    // const [ innerText, setinnerText ] = useState("");


    const recalculateClick = () => {
        history.push({
            pathname: "/NutrientCalculator/Start"
        })
    }

    const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
        return (
            <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                    fontSize: '2rem',
                    fontWeight: 600,
                }}
            >
                Vitamin
            </text>
        )
    }

    return (
        
        <div className="nutrient-results-wrapper">
           <div className="nutrient-calculator-introduction">
                <div className="nutrient-calculator-header">
                    <h2 className="result-heading">Your Results</h2>
                    <p>
                            Here are your results. This suggestions are in no way medical advice. If you are feeling seriously unwell, please, go see a doctor. Your physician’s word is final. This calculator is here to help you to make your daily diet healthier, not to substitute medical advice.
                    </p>
                </div>
            </div>
            <div className="results-wrapper">
                
                <div className="chart-vitamin-result-wrapper">
                    <div className="vitamin-result-wrapper">
                        <UnorderedList heading="Vitamin" classname="test" name="test" arr={vitamin} flag={true}/>
                    </div>
                    <div className="chart-wrapper" >
                        <MyResponsivePie data={vitaminArray} callback={undefined} legendFlag={true} centreText={CenteredMetric}/>

                        {/* <div className="overlay" style={styles.overlay}>
                            <span>Vitamins</span>
                        </div> */}
                    </div>
                    
                </div>
                <div className="chart-mineral-result-wrapper">
                    <div className="mineral-result-wrapper">
                        <UnorderedList heading="Mineral" classname="test" name="test" arr={mineral} flag={true} />
                    </div>
                    <div className="chart-wrapper">
                        <MyResponsivePie data={mineralArray} callback={undefined} legendFlag={true} centreText={CenteredMetric}/>
                    </div>
                    
                </div>
                <div className="health-concern-wrapper">
                    <div className="health-concern-description">
                        <h2>Health Concerns</h2>
                        <p>
                            Do you want to update your results with your health concerns?
                            We can give you suggestions of nutrients to help!
                        </p>
                    </div>
                    <div className="options">
                        {healthData.map((element) => {
                            return <HealthConcerns 
                                key={element}
                                wrapperClassname="wrapper"
                                optionName={element}
                                imageUrl="https://picsum.photos/800"
                                imgClassName="emoji"
                                altText="wow"
                                callback={test}
                            />
                        })}
                    </div>
                </div>
                <Link 
                    to={{ pathname: "https://fdc.nal.usda.gov/api-guide.html" }} target="_blank">
                    This data is sourced from U.S. department of agriculture
                </Link>
           </div>
            
            <Recalculate 
                parentClassname="recalculator-wrapper"
                descriptionClassname="desciption-wrapper"
                descriptionText="Do you want to use the calculator again? No problem! Just remember to save any data you want from your recent use (we do not store your data)."
                buttonWrapperClassname="recalculate-button-wrapper"buttonClassname="recalculate-button"
                buttonText="recalculate"
                classname="buttonClassname"
                callback={recalculateClick} 
            />
        </div>
    )
}

export default NutrientResults;