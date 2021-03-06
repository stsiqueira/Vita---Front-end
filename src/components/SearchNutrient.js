import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import MyResponsivePie from "./sub_components/Chart";

const SearchNutrient = (props) => {

  const history = useHistory()
  const redirect = (e) => {
    history.push({
      pathname: e.data.link,
    });
  }

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
  const addKeyToJsonArray = (arr, type) => {
    let data = [];
    arr.map(element => {
      data.push(
        {
          id: element,
          label: assignShortName(element),
          value: 1,
          color: assignColor(element),
          link: `/Description/${type}/${element}`
        }
      )
    })
    return data
  }

  const assignColor = (nutrientName) => {
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

  const assignShortName = (nutrientName) => {

    if (nutrientName.includes("Vitamin")) {
      return nutrientName.replace("Vitamin ", "")
    }
    else {
      let short;
      switch (nutrientName) {
        case "Calcium":
          short = "Ca";
          break;
        case "Copper":
          short = "Cu";
          break;
        case "Iron":
          short = "Fe";
          break;
        case "Magnesium":
          short = "Mg";
          break;
        case "Phosphorus":
          short = "P";
          break;
        case "Potassium":
          short = "K";
          break;
        case "Zinc":
          short = "Zn";
          break;

      }
      return short;
    }
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

        setVitaminArray(addKeyToJsonArray(availableVitamins, "Vitamins"));
        setMineralArray(addKeyToJsonArray(availableMinerals, "Minerals"));
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
          <MyResponsivePie data={vitaminArray} callback={redirect} legendFlag="false" removeDataMetrics={true}
          //  centreText={"Minerals"}
            />
          <div className="legendContainer legendVitamnins">
            {vitaminArray && vitaminArray.map((item, key) => (
              <div className="legendItem" key={key}>
                <div className="box" style={{ width: "1.25rem", height: "0.75rem", backgroundColor: item.color }} />
                <div className="label">{item.id}</div>
              </div>
            ))
            }
          </div>
        </div>
        <div className="mineralsChart">
          <div className="MineralTitle">
            <h3>Minerals</h3>
          </div>
          <MyResponsivePie data={mineralArray} callback={redirect} legendFlag="false" removeDataMetrics={true} 
          // centreText={"Minerals"} 
          />
          <div className="legendContainer legendMinerals">
            {mineralArray && mineralArray.map((item, key) => (
              <div className="legendItem" key={key}>
                <div className="box" style={{ width: "1.25rem", height: "0.75rem", backgroundColor: item.color }} />
                <div className="label">{item.id}</div>
              </div>
            ))
            }
          </div>
        </div>

      </div>


    </div>
  )
}

export default SearchNutrient;