////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  HOME PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import Subscribe from '../components/subscribe'
import Search from '../components/Search'
import SearchNutrient from '../components/SearchNutrient'
import Recalculate from '../components/sub_components/Recalculate'
import About from '../components/About'



const Home = (props) => {


    return (
       <div className="home">

           

{/*
======================================================================================
                About Vita Component - Thiago
====================================================================================== 
*/}
            <About />

{/*
======================================================================================
==                Search for Fruits and Vegetables Component - Aman
====================================================================================== 
*/}
            <Search/>
  {/*
  ======================================================================================
==                Search for Minerals and Vitamins Component - Aman
====================================================================================== 
*/}
            <SearchNutrient/>
  {/*
  ======================================================================================
  ==                Nutrient Calculator - Glen
  ====================================================================================== 
  */}      
            <Recalculate
                buttonText="Calculate"
                descriptionText="Try Our Nutrient Calculator To See Your Daily Needs"
            />

  {/*
  ======================================================================================
  ==                Subscribe Component - Thiago
  ====================================================================================== 
  */}
      <Subscribe/>

       </div>
    )
}

export default Home;