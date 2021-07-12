////////////////////////////////////////////////////////////////////////////////////////////////////////
// Header component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom'
import Navigation from '../sub_components/Navigation'
import { FiMenu } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import HeaderLogo from "../../img/vita_logo.svg"


const Header = (props) => {



    return (
       <div className="header">
           <div className="logo">
            <Link to="/" onClick={()=> props.showMenu ? props.setShowMenu(false) : ""}>
                <img src={HeaderLogo} alt="Vita Logo" />
            </Link>
           </div>
            <Navigation 
                showMenu={props.showMenu}
                setShowMenu={props.setShowMenu}
                
            />
            <div className="menuButton" onClick={()=> props.setShowMenu(!props.showMenu)}>
                {
                    props.showMenu ?
                        <VscChromeClose /> 
                    : <FiMenu />
                }
            </div>
       </div>
    )
}

export default Header;