////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navigation component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'


const Navigation = (props) => {

    const location = useLocation();
    const [ isActive, setActive ] = useState("")

    if(location.pathname === '/') {
        const clicked = document.getElementsByClassName("header-clicked")[0];
        if(clicked) {
            clicked.classList.remove("header-clicked")
        } 
    }

    return (
       <div className={props.showMenu ? "navigation mobileMenu" : "navigation"}>
           <ul>
                <li onClick={() => setActive("calculator")}>
                    <Link className={`${isActive === "calculator" ? 'header-clicked' : ''}`}  to='/NutrientCalculator' onClick={()=> props.setShowMenu(false)}>
                        Nutrient Calculator
                    </Link>
                </li>
                <li onClick={() => setActive("quiz")}>
                    <Link  className={`${isActive === "quiz" ? 'header-clicked' : ''}`} to='/Quiz' onClick={()=> props.setShowMenu(false)}> 
                        Quiz
                    </Link>   
                </li>
                <li onClick={() => setActive("contact")}>
                    <Link  className={`${isActive === "contact" ? 'header-clicked' : ''}`} to='/Contact' onClick={()=> props.setShowMenu(false)}>
                        Contact
                    </Link>
                </li>
                <li onClick={() => setActive("team")}>
                    <Link className={`${isActive === "team" ? 'header-clicked' : ''}`} to='/Team' onClick={()=> props.setShowMenu(false)}> 
                        Team
                    </Link>        
                </li>

           </ul>
       </div>
    )
}

export default Navigation;