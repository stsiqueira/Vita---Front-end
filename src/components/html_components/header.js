////////////////////////////////////////////////////////////////////////////////////////////////////////
// Header component - Thiago
////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import Navigation from '../sub_components/Navigation'



const Header = (props) => {

    return (
       <div className="header">
{/* ================================REPLACE THE H1 for LOGO IMAGE ===================================*/}
           <div className="logo">
            <h1>VITA</h1>
           </div>
            <Navigation />
       </div>
    )
}

export default Header;