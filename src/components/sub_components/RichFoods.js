import React from 'react';
import { useState, useEffect } from 'react';
import OthetItems from './OtherItems';

const RichFoods = ({ nutrientName, nutrientType, siteContent }) => {

    const [richFoodItems, SetRichFoodItems] = useState([{}]);
    let selectedItemHeading = nutrientName + " Rich Food";

    let richFoodsItemsList = [];


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

    //FirstLoad - Check if data is sent or not
    useEffect(() => {
        (async function () {

            
              
            
        })();
    }, [nutrientName]);

    useEffect(() => {
        (async function () {

            if (typeof(siteContent) == "undefined"){

                siteContent = [];
                const backendServiceUrlRoot = "http://54.70.7.254:3000/"
                const fetchData = async (url) => {
                    const res = await fetch(url)
                    const data = await res.json();
            
                    return data;
                }
                let foodObj, nutrientObj;
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
            }

            // Feature - Pull Food Items through Vitamins or Minerals
            if (siteContent.length>0 && siteContent[0][nutrientType] && (nutrientType === "Minerals" || nutrientType === "Vitamins")) {

                let richFoods = siteContent[0][nutrientType][0].find(i => i.name === nutrientName).richFruits;

                addToRichIemList(richFoods, "Fruits");
                richFoods = siteContent[0][nutrientType][0].find(i => i.name === nutrientName).richVegetables;

                addToRichIemList(richFoods, "Vegetables");

                richFoodsItemsList = shuffle(richFoodsItemsList);
                richFoodsItemsList.splice(4);
                SetRichFoodItems(richFoodsItemsList);
            }
        })();
    }, [nutrientName, siteContent]);

    return (
        <div className="richFood">
            <div className="imagesContent">
                <OthetItems heading={selectedItemHeading} otherItemsList={richFoodItems} />
            </div>
        </div>
    )
}

export default RichFoods;