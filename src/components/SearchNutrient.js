import React from 'react';
import { useState, useEffect } from 'react';
import MyResponsivePie from "./sub_components/Chart";

const SearchNutrient = (props) => {

    const [vitaminArray, setVitaminArray] = useState([]);
    const [mineralArray, setMineralArray] = useState([]);
    let dataContent = [];
    let availableMinerals = [];
    let availableVitamins = [];
    let nutrientObj;

    const backendServiceUrl = "http://54.70.7.254:3000/getAllNutrients"

    const fetchData = async (url) => {
        const res = await fetch(url)
        const data = await res.json();
        return data;
    }
    const addKeyToJsonArray = (arr) => {
        let data = [];
        arr.map(element => {
            data.push(
                {
                    id:element,
                    label:element.replace("Vitamin ", ""),
                    value:1,
                    color: assignColor(element)
                }
            )
        })
        
        return data
    }

    const assignColor = (nutrientName) => {
       let color;

       switch(nutrientName) {
        case "Vitamin A":
          color ="#EABB36";
          break;
        case "Vitamin C":
         color ="#F69128";
        break;
          case "Vitamin B6":
         color ="#EB3860";
          break;
        case "Vitamin E":
         color ="#E8A113";
        break;
          case "Vitamin K":
         color ="#B71174";
          break;
        case "Vitamin B3":
         color ="#F56224";
        break;
          case "Vitamin B5":
         color ="#F1483D";
          break;
        case "Calcium":
         color ="#1898E8";
        break;
          case "Copper":
         color ="#168B16";
          break;
        case "Iron":
         color ="#35C985";
        break;
          case "Magnesium":
         color ="#30B553";
          break;
        case "Phosphorus":
         color ="#6D23B5";
        break;
          case "Potassium":
         color ="#20B6CE";
          break;
        case "Zinc":
         color ="#1A4BE5";

          break;
        default:
          color = "hotpink" 
      }

        return color;
    }

    //First Load
    useEffect(() => {
        if (dataContent.length === 0) {
            const fetchNutrientsData = async () => {
                let nutrientData = await fetchData(backendServiceUrl);
                nutrientObj = {
                    "Minerals": [nutrientData[0].Minerals],
                    "Vitamins": [nutrientData[1].Vitamins]
                }
                dataContent.push(nutrientObj);
                dataContent[0].Minerals[0].map(e => { availableMinerals.push(e.name) });
                dataContent[0].Vitamins[0].map(e => { availableVitamins.push(e.name) });

                setVitaminArray(addKeyToJsonArray(availableVitamins));
                setMineralArray(addKeyToJsonArray(availableMinerals));
            }
            fetchNutrientsData();
        }
    }, []);

    return (
        <div className="searchNutrient">
            <div className="title">
              <h2>Search by Vitamin or Mineral </h2>
            </div>
            <div className="details">
              <p>You can click on the chart to see food items that contain the selected vitamin or mineral. </p>
            </div>
            <div className="charts">
              <div className="vitaminsChart">
                <div className="VitaminTitle">
                  <h3>Vitamins</h3>
                </div>
                  <MyResponsivePie data={vitaminArray} callback={undefined} legendFlag="true" />
                  {/* <div className="overlay" style={styles.overlay}>
                      <span>Vitamins</span>
                  </div> */}
              </div>
              <div className="mineralsChart">
                <div className="MineralTitle">
                  <h3>Minerals</h3>
                </div>
                  <MyResponsivePie data={mineralArray} callback={undefined} legendFlag="true" />
                  {/* <div className="overlay" style={styles.overlay}>
                      <span>Minerals</span>
                  </div> */}
              </div>

            </div>


        </div>
    )
}

export default SearchNutrient;