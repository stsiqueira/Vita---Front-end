import React from 'react';
import { useState, useEffect } from 'react';
import ItemDescription from './ItemDescription';
import Table from './Table';
import OthetItems from './OtherItems';
import RichFood from './RichFoods';
import { vitaminSort, mineralSort } from '../../data/data.json';


const DetailContainer = ({ itemName, itemType }) => {

    let siteContent = [];
    const backendServiceUrlRoot = "http://54.70.7.254:3000/"

    const fetchData = async (url) => {
        const res = await fetch(url)
        const data = await res.json();

        return data;
    }

    const [vitaminCompostion, SetVitaminComposition] = useState([{ name: "nName", value: "nValue" }]);
    const [mineralCompostion, SetMineralComposition] = useState([{ name: "nName2", value: "nValue2" }]);
    const [dispalyTables, SetDispalyTables] = useState(false);
    const [dispalyImages, SetDispalyImages] = useState(false);
    const [richFoodData, SetRichFoodData] = useState([{}]);
    const [otherItems, SetOtherItems] = useState([{}]);
    const [itemImageUrl, SetItemImageUrl] = useState(false);
    const [itemDescription, SetItemDescription] = useState(false);

    let table1Heading = "Vitamins";
    let table2Heading = "Minerals";

    const assignLegendColor = (nutrientName) => {
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

    const fetchUSDAResponse = async (foodName) => {

        var vitaminsTableContent = [];
        var mineralsTableContent = [];
        const apiKeyUSDA = 'B6tfMoucsDyLwscu4iFzcr2mw4wcwC7e0aahbNUH';
        const apiUrlUSDA = 'https://api.nal.usda.gov/fdc/v1/foods/search?query=';

        const res = await fetch(`${apiUrlUSDA}${foodName}&pageSize=200&api_key=${apiKeyUSDA}`)
        const data = await res.json();
        const nutrientsArray = data.foods[0].foodNutrients;


        nutrientsArray.map(element => {
            if (siteContent[0]["Vitamins"][0].find(f => element.nutrientName.includes(f.name))) {
                let linkName = siteContent[0]["Vitamins"][0].find(f => element.nutrientName.includes(f.name)).name;
                let nName = element.nutrientName;
                let nValue = element.value === 0 ? `0.1 ${element.unitName}` : `${element.value} ${element.unitName}`;
                vitaminsTableContent.push({
                    name: linkName,
                    value: nValue,
                    type: "Vitamins",
                    linkName: linkName,
                    backgroundColor: assignCellColor(linkName),
                    legendColor: assignLegendColor(linkName)
                });
            }
            if (siteContent[0]["Minerals"][0].find(f => element.nutrientName.includes(f.name))) {
                let linkName = siteContent[0]["Minerals"][0].find(f => element.nutrientName.includes(f.name)).name;
                let nName = element.nutrientName;
                let nValue = element.value === 0 ? `0.1 ${element.unitName}` : `${element.value} ${element.unitName}`;
                mineralsTableContent.push({
                    name: nName,
                    value: nValue,
                    type: "Minerals",
                    linkName: linkName,
                    backgroundColor: assignCellColor(linkName),
                    legendColor: assignLegendColor(linkName)
                });
            }

        });

        let mineralSort = ['Phosphorus', 'Zinc', 'Calcium', 'Potassium', 'Iron', 'Magnesium', 'Copper'];
        let vitaminSort = ['Vitamin A', 'Vitamin E', 'Vitamin C', 'Vitamin B3', 'Vitamin B5', 'Vitamin K']
        let mineralSortResult = []
        let vitaminSortResult = []

        mineralSort.forEach(function (key) {
            var found = false;
            mineralsTableContent = mineralsTableContent.filter(function (item) {
                if (!found && item.linkName == key) {
                    mineralSortResult.push(item);
                    found = true;
                    return false;
                } else
                    return true;
            })
        })
        vitaminSort.forEach(function (key) {
            var found = false;
            vitaminsTableContent = vitaminsTableContent.filter(function (item) {
                if (!found && item.linkName == key) {
                    vitaminSortResult.push(item);
                    found = true;
                    return false;
                } else
                    return true;
            })
        })


        SetVitaminComposition(vitaminSortResult);
        SetMineralComposition(mineralSortResult);
    }


    function shuffle(array) {
        var currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    let otherSimilarItemsList = [];

    function scrollToJustAbove(element, margin = 20) {
        let dims = element.getBoundingClientRect();
        let gap = dims.top - margin;
        window.scrollTo({behavior: 'smooth', top: gap});
    }

    useEffect(() => {
        (async function () {
            let header = document.querySelector(".header > .max-width-wrapper");
            header.style.removeProperty("width");
            header.style.removeProperty("margin");
        })();
    }, []);

    useEffect(() => {
        (async function () {

            if (itemType === "Fruits" || itemType === "Vegetables") {
                SetDispalyTables(true);
                SetDispalyImages(false);
                // Feature - Pull Vitamins or Minerals through Food Items
                fetchUSDAResponse(itemName)

            } else if (itemType === "Minerals" || itemType === "Vitamins") {
                SetDispalyImages(true);
                SetDispalyTables(false);
            }

            scrollToJustAbove(document.getElementById('ItemDescription'))

        })();
    }, [itemName]);

    useEffect(() => {
        (async function () {

            let foodObj, nutrientObj;
            if (siteContent.length === 0) {
                const foodMethod = backendServiceUrlRoot + "getAllFoods";
                const nutrientMethod = backendServiceUrlRoot + "getAllNutrients";
                const fetchFoodData = async (foodMethod) => {
                    let foodData = await fetchData(foodMethod);
                    foodObj = {
                        "Fruits": [foodData[0].Fruits],
                        "Vegetables": [foodData[1].Vegetables]
                    }

                }
                const fetchNutrientsData = async (foodMethod) => {
                    let nutrientData = await fetchData(foodMethod);
                    nutrientObj = {
                        "Minerals": [nutrientData[0].Minerals],
                        "Vitamins": [nutrientData[1].Vitamins]
                    }
                }
                await fetchFoodData(foodMethod);
                await fetchNutrientsData(nutrientMethod);

                siteContent.push({
                    Fruits: foodObj.Fruits,
                    Vegetables: foodObj.Vegetables,
                    Minerals: nutrientObj.Minerals,
                    Vitamins: nutrientObj.Vitamins
                })
                SetRichFoodData(siteContent);
                console.log(siteContent);
                SetItemImageUrl(siteContent[0][itemType][0].find(f => f.name === itemName).imageUrl);
                SetItemDescription(siteContent[0][itemType][0].find(f => f.name === itemName).description);
            }

            let unselectedItems = siteContent[0][itemType][0].filter(i => i.name !== itemName);
            unselectedItems = shuffle(unselectedItems);

            for (let i = 0; i < 4; i++) {
                const element = {
                    name: unselectedItems[i].name,
                    imgUrl: unselectedItems[i].imageUrl,
                    type: itemType
                }
                otherSimilarItemsList.push(element);
            }

            SetOtherItems(otherSimilarItemsList);

        })();
    }, [itemName]);

    let otherHeading = "Other " + itemType;

    return (
        <>
            <ItemDescription itemName={itemName} itemText={itemDescription} itemImageUrl={itemImageUrl} />
            <div className="descriptiveContent">
                {dispalyTables &&
                    <div className="tables">
                        {vitaminCompostion && vitaminCompostion.length > 1 && <Table tableHeading={table1Heading} tableContent={vitaminCompostion} />}
                        {mineralCompostion && mineralCompostion.length > 1 && <Table tableHeading={table2Heading} tableContent={mineralCompostion} />}
                    </div>
                }
                {
                    dispalyImages && <RichFood nutrientName={itemName} nutrientType={itemType} siteContent={richFoodData} />
                }
            </div>
            <div className="otherItemsContainer">
                <OthetItems heading={otherHeading} otherItemsList={otherItems} />
            </div>
        </>
    )
}

export default DetailContainer;