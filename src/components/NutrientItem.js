import React from 'react';

const NutrientItem = (props) => {   

    return (
        <div className="nutrientItem">
            <div className="nutrientType">{props.nutrientName}</div>
            <div className="nutrientValue">{props.nutrientValue}</div>
        </div>
    )
}

export default NutrientItem;