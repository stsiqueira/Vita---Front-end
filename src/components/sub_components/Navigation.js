////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navigation component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link, useLocation } from 'react-router-dom'


const Navigation = (props) => {

	const location = useLocation();
    if(location.pathname === '/') {
        const clicked = document.getElementsByClassName("clicked")[0];
        if(clicked) {
            console.log(clicked.classList)
            clicked.classList.remove("clicked")
        } 
    }
    const clicked = (e) => {
        const clicked = document.getElementsByClassName("clicked");
        if (clicked[0]) {
            clicked[0].classList.remove("clicked")
            e.target.classList.add("clicked")
        } else {
            e.target.classList.add("clicked")
        }
        
    }

    return (
       <div className={props.showMenu ? "navigation mobileMenu" : "navigation"}>
           <ul>
                <li onClick={(e) => clicked(e)}>
                    <Link to='/NutrientCalculator' onClick={()=> props.setShowMenu(false)}>
                        Nutrient Calculator
                    </Link>
                </li>
                <li onClick={(e) => clicked(e)}>
                    <Link to='/Quiz' onClick={()=> props.setShowMenu(false)}> 
                        Quiz
                    </Link>   
                </li>
                <li onClick={(e) => clicked(e)}>
                    <Link to='/Contact' onClick={()=> props.setShowMenu(false)}>
                        Contact
                    </Link>
                </li>
                <li onClick={(e) => clicked(e)}>
                    <Link to='/Team' onClick={()=> props.setShowMenu(false)}> 
                        Team
                    </Link>        
                </li>

           </ul>
       </div>
    )
}

export default Navigation;