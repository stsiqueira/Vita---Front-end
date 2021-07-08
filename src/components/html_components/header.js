////////////////////////////////////////////////////////////////////////////////////////////////////////
// Header component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom'
import Navigation from '../sub_components/Navigation'
import { FiMenu } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"



const Header = (props) => {



    return (
       <div className="header">
{/* ================================REPLACE THE H1 for LOGO IMAGE ===================================*/}
           <div className="logo">
            <Link to="/" onClick={()=> props.showMenu ? props.setShowMenu(false) : ""}>
                <h1>VITA</h1>
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