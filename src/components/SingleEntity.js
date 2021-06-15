import React from 'react';

const SingleEntity = (props) => {   

    return (
        <div className="otherItem">
            <img src={props.itemImageUrl} alt={props.itemName + "image"} />
            <h4>{props.itemName}</h4>
        </div>
    )
}

export default SingleEntity;