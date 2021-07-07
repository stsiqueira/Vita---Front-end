import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const backendServiceUrl = "http://54.70.7.254:3000/getAllFoods"

const fetchFood = async (url) => {
    const res = await fetch(url)
    const data = await res.json();

    return data;
}

let siteContent = [];
let availableItems = [];

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
            if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
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
        if (e.keyCode === 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode === 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode === 13) {
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
            if (elmnt !== x[i] && elmnt !== inp) {
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

    // First load
    useEffect(() => {
        if (siteContent.length === 0 || availableItems.length === 0) {
            const getFood = async (url) => {
                let foodData = await fetchFood(url);
                let foodObj = {
                    "Fruits": [foodData[0].Fruits],
                    "Vegetables": [foodData[1].Vegetables]
                }
                siteContent.push(foodObj);
                siteContent[0].Fruits[0].map(e => { availableItems.push(e.name) });
                siteContent[0].Vegetables[0].map(e => { availableItems.push(e.name) });
            }
            getFood(backendServiceUrl);
        }
    }, []);

    const searchExists = (e) => {

        autocomplete(document.getElementById("searchItemInput"), availableItems);

        let itemExists = false;

        if (siteContent[0].Fruits[0].find(f => f.name === e.target.value)) {
            itemExists = true;
            SetItemtype("Fruits")
        }
        else if (siteContent[0].Vegetables[0].find(v => v.name === e.target.value)) {
            itemExists = true;
            SetItemtype("Vegetables")
        }
        else
            itemExists = false;

        if (itemExists) {
            SetUserSearch(e.target.value);
            SetSearchColor("Black");
        }
        else { SetUserSearch(""); SetSearchColor("Gray"); }
    }

    return (
        <div className="search">
            <h2> Search for a Fruit or Vegetable </h2>
            <p>You can search for fruits and vegetables and get precise data about vitamins and minerals that can be found them.</p>
            <div className="userSearchControls">
                <div className="autocomplete">
                    <input id="searchItemInput" type="text" required onChange={(e) => searchExists(e)} />
                </div>
                {
                userSearch ? 
                    <Link to={`/Description/${itemType}/${userSearch}`}>
                        <FaSearch style={{ color: searchColor, cursor: 'pointer' }} />
                    </Link>
                : <FaSearch style={{ color: searchColor }} />
                }
                <button className="btn"> Search</button>
            </div>
        </div>
    )
}

export default Search;