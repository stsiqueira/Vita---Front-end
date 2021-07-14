import React from 'react';

const ItemDescription = ({itemName, itemText, itemImageUrl}) => {


    let imgUrl = "/img/" + itemImageUrl;
    return (
        <div className="itemDescription">
            <div className="itemName"><h1>{itemName}</h1></div>
            <div className="itemContent">
                
                    <img className="itemContentImage" src={imgUrl} alt={itemName + " image"} />
                    <p>{itemText}</p>
                
            </div>
        </div >
    )
}

export default ItemDescription;
