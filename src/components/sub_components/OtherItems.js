import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


const OtherItems = ({ heading, otherItemsList }) => {

    const [headDescription, SetHeadDescription] = useState("");

    //FirstLoad - Check if data is sent or not
    useEffect(() => {
        (async function () {

            if (heading.includes("Vitamins"))
                SetHeadDescription("Vitamins are organic molecules that are essential micronutrients which an organism needs in small quantities for the proper functioning of its metabolism.")
            else if (heading.includes("Minerals"))
                SetHeadDescription("Minerals are chemical elements required as an essential nutrient by organisms to perform functions necessary for life.");
            else SetHeadDescription("");

        })();
    }, [heading]);


    let itemImageUrl = "/img/";
    return (
        <div>
            <h2>{heading}</h2>
            <div className="headDescription">
                {headDescription}
            </div>
            <div className="otherItems">
                {
                    otherItemsList && otherItemsList.map((item, key) => (
                        <Link key={key} to={`/Description/${item.type}/${item.name}`}>
                            <div className="otherItem" >
                                {/* <img src={item.itemImageUrl} alt={item.itemName + "image"} /> */}
                                <img src={itemImageUrl + item.imgUrl} alt={item.itemName + "image"} />
                                <h4>{item.name}</h4>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default OtherItems;