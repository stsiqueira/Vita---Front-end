////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom'



const About = (props) => {

    return (
       <div className="about">
           <div className="description">
                <h2> What is Vita?</h2>
                <p>Vita is a data-driven responsive web platform educating users about vitamins and minerals present in natural food sources. Vita has a built-in nutrition calculator to suggest vegetables and fruits that can help maintain a balanced diet</p>
                <Link to="/NutrientCalculator">
                    <button> Calculate my nutrients</button>
                </Link>

           </div>
           <div className="image">
              
           </div>
       </div>
    )
}

export default About;