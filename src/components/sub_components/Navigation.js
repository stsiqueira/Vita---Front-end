////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navigation component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom'




const Navigation = (props) => {


    return (
       <div className={props.showMenu ? "navigation mobileMenu" : "navigation"}>
           <ul>
                <li>
                    <Link to='/NutrientCalculator' onClick={()=> props.setShowMenu(!props.showMenu)}>
                        Nutrient Calculator
                    </Link>
                </li>
                <li>
                    <Link to='Quiz' onClick={()=> props.setShowMenu(!props.showMenu)}> 
                        Quiz
                    </Link>   
                </li>
                <li>
                    <Link to='Contact' onClick={()=> props.setShowMenu(!props.showMenu)}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to='Team' onClick={()=> props.setShowMenu(!props.showMenu)}> 
                        Team
                    </Link>        
                </li>

           </ul>
       </div>
    )
}

export default Navigation;