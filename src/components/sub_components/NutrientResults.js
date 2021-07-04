////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nutrient Result component. 
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useLocation } from "react-router-dom";
import React from 'react';
import UnorderedList from '../compositableComponents/Unorderedlist'
import MyResponsivePie from "./Chart";
import { useHistory } from "react-router-dom";


const NutrientResults = (props) => {
    const location = useLocation()
    const history = useHistory()
    const { vitamin, mineral } = location.state
    const clicked = (node) => {
        console.log("clicked")
    }
    const data = [
        {
          "id": "scala",
          "label": "scala",
          "value": 1,
          "color": "#ccc",
          "link": "http:hii"
        },
        {
          "id": "erlang",
          "label": "erlang",
          "value": 1,
          "color": "hsl(147, 70%, 50%)"
        },
        {
            "id": "Copper",
            "label": "Copper",
            "value": 1,
            "color": "hsl(147, 70%, 50%)"
        },
        {
            "id": "Iron",
            "label": "Iron",
            "value": 1,
            "color": "hsl(147, 70%, 50%)"
        },
        {
          "id": "Vitamin",
          "label": "Vitamin",
          "value": 1,
          "color": "hsl(112, 70%, 50%)"
        },
        {
          "id": "hack",
          "label": "hack",
          "value": 1,
          "color": "hsl(34, 70%, 50%)"
        },
        {
          "id": "c",
          "label": "c",
          "value": 1,
          "color": "hsl(303, 70%, 50%)"
        }
      ]
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
                        <UnorderedList heading="Vitamin" classname="test" name="test" arr={vitamin}/>
                    </div>
                    <div className="test" style={{height: "500px"}}>
                        <MyResponsivePie data={data} callback={clicked}/>
                    </div>
                    <div className="chart-wrapper">
                        <img src="https://picsum.photos/400" alt="dummy" /> 
                    </div>
                    
                </div>
                <div className="chart-mineral-result-wrapper">
                    <div className="mineral-result-wrapper">
                        <UnorderedList heading="Mineral" classname="test" name="test" arr={mineral}/>
                    </div>
                    <div className="chart-wrapper">
                        <img src="https://picsum.photos/400" alt="dummy" />      
                    </div>
                </div>
           </div>
           <div>

           </div>
       </div>
    )
}

export default NutrientResults;