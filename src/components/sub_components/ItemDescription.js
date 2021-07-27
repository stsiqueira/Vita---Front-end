import React from 'react';

const ItemDescription = ({itemName, itemText, itemImageUrl}) => {

    let x = document.getElementById("itemText");

    if(x) x.innerHTML = itemText;

    let imgUrl = "/img/" + itemImageUrl;
    return (
        <div id="ItemDescription" className="itemDescription">
            <div className="itemName"><h1>{itemName}</h1></div>
            <div className="itemContent">
                
                    <img className="itemContentImage" src={imgUrl} alt={itemName + " image"} />
                    <p id="itemText"></p>
                
            </div>
        </div >
    )
}

export default ItemDescription;
