////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nutrient Result component. 
// 
////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useLocation, useHistory, Link } from "react-router-dom";
import React from 'react';
import { useState, useRef } from 'react';
import UnorderedList from '../compositableComponents/Unorderedlist'
import MyResponsivePie from "./Chart";
import Recalculate from "./Recalculate";
import HealthConcerns from "./HealthConcerns";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RichFood from './RichFoods';
import { vitaminColor, vitaminSort, mineralSort, mineralColor, mineralShortform } from '../../data/data.json';


const NutrientResults = () => {
    const location = useLocation()
    const history = useHistory()
    const { vitamin, mineral } = location.state

    const [selectedNutrientType, SetSelectedNutrientType] = useState("Vitamins");
    const [selectedNutrient, SetSelectedNutrient] = useState("Vitamin A");

    const addVitaminSort = vitamin.map(element => {
        element["link"] = `/Description/Vitamins/${element.name}`

        if (element.name === "Niacin") {
            element["name"] = "Vitamin B3"
            element["color"] = vitaminColor["Vitamin B3"]
        }
        else if (element.name === "Pantothenic Acid") {
            element["name"] = "Vitamin B5"
            element["color"] = vitaminColor["Vitamin B5"]
        }
        element["sort"] = vitaminSort[element.name]

        return element
    })

    const addMineralSort = mineral.map(element => {
        element["link"] = `/Description/Minerals/${element.name}`
        element["sort"] = mineralSort[element.name]
        return element
    })

    const GetSortOrder = (prop) => {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }

    addVitaminSort.sort(GetSortOrder("sort"))
    addMineralSort.sort(GetSortOrder("sort"))

    const cleanValue = (value) => {

        if (value.includes(","))
            value = value.replace(",", "")

        if (value.toString().indexOf('.') !== -1)
            return parseFloat(value)

        return parseInt(value)
    }

    const convertingUnits = (value) => {
        const splitArray = value.split(" ")
        const cleanedValue = cleanValue(splitArray[0])

        if (splitArray.length < 2)
            return cleanedValue * 1000

        if (splitArray[1].includes("mg"))
            return cleanedValue * 1000

        else if (value.includes(" g"))
            return cleanedValue * 1000000

        return cleanedValue
    }

    const addKeyToJsonArray = (arr) => {
        let total = 0
        const data = arr.map(element => {
            element["id"] = element.name
            element["label"] = element.name.includes("Vitamin") ? element.name.replace("Vitamin ", "") : mineralShortform[element.name]

            element["value"] = convertingUnits(element.recommended_intake)

            if (element.recommended_intake.length < 2) {
                element.recommended_intake = element.tolerable_intake
                element["value"] = convertingUnits(element.tolerable_intake)
            }

            total += element["value"]

            element["color"] = element.name.includes("Vitamin") ? vitaminColor[element.name] : mineralColor[element.name]
            return element
        })

        data.map(element => (
            element["value"] = ((element["value"] / total) * 100).toFixed(2)
        ))

        const filteredData = data.filter(singleData => singleData.value > 2)

        return filteredData
    }

    const redirect = (node) => {
        SetSelectedNutrientType(node.id.toLowerCase().includes("vitamin") ? "Vitamins" : "Minerals")
        SetSelectedNutrient(node.id)
    }

    const textClickCallback = (type, name) => {
        SetSelectedNutrientType(type)
        SetSelectedNutrient(name)
    }

    const [vitaminArray, setVitaminArray] = useState(addKeyToJsonArray(addVitaminSort));

    const [mineralArray, setMineralArray] = useState(addKeyToJsonArray(addMineralSort));


    const myRef = useRef(null)

    const stateData = (updatedArray, prevState, vitamin) => {
        let item = updatedArray.filter(element => element["id"] === vitamin)[0]
        let newData = prevState.filter(element => element["id"] !== vitamin)
        return [...newData, item];
    }

    const updateChartData = (arr, vitamin, updatedValue, flag) => {
        const item = { ...arr.filter(element => element["id"] === vitamin)[0] };
        item["value"] = (Number(item["value"]) + updatedValue).toFixed(2).toString()

        const updatedArray = arr.map(element => {
            if (element["id"] === vitamin) {
                element = item
            }
            return element
        })
        { flag ?
            setMineralArray(prevState => {
                return stateData(updatedArray, prevState, vitamin)
            }) : 
            setVitaminArray(prevState => {
                return stateData(updatedArray, prevState, vitamin)
            })
        }
    }

    const handleSubmit = (data) => {
        let arr = [...vitaminArray];

        if (data["fatigue"]) {
            updateChartData(arr, "Vitamin B5", 10)
        }

        if (data["hairloss"]) {
            updateChartData(arr, "Vitamin E", 5)
        }

        if (data["insomnia"]) {
            let arra = [...mineralArray];
            updateChartData(arra, "Calcium", -5, 1)
        }

        if (data["skinproblems"]) {
            updateChartData(arr, "Vitamin B3", 10)
        }

        myRef.current.scrollIntoView({behavior: "smooth"})
    }

    const recalculateClick = () => {
        history.push({
            pathname: "/NutrientCalculator/Start"
        })
    }

    const tabListVitaminWrapper = () => {
        return (
            <div className="chart-vitamin-result-wrapper">
                <div className="chart-wrapper" >
                    <MyResponsivePie
                        data={vitaminArray}
                        callback={redirect}
                        legendFlag={true}
                        parentFlag={true}
                        centreText="Vitamins"
                        subCentreText="by day"
                        bottomCentreText={window.innerWidth > 600 ? "Click on the nutrient on the chart or the table to see  food items where it can be found." : ""}
                    />
                </div>
                <div className="vitamin-result-wrapper">
                    <UnorderedList
                        headflag={true} classname="vitamins-list"
                        borderclassname={true}
                        rectclassname={true}
                        name="vitamins"
                        arr={addVitaminSort}
                        flag={true}
                        callback={textClickCallback}
                    />
                </div>
            </div>
        );
    }

    const tabListMineralWrapper = () => {
        return (
            <div className="chart-mineral-result-wrapper">
                <div className="chart-wrapper">
                    <MyResponsivePie
                        data={mineralArray}
                        callback={redirect}
                        legendFlag={true}
                        parentFlag={true}
                        centreText={"Minerals"}
                        subCentreText="by day"
                        bottomCentreText={window.innerWidth > 600 ? "Click on the nutrient on the chart or the table to see  food items where it can be found." : ""}
                    />
                </div>
                <div className="mineral-result-wrapper">
                    <UnorderedList
                        headflag={true}
                        classname="minerals-list" name="minerals"
                        arr={addMineralSort}
                        flag={true}
                        callback={textClickCallback}
                    />
                </div>
            </div>
        )
    }

    return (

        <div className="nutrient-results-wrapper">
            <div className="nutrient-calculator-introduction">
                <div className="nutrient-calculator-header">
                    <h2 className="result-heading">Your Results</h2>
                    <p>
                        Here are your results. This suggestions are in no way medical advice. If you are feeling seriously unwell, please, go see a doctor. Your physician’s word is final. This calculator is here to help you to make your daily diet healthier, not to substitute medical advice.
                    </p>
                </div>
            </div>
            <div ref={myRef} className="results-wrapper">
                <Tabs>
                    {window.innerWidth < 600 ? <TabList className="vitamin-mineral-tab-wrapper">
                        <Tab>Vitamins</Tab>
                        <Tab>Minerals</Tab>
                    </TabList> : <></>}
                    {window.innerWidth < 600 ? <TabPanel>{tabListVitaminWrapper()}</TabPanel> : <>{tabListVitaminWrapper()}</>}
                    {window.innerWidth < 600 ? <TabPanel>{tabListMineralWrapper()}</TabPanel> : <>{tabListMineralWrapper()}</>}
                </Tabs>
                {window.innerWidth < 600 ? <div className="nutrient-note">
                    <p>
                        Click on the nutrient on the chart or the table to see food items where it can be found.
                        </p>
                </div> :
                    <></>
                }
                <div className="descriptiveContent">
                    { selectedNutrientType && selectedNutrient &&
                        <RichFood nutrientType = {selectedNutrientType} nutrientName = {selectedNutrient}/>      
                    }
                </div>
                <div className="health-concern-wrapper">
                    <div className="health-concern-description">
                        <h2>Health Concerns</h2>
                        <p>
                            Do you want to update your results with your health concerns?
                            We can give you suggestions of nutrients to help!
                        </p>
                    </div>
                    <div className="options">
                        <HealthConcerns
                            wrapperClassname="wrapper"
                            imageUrl="https://picsum.photos/100"
                            imgClassName="emoji"
                            altText="wow"
                            callback={handleSubmit}
                        />
                    </div>
                </div>
                <Link
                    to={{ pathname: "https://fdc.nal.usda.gov/api-guide.html" }} target="_blank" className="reference">
                    This data is sourced from U.S. department of agriculture
                </Link>
            </div>

            <Recalculate
                parentClassname="recalculator-wrapper"
                descriptionClassname="desciption-wrapper"
                descriptionText="Do you want to use the calculator again? No problem! Just remember to save any data you want from your recent use (we do not store your data)."
                buttonWrapperClassname="recalculate-button-wrapper" buttonClassname="recalculate-button"
                buttonText="Recalculate"
                classname="buttonClassname"
                callback={recalculateClick}
            />
        </div>
    )
}

export default NutrientResults;