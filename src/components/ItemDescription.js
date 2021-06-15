import React from 'react';
import './id.css';

const ItemDescription = (props) => {

    return (
        <div className="itemDescription">
            <div className="itemName"><h2>{props.itemName}</h2></div>
            <div className="itemContent">
                <div>
                    <img src={props.itemImageUrl} alt={props.itemName + "image"} />
                    
                </div>
                <div>
                    {props.itemText}
                </div>
            </div>
        </div >
    )
}

export default ItemDescription;