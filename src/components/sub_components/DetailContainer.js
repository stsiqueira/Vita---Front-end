import React from 'react';
import { useState, useEffect } from 'react';
import ItemDescription from './ItemDescription';
import Table from './Table';
import OthetItems from './OtherItems';


const DetailContainer = ({ itemName, itemType }) => {

    let siteContent = [
        {
            Fruits: [{
                id: 1,
                name: "Apples",
                imageUrl: "fruits/apple.svg",
                description: "A raw apple is 86% water and 14% carbohydrates, with negligible content of fat and protein. A reference serving of a raw apple with skin weighing 100 grams provides 52 calories and a moderate content of dietary fiber. All parts of the fruit, including the skin, except for the seeds, are suitable for human consumption. The core, from stem to bottom, containing the seeds, is usually not eaten and is discarded. Apples can be consumed various ways: juice, raw in salads, baked in pies, cooked into sauces and spreads like apple butter, and other baked dishes. Apple seeds contain small amounts of amygdalin, a sugar and cyanide compound known as a cyanogenic glycoside. Ingesting small amounts of apple seeds causes no ill effects, but consumption of extremely large doses can cause adverse reactions."
            }, {
                id: 2,
                name: "Apricots",
                imageUrl: "fruits/apricot.svg",
                description: "In a 100-gram amount, raw apricots supply 48 Calories and are composed of 11% carbohydrates, 1% protein, less than 1% fat, and 86% water. Raw apricots are a moderate source of vitamin A and vitamin C. The apricot is the national fruit of Armenia, mostly growing in the Ararat plain. It is often depicted on souvenirs. Apricot kernels (seeds) contain amygdalin, a poisonous compound. In 2019, world production of apricots was 4.1 million tonnes, led by Turkey with 21% of the world total. "
            }, {
                id: 3,
                name: "Avocado",
                imageUrl: "fruits/avocado.svg",
                description: "Raw avocado flesh is 73% water, 15% fat, 9% carbohydrates, and 2% protein. In a 100 gram reference amount, avocado supplies 160 calories, and is a rich source of several B vitamins and vitamin K, with moderate contents of vitamin C, vitamin E, and potassium. Mexico is by far the world's largest avocado growing country, producing several times more than the second largest producer. Avocado leaves, bark, skin, or pit are documented to be harmful to animals; cats, dogs, cattle, rats, guinea pigs, fish, and horses can be severely harmed or even killed when they consume them. The avocado fruit is poisonous to some birds as well. "
            }, {
                id: 4,
                name: "Bananas",
                imageUrl: "fruits/banana.svg",
                description: "Raw bananas (not including the peel) are 75% water, 23% carbohydrates, 1% protein, and contain negligible fat. A 100-gram reference serving supplies 89 Calories, 31% of the US recommended Daily Value of vitamin B6, and moderate amounts of vitamin C, manganese and dietary fiber. Although bananas are commonly thought to contain exceptional potassium content, their actual potassium content is not high per typical food serving, having only 8% of the US recommended Daily Value for potassium, and their potassium-content ranking among fruits, vegetables, legumes, and many other foods is relatively moderate."
            }, {
                id: 5,
                name: "Blueberries",
                imageUrl: "fruits/blueberries.svg",
                description: " "
            }, {
                id: 6,
                name: "Cantaloupe",
                imageUrl: "fruits/cantaloupe.svg",
                description: " "
            }, {
                id: 7,
                name: "Cherry",
                imageUrl: "fruits/cherries",
                description: " "
            }, {
                id: 8,
                name: "Coconuts",
                imageUrl: "fruits/coconut",
                description: " "
            }, {
                id: 9,
                name: "Figs",
                imageUrl: "fruits/fig",
                description: " "
            }, {
                id: 10,
                name: "Grapes Raw",
                imageUrl: "fruits/grapes",
                description: " "
            }, {
                id: 11,
                name: "Kiwifruit",
                imageUrl: "fruits/kiwifruit",
                description: " "
            }, {
                id: 12,
                name: "Lime",
                imageUrl: "fruits/lime",
                description: " "
            }, {
                id: 13,
                name: "Mangoes",
                imageUrl: "fruits/mango",
                description: " "
            }, {
                id: 14,
                name: "Oranges",
                imageUrl: "fruits/orange",
                description: " "
            }, {
                id: 15,
                name: "Peaches",
                imageUrl: "fruits/peaches",
                description: " "
            }, {
                id: 16,
                name: "Pear",
                imageUrl: "fruits/pear",
                description: " "
            }, {
                id: 17,
                name: "Pineapples",
                imageUrl: "fruits/pineapple",
                description: " "
            }, {
                id: 18,
                name: "Raspberries",
                imageUrl: "fruits/raspberries",
                description: " "
            }, {
                id: 19,
                name: "Strawberry",
                imageUrl: "fruits/strawberries",
                description: " "
            }, {
                id: 20,
                name: "Watermelons",
                imageUrl: "fruits/watermelon.svg",
                description: " "
            }],
            Vegetables: [{
                id: 21,
                name: "Asparagus Raw",
                imageUrl: "vegetables/asparagus.svg",
                description: ""
            }, {
                id: 22,
                name: "Beetroot Raw",
                imageUrl: "vegetables/beetroot.svg",
                description: ""
            }, {
                id: 23,
                name: "Broccoli",
                imageUrl: "vegetables/broccoli.svg",
                description: ""
            }, {
                id: 24,
                name: "Brussels Sprouts",
                imageUrl: "vegetables/brussels_sprouts.svg",
                description: ""
            }, {
                id: 25,
                name: "Cabbages",
                imageUrl: "vegetables/cabbages.svg",
                description: ""
            }, {
                id: 26,
                name: "Carrot",
                imageUrl: "vegetables/carrots.svg",
                description: ""
            }, {
                id: 27,
                name: "Cauliflowers",
                imageUrl: "vegetables/cauliflower.svg",
                description: ""
            }, {
                id: 28,
                name: "Celery",
                imageUrl: "vegetables/celery.svg",
                description: ""
            }, {
                id: 29,
                name: "Garlic",
                imageUrl: "vegetables/garlic.svg",
                description: ""
            }, {
                id: 30,
                name: "Ginger Raw",
                imageUrl: "vegetables/ginger.svg",
                description: ""
            }, {
                id: 31,
                name: "Kale Raw",
                imageUrl: "vegetables/kale.svg",
                description: ""
            }, {
                id: 32,
                name: "Lettuce",
                imageUrl: "vegetables/lettuce.svg",
                description: ""
            }, {
                id: 33,
                name: "Leeks Raw",
                imageUrl: "vegetables/leeks.svg",
                description: ""
            }, {
                id: 34,
                name: "Onions",
                imageUrl: "vegetables/onions.svg",
                description: ""
            }, {
                id: 35,
                name: "Green Peas",
                imageUrl: "vegetables/green_peas.svg",
                description: ""
            }, {
                id: 36,
                name: "Peppers",
                imageUrl: "vegetables/peppers.svg",
                description: ""
            }, {
                id: 37,
                name: "Potato",
                imageUrl: "vegetables/potatoes.svg",
                description: ""
            }, {
                id: 38,
                name: "Pumpkins Raw",
                imageUrl: "vegetables/pumpkins.svg",
                description: ""
            }, {
                id: 39,
                name: "Spinach",
                imageUrl: "vegetables/spinach.svg",
                description: ""
            }, {
                id: 40,
                name: "Tomatoes",
                imageUrl: "vegetables/tomato.svg",
                description: ""
            }],
            Vitamins: [{
                id: 1001,
                name: "Vitamin A",
                imageUrl: "vitamins/vitamin_a.svg",
                description: "Vitamin A is a fat-soluble vitamin with several important functions in the body. It helps cells reproduce normally, is involved in healthy reproductive function and normal growth and development of the embryo and foetus. It is also required for maintenance of good vision, immune system function and keeping skin healthy. A deficiency of vitamin A can lead to blindness and increased viral infection. However, deficiency is only considered a problem in developing countries, where it is a leading cause of blindness in children.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"

            }, {
                id: 1002,
                name: "Vitamin C",
                imageUrl: "vitamins/vitamin_c",
                description: "Vitamin C is an essential nutrient required for the maintenance of skin, blood vessels, bones and cartilage, and wound healing. Vitamin C also helps protect cells against oxidative stress, which in turn provides protection against certain diseases, including cancer. Vitamin C, like zinc and vitamin A, also helps support your immune system.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"

            }, {
                id: 1003,
                name: "Vitamin B6",
                imageUrl: "vitamins/vitamin_b6",
                description: "Vitamin B6 (pyridoxine, pyridoxal, pyridoxamine) is a water-soluble vitamin necessary for processing amino acids in the body, which form the building blocks of proteins and some hormones. It is involved in red blood cell metabolism, proper functioning of the nervous and immune systems and various other bodily functions. A long-term deficiency in vitamin B6 can lead to skin inflammation (dermatitis) depression, confusion, convulsions, and even anemia. Recent studies also suggest that a diet low in vitamin B6 increases the risk of heart disease.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }, {
                id: 1004,
                name: "Vitamin E",
                imageUrl: "vitamins/vitamin_e",
                description: "Vitamin E is a group of 8 fat-soluble vitamins, which protect cell membranes and other fat-soluble tissues in the body against damage from oxidative stress. Adequate amounts of vitamin E can help protect against heart disease, cancer, and age-related eye damage (macular degeneration). Conversely, too much vitamin E from supplements can lead to excessive bleeding. Vitamin E foods, like the ones listed below, are considered to be safe and healthy.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }, {
                id: 1005,
                name: "Vitamin K",
                imageUrl: "vitamins/vitamin_k",
                description: "Vitamin K is an essential vitamin required for protein modification and blood clotting. Recent studies suggest that vitamin K may play a role in treating osteoporosis and Alzheimer's and that consuming increased levels of vitamin K can help protect against cancer and heart disease. Unless you are taking medication to prevent blood clots, there is no known risk of vitamin K toxicity, and no reason not to eat a lot of it.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }, {
                id: 1006,
                name: "Vitamin B3",
                imageUrl: "vitamins/vitamin_b3",
                description: "Vitamin B3, or niacin, is an essential vitamin required for processing fat in the body, lowering cholesterol levels, and regulating blood sugar levels. A deficiency of niacin leads to pellagra, a condition characterized by diarrhea, dermatitis, dementia, inflammation of the mouth, amnesia, delirium, and if left untreated, death. Even a slight deficiency of niacin can lead to irritability, poor concentration, anxiety, fatigue, restlessness, apathy, and depression.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }, {
                id: 1007,
                name: "Vitamin B5",
                imageUrl: "vitamins/vitamin_b5",
                description: "Vitamin B5, or Pantothenic Acid, is an essential vitamin required by the body for cellular energy production, producing, transporting and releasing energy from fats and the production of the neurotransmitter acetylcholine. A deficiency of vitamin B5 is rare, however, when it does occur is usually seen in the form of irritability, fatigue, apathy, numbness, paresthesia, and muscle cramps. It can also lead to increased sensitivity to insulin or hypoglycemia.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }],
            Minerals: [{
                id: 2001,
                name: "Calcium",
                imageUrl: "minerals/mineral_calcium",
                description: "Calcium is a mineral necessary for the growth and maintenance of strong teeth and bones, nerve signaling, muscle contraction, and secretion of certain hormones and enzymes. While rare, a deficiency in calcium can lead to numbness in the fingers and toes, muscle cramps, convulsions, lethargy, loss of appetite, and abnormal heart rhythms. A long-term deficiency can lead to bone loss and fragile bones.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }, {
                id: 2002,
                name: "Copper",
                imageUrl: "minerals/mineral_copper",
                description: "Copper is an essential trace mineral required by the body for energy production, absorption of iron, bone and connective tissue production, immune system function, synthesis of some hormones and red blood cell formation. A deficiency in copper can lead to weak bones, joint pain, vitamin b12 deficiency, iron deficiency, and anemia. Conversely, over-consumption of copper will lead to cramps, diarrhea, and vomiting in the short term.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }, {
                id: 2003,
                name: "Iron",
                imageUrl: "minerals/mineral_iron",
                description: "Iron is an essential mineral used to transport oxygen around the body in the form of hemoglobin. A slight deficiency in iron causes anemia (fatigue/weakness), and a chronic deficiency can lead to organ failure. Conversely, too much iron leads to the production of harmful free radicals, and interferes with metabolism, causing damage to organs like the heart and liver. The body is able to regulate the uptake of iron, so overdose is rare and usually only occurs when people take supplements.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }, {
                id: 2004,
                name: "Magnesium",
                imageUrl: "minerals/mineral_magnesium",
                description: "Magnesium is an essential mineral required by the body for muscle and nerve function, maintaining heart rhythm, building strong bones and energy production. The secretion and action of insulin also require magnesium. A deficiency in magnesium can lead to numbness, muscle cramps, seizures, abnormal heart rhythms, and coronary spasms. Conversely, consuming too much magnesium typically causes diarrhea and nausea as the body attempts to excrete the excess.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }, {
                id: 2005,
                name: "Phosphorus",
                imageUrl: "minerals/mineral_phosphorus",
                description: "Phosphorus is an essential nutrient required for proper cell functioning, regulation of calcium, strong bones and teeth, and for making ATP (adenosine triphosphate) a molecule which provides energy to our cells. A deficiency of phosphorus can lead to lowered appetite, anemia, muscle pain, improper bone formation, numbness, and a weakened immune system. Phosphorus is found in almost every food, and as such, deficiency is rare.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }, {
                id: 2006,
                name: "Potassium",
                imageUrl: "minerals/mineral_potassium",
                description: "Potassium is an essential nutrient used to maintain fluid and electrolyte balance in the body. It also plays a critical role in the transmission of electrical impulses in the heart. A deficiency in potassium causes fatigue, irritability, and hypertension (high blood pressure). Unless you are on dialysis or have a special condition, an overdose of potassium from natural sources is nearly impossible. Signs of high potassium blood levels include weakness, paralysis, and heart palpitations.",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }, {
                id: 2007,
                name: "Zinc",
                imageUrl: "minerals/mineral_zinc",
                description: "Zinc is an essential mineral forming a component of more than 300 enzymes in the body with functions including wound healing, immune system function, building proteins and DNA, fertility in adults and growth in children. Zinc is also needed for maintaining the senses of smell and taste. A deficiency in zinc can lead to stunted growth, diarrhea, impotence, hair loss, eye and skin lesions, impaired appetite, and depressed immunity. ",
                richVegetables: "Kale Raw, Carrot, Spinach",
                richFruits: "Mangoes, Watermelons"
            }]
        }
    ];

    const [vitaminCompostion, SetVitaminComposition] = useState([{ name: "nName", value: "nValue" }]);
    const [mineralCompostion, SetMineralComposition] = useState([{ name: "nName2", value: "nValue2" }]);
    const [dispalyTables, SetDispalyTables] = useState(false);
    const [dispalyImages, SetDispalyImages] = useState(false);
    const [richFoodItems, SetRichFoodItems] = useState([{}]);
    const [otherItems, SetOtherItems] = useState([{}]);

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
            if (siteContent[0]["Vitamins"].find(f => element.nutrientName.includes(f.name))) {
                let linkName = siteContent[0]["Vitamins"].find(f => element.nutrientName.includes(f.name)).name;
                let nName = element.nutrientName;
                let nValue = element.value == 0 ? `0.1 ${element.unitName}` : `${element.value} ${element.unitName}`;
                vitaminsTableContent.push({ name: nName, value: nValue, type: "Vitamins" , linkName: linkName });
            }
            if (siteContent[0]["Minerals"].find(f => element.nutrientName.includes(f.name))) {
                let linkName = siteContent[0]["Minerals"].find(f => element.nutrientName.includes(f.name)).name;
                let nName = element.nutrientName;
                let nValue = element.value == 0 ? `0.1 ${element.unitName}` : `${element.value} ${element.unitName}`;
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

    let itemImageUrl = siteContent[0][itemType].find(f => f.name === itemName).imageUrl;
    let itemDescription = siteContent[0][itemType].find(f => f.name === itemName).description;


    // let otherSimilarItemsList = [
    //     {
    //         id: 1,
    //         name: 'Vitamin A',
    //         imgUrl: 'vitamins/vitamin_a.svg',
    //         type: "Vitamins"
    //     },
    //     {
    //         id: 2,
    //         name: 'Vitamin C',
    //         imgUrl: 'vitamins/vitamin_a.svg',
    //         type: "Vitamins"
    //     },
    //     {
    //         id: 3,
    //         name: 'Vitamin B6',
    //         imgUrl: 'vitamins/vitamin_a.svg',
    //         type: "Vitamins"
    //     },
    //     {
    //         id: 4,
    //         name: 'Vitamin E',
    //         imgUrl: 'vitamins/vitamin_a.svg',
    //         type: "Vitamins"
    //     },

    // ];
    let otherSimilarItemsList = [];

    let richFoodsItemsList = [];
    // let richFoodsItemsList = [
    //     {
    //         id: 1,
    //         name: 'Avocado',
    //         imgUrl: 'fruits/watermelon.svg',
    //         type: "Fruits"
    //     },
    //     {
    //         id: 2,
    //         name: 'Asparagus',
    //         imgUrl: 'fruits/watermelon.svg',
    //         type: "Vegetables"
    //     },
    //     {
    //         id: 3,
    //         name: 'Banana',
    //         imgUrl: 'fruits/watermelon.svg',
    //         type: "Fruits"
    //     },
    //     {
    //         id: 4,
    //         name: 'Beetroot',
    //         imgUrl: 'fruits/watermelon.svg',
    //         type: "Vegetables"
    //     },

    // ];

    const addToRichIemList = (richFoods, foodType) => {

        richFoods = richFoods.split(", ");
        richFoods.forEach(element => {
            const rich = {
                name: element,
                imgUrl: siteContent[0][foodType].find(i => i.name === element).imageUrl,
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

            let unselectedItems = siteContent[0][itemType].filter(i => i.name !== itemName);
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
                
                let richFoods = siteContent[0][itemType].find(i => i.name === itemName).richFruits;

                addToRichIemList(richFoods, "Fruits");
                richFoods = siteContent[0][itemType].find(i => i.name === itemName).richVegetables;

                addToRichIemList(richFoods, "Vegetables");
               
                richFoodsItemsList = shuffle(richFoodsItemsList);
                richFoodsItemsList.splice(4);
                SetRichFoodItems(richFoodsItemsList);
            }
        })();
    }, [itemName]);

    let otherHeading = "Other " + itemType;
    let selectedItemHeading = itemName + " Rich Food";

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