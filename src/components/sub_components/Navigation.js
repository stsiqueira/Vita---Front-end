////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navigation component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { React } from 'react';
import { NavLink } from 'react-router-dom'


const Navigation = (props) => {

    return (
       <div className={props.showMenu ? "navigation mobileMenu" : "navigation"}>
           <ul>
                <li>
                    <NavLink activeClassName="header-clicked" to='/NutrientCalculator' onClick={()=> props.setShowMenu(false)}>
                        Nutrient Calculator
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="header-clicked" to='/Quiz' onClick={()=> props.setShowMenu(false)}> 
                        Quiz
                    </NavLink>   
                </li>
                <li>
                    <NavLink activeClassName="header-clicked" to='/Contact' onClick={()=> props.setShowMenu(false)}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="header-clicked" to='/Team' onClick={()=> props.setShowMenu(false)}> 
                        Team
                    </NavLink>        
                </li>

           </ul>
       </div>
    )
}

export default Navigation;