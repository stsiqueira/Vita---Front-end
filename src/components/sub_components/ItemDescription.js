import React from 'react';

const ItemDescription = ({itemName, itemText, itemImageUrl}) => {


    let imgUrl = "/img/" + itemImageUrl;
    return (
        <div className="itemDescription">
            <div className="itemName"><h2>{itemName}</h2></div>
            <div className="itemContent">
                
                    <img src={imgUrl} alt={itemName + "image"} />
                    
               
                
                    {itemText}
                
            </div>
        </div >
    )
}

export default ItemDescription;