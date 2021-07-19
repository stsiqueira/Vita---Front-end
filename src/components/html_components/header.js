////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                      Header component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom'
import Navigation from '../sub_components/Navigation'
import { FiMenu } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"


const Header = (props) => {



    return (
       <div className="header">
           <div className="max-width-wrapper">
            <div className="logo">
                <Link to="/" onClick={()=> props.showMenu ? props.setShowMenu(false) : ""}>
                    <img src="/img/vita_logo.svg" alt="Vita Logo" />
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
          
       </div>
    )
}

export default Header;