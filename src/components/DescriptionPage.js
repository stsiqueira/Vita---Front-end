import React from 'react';
import DetailContainer from './sub_components/DetailContainer';
import Recalculate from './sub_components/Recalculate';
import Subscribe from './subscribe';
import { useParams } from "react-router-dom";

const DescriptionPage = () => {

    const { itemType, itemName } = useParams();

    return (
        <div className="descriptionPage">
            <div className="detailsContainer">                
                <DetailContainer itemName={itemName} itemType={itemType} />
            </div>
            <div className="subscribe-calculator-wrapper">
                {/* Nutrient Calculator Link Container  */}
                <Recalculate
                    buttonText="Calculate"
                    descriptionText="Try Our Nutrient Calculator To See Your Daily Needs"
                />
                {/* Subscribe Container */}
                <Subscribe/>
            </div>
          
        </div>
    )
}

export default DescriptionPage;