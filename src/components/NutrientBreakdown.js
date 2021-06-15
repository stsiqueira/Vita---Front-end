import React from 'react';
import './nb.css';

import NutrientItem from './NutrientItem';

const NutrientBreakdown = (props) => {

    let nutrientContent = [
        {
          id:1,
          nutrientName: 'Vitamin A',
          nutrientValue: '2.5mg'         
        },
        {
          id:2,
          nutrientName: 'Vitamin C',
          nutrientValue: '8500ug'          
        },
        {
          id:3,
          nutrientName: 'Vitamin D',
          nutrientValue: '0.83mg'         
        },
        {
            id:4,
            nutrientName: 'Pottasium',
            nutrientValue: '0.83mg'         
          },
          {
            id:5,
            nutrientName: 'Zinc',
            nutrientValue: '0.83mg'         
          }
      ];

    return (
        <div className="nutrientBreakdown">
            <div className="nutrientType"><h2>{props.nutrientType}</h2></div>
            <div className="nutrientContent">
                {
                    nutrientContent.map((item) => (<NutrientItem key={item.id}
                        nutrientName={item.nutrientName}
                        nutrientValue={item.nutrientValue}></NutrientItem>))
                }
            </div>
        </div >
    )
}

export default NutrientBreakdown;