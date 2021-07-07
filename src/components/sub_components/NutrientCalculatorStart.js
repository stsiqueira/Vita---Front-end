////////////////////////////////////////////////////////////////////////////////////////////////////////
// Subscribe component. 
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import Button from '../compositableComponents/Button'
import { useHistory } from "react-router-dom";
import NutrientCalculatorImg from "../../img/others/nutrient_calculator_home.svg";


const NutrientCalculatorStart = () => {
    const history = useHistory()
    const buttonClick = () => {
        history.push({
            pathname: '/NutrientCalculator/Start',
        })
    }

    return (
       <div className="calculator-start-wrapper">
           <h2 className="calculator-start-title-mobile">Nutrient Calculator</h2>
           <div className="image-wrapper">
                <img src={NutrientCalculatorImg} alt="dummy" /> 
           </div>
           <div className="calculator-start-description">
                <h2 className="calculator-start-title">Nutrient Calculator</h2>
                <p>
                    Learn more about your nutritional needs, get personalized
                    vitamins and mineral suggestions to add to your daily diet,
                    and find out in which vegetables and fruits they can be found.
                    All without worrying about your data since we don’t keep it.
                </p>
                <div className="button-wrapper">
                    <Button 
                        text="Start" 
                        classname="calculator-start-button btn" 
                        callback= {buttonClick}
                    />
                </div> 
           </div>
       </div>
    )
}

export default NutrientCalculatorStart;