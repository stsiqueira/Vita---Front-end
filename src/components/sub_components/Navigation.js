////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navigation component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'


const Navigation = (props) => {

	const location = useLocation();
    const [isActive, setActive] = useState("")

    // if(location.pathname === '/') {
    //     const clicked = document.getElementsByClassName("header-clicked")[0];
    //     if(clicked) {
    //         clicked.classList.remove("header-clicked")
    //     } 
    // }

    console.log(isActive)
    return (
       <div className={props.showMenu ? "navigation mobileMenu" : "navigation"}>
           <ul>
                <li className={`${isActive === "calculator" ? 'header-clicked' : ''}`} onClick={() => setActive("calculator")}>
                    <Link to='/NutrientCalculator' onClick={()=> props.setShowMenu(false)}>
                        Nutrient Calculator
                    </Link>
                </li>
                <li className={`${isActive === "quiz" ? 'header-clicked' : ''}`} onClick={() => setActive("quiz")}>
                    <Link to='/Quiz' onClick={()=> props.setShowMenu(false)}> 
                        Quiz
                    </Link>   
                </li>
                <li className={`${isActive === "contact" ? 'header-clicked' : ''}`} onClick={() => setActive("contact")}>
                    <Link to='/Contact' onClick={()=> props.setShowMenu(false)}>
                        Contact
                    </Link>
                </li>
                <li className={`${isActive === "team" ? 'header-clicked' : ''}`} onClick={() => setActive("team")}>
                    <Link to='/Team' onClick={()=> props.setShowMenu(false)}> 
                        Team
                    </Link>        
                </li>

           </ul>
       </div>
    )
}

export default Navigation;