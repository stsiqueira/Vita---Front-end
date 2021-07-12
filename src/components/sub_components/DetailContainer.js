import React from 'react';
import { useState, useEffect } from 'react';
import ItemDescription from './ItemDescription';
import Table from './Table';
import OthetItems from './OtherItems';


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
    const [richFoodItems, SetRichFoodItems] = useState([{}]);
    const [otherItems, SetOtherItems] = useState([{}]);
    const [itemImageUrl, SetItemImageUrl] = useState(false);
    const [itemDescription, SetItemDescription] = useState(false);

    let table1Heading = "Vitamins";
    let table2Heading = "Minerals";


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
                vitaminsTableContent.push({ name: nName, value: nValue, type: "Vitamins", linkName: linkName });
            }
            if (siteContent[0]["Minerals"][0].find(f => element.nutrientName.includes(f.name))) {
                let linkName = siteContent[0]["Minerals"][0].find(f => element.nutrientName.includes(f.name)).name;
                let nName = element.nutrientName;
                let nValue = element.value === 0 ? `0.1 ${element.unitName}` : `${element.value} ${element.unitName}`;
                mineralsTableContent.push({ name: nName, value: nValue, type: "Minerals", linkName: linkName });
            }

        });
        SetVitaminComposition(vitaminsTableContent);
        SetMineralComposition(mineralsTableContent);
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
    let richFoodsItemsList = [];


    const addToRichIemList = (richFoods, foodType) => {

        richFoods = richFoods.split(", ");
        richFoods.forEach(element => {
            const rich = {
                name: element,
                imgUrl: siteContent[0][foodType][0].find(i => i.name === element).imageUrl,
                type: foodType
            }
            richFoodsItemsList.push(rich);
        });

    }

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

            // Feature - Pull Food Items through Vitamins or Minerals
            if (itemType === "Minerals" || itemType === "Vitamins") {

                let richFoods = siteContent[0][itemType][0].find(i => i.name === itemName).richFruits;

                addToRichIemList(richFoods, "Fruits");
                richFoods = siteContent[0][itemType][0].find(i => i.name === itemName).richVegetables;

                addToRichIemList(richFoods, "Vegetables");

                richFoodsItemsList = shuffle(richFoodsItemsList);
                richFoodsItemsList.splice(4);
                SetRichFoodItems(richFoodsItemsList);
            }
        })();
    }, [itemName]);

    let otherHeading = "Other " + itemType;
    let selectedItemHeading = itemName + " Rich Food";
    console.log(richFoodItems)
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
                    dispalyImages &&
                    <div className="imagesContent">
                        <OthetItems heading={selectedItemHeading} otherItemsList={richFoodItems} />
                    </div>
                }
            </div>
            <div className="otherItemsContainer">
                <OthetItems heading={otherHeading} otherItemsList={otherItems} />
            </div>
        </>
    )
}

export default DetailContainer;