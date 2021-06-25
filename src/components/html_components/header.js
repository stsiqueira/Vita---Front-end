////////////////////////////////////////////////////////////////////////////////////////////////////////
// Header component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Link } from 'react-router-dom'
import Navigation from '../sub_components/Navigation'



const Header = (props) => {

    return (
       <div className="header">
{/* ================================REPLACE THE H1 for LOGO IMAGE ===================================*/}
           <div className="logo">
            <Link to="/">
                <h1>VITA</h1>
            </Link>
           </div>
            <Navigation />
       </div>
    )
}

export default Header;