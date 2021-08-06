////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  HOME PAGE COMPONENT 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import Subscribe from '../components/subscribe'
import Search from '../components/Search'
import SearchNutrient from '../components/SearchNutrient'
import Recalculate from '../components/sub_components/Recalculate'
import About from '../components/About'
import { useEffect } from 'react';


const Home = (props) => {

    useEffect(() => {
        (async function () {

            let homePage = document.querySelector(".home");
            let header = document.querySelector(".header > .max-width-wrapper");
            if (homePage && header && window.innerWidth > 900) {
                header.style.width = "80%";
                header.style.margin = "auto";
            }
            window.addEventListener('resize', function (event) {
                let homePage = document.querySelector(".home");
                if (homePage && header && window.innerWidth > 900) {
                    header.style.width = "80%";
                    header.style.margin = "auto";
                }
                else{
                    header.style.removeProperty("width");
                    header.style.removeProperty("margin");
                }
            });



        })();



    }, []);

    return (
        <div className="home">
            <div className="about-search-nutrient-wrapper">
                <div className="max-width">
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
                    <Search />
                    {/*
        ======================================================================================
        ==                Search for Minerals and Vitamins Component - Aman
        ====================================================================================== 
        */}
                    <SearchNutrient />
                </div>

            </div>

            <div className="home-calculate-subscribe-wrapper">
                <div className="max-width">



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
                    <Subscribe />
                </div>

            </div>
        </div>
    )
}

export default Home;