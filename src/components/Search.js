import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

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
]; //This Data will be loaded from Mongo

let availableItems = [];

siteContent[0].Fruits.map(e => { availableItems.push(e.name) });
siteContent[0].Vegetables.map(e => { availableItems.push(e.name) });
siteContent[0].Vitamins.map(e => { availableItems.push(e.name) });
siteContent[0].Minerals.map(e => { availableItems.push(e.name) });

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}



const Search = () => {

    const [userSearch, SetUserSearch] = useState("");
    const [searchColor, SetSearchColor] = useState("gray");
    const [itemType, SetItemtype] = useState("");

    const searchExists = (e) => {

        autocomplete(document.getElementById("searchItemInput"), availableItems);

        let itemExists = false;

        if (siteContent[0].Fruits.find(f => f.name === e.target.value)) {
            itemExists = true;
            SetItemtype("Fruits")
        }
        else if (siteContent[0].Vegetables.find(v => v.name === e.target.value)) {
            itemExists = true;
            SetItemtype("Vegetables")
        }
        else if (siteContent[0].Minerals.find(m => m.name === e.target.value)) {
            itemExists = true;
            SetItemtype("Minerals")
        }
        else if (siteContent[0].Vitamins.find(v => v.name === e.target.value)) {
            itemExists = true;
            SetItemtype("Vitamins")
        }
        else
            itemExists = false;

        if (itemExists){
            SetUserSearch(e.target.value);
            SetSearchColor("Black");
        }
        else{ SetUserSearch(""); SetSearchColor("Gray");}
    }

    return (
        <div className="search">
            <h2> Search for a Fruit or Vegetable </h2>
            <div className="userSearchControls">
                <div className="autocomplete">
                    <input id="searchItemInput" type="text" required onChange={(e) => searchExists(e)} />
                </div>
                {userSearch ? <Link to={`/Description/${itemType}/${userSearch}`}><FaSearch style={{ color: searchColor, cursor: 'pointer' }}/></Link> 
                : <FaSearch style={{ color: searchColor }} />}

            </div>
        </div>
    )
}

export default Search;