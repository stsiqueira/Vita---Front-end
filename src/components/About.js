////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  TEAM PAGE COMPONENT  - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom'



const About = (props) => {

    return (
       <div className="about">
          
            <h2> Welcome to Vita!</h2>
            <div className="description">
                <p>Do you want to optimize your daily lifestyle, get  healthier, and learn more about how the food you eat can provide you with the nutrients you need?</p>
                <p>We have made a nutrient calculator to help you on your journey!</p>
                <Link to="/NutrientCalculator">
                    <button className="btn btnCalculateHome"> Try it out</button>
                </Link>

           </div>
           <div className="image">
            <img src="/img/icons/home_vita.svg" alt="Home page about Vita" />
           </div>
       </div>
    )
}

export default About;