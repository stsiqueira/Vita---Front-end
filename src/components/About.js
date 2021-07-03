////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom'
import AboutVita from "../img/others/home_vita.svg"



const About = (props) => {

    return (
       <div className="about">
          
            <h2> What is Vita?</h2>
            <div className="description">
                <p>Vita is a data-driven responsive web platform educating users about vitamins and minerals present in natural food sources. Vita has a built-in nutrition calculator to suggest vegetables and fruits that can help maintain a balanced diet</p>
                <Link to="/NutrientCalculator">
                    <button className="btn btnCalculateHome"> Calculate</button>
                </Link>

           </div>
           <div className="image">
            <img src={AboutVita} alt="Home page logo Vita" />
           </div>
       </div>
    )
}

export default About;