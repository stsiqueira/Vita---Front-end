////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navigation component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom'




const Navigation = (props) => {

    return (
       <div className="navigation">
           <ul>
               <Link to='/NutrientCalculator'>
                <li>Nutrient Calculator</li>
               </Link>
               <Link to='Quiz'>
               <li>Quiz</li>
               </Link>
               <Link to='Contact'>
               <li>Contact</li>
               </Link>
               <Link to='Team'>
               <li>Team</li>
               </Link>
           </ul>
       </div>
    )
}

export default Navigation;