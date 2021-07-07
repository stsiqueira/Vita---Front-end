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
                    label:element,
                    value:1
                }
            )
        })
        
        return data
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

    const margin = { top: 30, right: 200, bottom: 30, left: 30 };
    const styles = {
        root: {
          textAlign: "center",
          position: "relative",
        },
        overlay: {
          position: "absolute",
          top: 0,
          right: margin.right,
          bottom: 0,
          left: margin.left,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
          textAlign: "center",
          pointerEvents: "none"
        }
    };

    return (
        <div className="searchNutrient">

            <div className="vitaminsChart">
                <MyResponsivePie data={vitaminArray} callback={undefined} />
                {/* <div className="overlay" style={styles.overlay}>
                    <span>Vitamins</span>
                </div> */}
            </div>
            <div className="mineralsChart">
                <MyResponsivePie data={mineralArray} callback={undefined} />
                {/* <div className="overlay" style={styles.overlay}>
                    <span>Minerals</span>
                </div> */}
            </div>

        </div>
    )
}

export default SearchNutrient;