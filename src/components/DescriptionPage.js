import React from 'react';
import DetailContainer from './sub_components/DetailContainer';
import { useParams } from "react-router-dom";

const DescriptionPage = () => {

    const { itemType, itemName } = useParams();

    return (
        <div className="descriptionPage">
            <div className="detailsContainer">                
                <DetailContainer itemName={itemName} itemType={itemType} />
            </div>
            {/* Nutrient Calculator Link Container  */}
            {/* Subscribe Container */}
        </div>
    )
}

export default DescriptionPage;