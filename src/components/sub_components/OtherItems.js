import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


const OtherItems = ({ heading, otherItemsList }) => {

    const [headDescription, SetHeadDescription] = useState("");

    //FirstLoad - Check if data is sent or not
    useEffect(() => {
        (async function () {

            if (heading.includes("Vitamins")){
                SetHeadDescription("Vitamins are organic molecules that are essential micronutrients which an organism needs in small quantities for the proper functioning of its metabolism.")
            }
            else if (heading.includes("Minerals")){
                SetHeadDescription("Minerals are chemical elements required as an essential nutrient by organisms to perform functions necessary for life.");
            }
            else SetHeadDescription("");

        })();
    }, [heading]);

    const assignCellColor = (nutrientName) => {
        let color;

        switch (nutrientName) {
            case "Vitamin A":
                color = "#FFF7E2";
                break;
            case "Vitamin C":
                color = "#FFEFD0";
                break;
            case "Vitamin B6":
                color = "#FFE0E7";
                break;
            case "Vitamin E":
                color = "#FFEFD0";
                break;
            case "Vitamin K":
                color = "#FFEDF8 ";
                break;
            case "Vitamin B3":
                color = "#FFDFD1";
                break;
            case "Vitamin B5":
                color = "#FFE8E6";
                break;
            case "Calcium":
                color = "#E2F4FF";
                break;
            case "Copper":
                color = "#CCFFCC";
                break;
            case "Iron":
                color = "#D9FFEE";
                break;
            case "Magnesium":
                color = "#D6FFE1";
                break;
            case "Phosphorus":
                color = "#F0E4FC";
                break;
            case "Potassium":
                color = "#E0FBFF";
                break;
            case "Zinc":
                color = "#E2E8FD";

                break;
            default:
                color = "#FFE8E6"
        }

        return color;
    }

    const assignTextColor = (nutrientName) => {
        let color;

        switch (nutrientName) {
            case "Vitamin A":
                color = "#EABB36";
                break;
            case "Vitamin C":
                color = "#F69128";
                break;
            case "Vitamin B6":
                color = "#EB3860";
                break;
            case "Vitamin E":
                color = "#E8A113";
                break;
            case "Vitamin K":
                color = "#B71174";
                break;
            case "Vitamin B3":
                color = "#F56224";
                break;
            case "Vitamin B5":
                color = "#F1483D";
                break;
            case "Calcium":
                color = "#1898E8";
                break;
            case "Copper":
                color = "#168B16";
                break;
            case "Iron":
                color = "#35C985";
                break;
            case "Magnesium":
                color = "#30B553";
                break;
            case "Phosphorus":
                color = "#6D23B5";
                break;
            case "Potassium":
                color = "#20B6CE";
                break;
            case "Zinc":
                color = "#1A4BE5";

                break;
            default:
                color = "hotpink"
        }

        return color;
    }

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
                        <Link key={key} to={`/Description/${item.type}/${item.name}`} style={heading == "Other Vitamins" ? {background:assignCellColor(item.name)} : heading == "Other Minerals" ? {background:assignCellColor(item.name)} :{}} >
                            <div className="otherItem" >
                                {/* <img src={item.itemImageUrl} alt={item.itemName + "image"} /> */}
                                <div className="image-wrapper">
                                    <img src={itemImageUrl + item.imgUrl} alt={item.itemName + "image"} />
                                </div>
                                <div className="text-wrapper">
                                    <h4 style={heading == "Other Vitamins" ? {color:assignTextColor(item.name)} : heading == "Other Minerals" ? {color:assignTextColor(item.name)} :{}}>{item.name}</h4>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default OtherItems;





