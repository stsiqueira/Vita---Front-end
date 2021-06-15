import React from 'react';
import './oi.css';
import SingleEntity from './SingleEntity';

const OtherItems = (props) => {

    let otherItemsList = [
        {
            id: 1,
            name: 'Vitamin A',
            imgUrl: 'http://thedishonscience.stanford.edu/posts/fruits-of-research/images/vitaminC.png'
        },
        {
            id: 2,
            name: 'Vitamin B',
            imgUrl: 'http://thedishonscience.stanford.edu/posts/fruits-of-research/images/vitaminC.png'
        },
        {
            id: 3,
            name: 'Vitamin C',
            imgUrl: 'http://thedishonscience.stanford.edu/posts/fruits-of-research/images/vitaminC.png'
        },
        {
            id: 4,
            name: 'Vitamin D',
            imgUrl: 'http://thedishonscience.stanford.edu/posts/fruits-of-research/images/vitaminC.png'
        },

    ];

    let OtherListHeader = "Vitamins";

    return (
        <div>
            <h2>Other {OtherListHeader}</h2>
            <div className="otherItems">
                {
                    otherItemsList.map((item) => (<SingleEntity key={item.id}
                        itemName={item.name}
                        itemImageUrl={item.imgUrl}></SingleEntity>))
                }
            </div>
        </div>
    )
}

export default OtherItems;