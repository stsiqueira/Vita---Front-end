import React from 'react';
import { Link } from 'react-router-dom'


const OtherItems = ({heading, otherItemsList}) => {
    
    let itemImageUrl = "/img/";
    return (
        <div>
            <h2>{heading}</h2>
            <div className="otherItems">
                {
                    otherItemsList && otherItemsList.map((item, key) => (
                        <Link key={key} to={`/Description/${item.type}/${item.name}`}>
                            <div className="otherItem" >
                                {/* <img src={item.itemImageUrl} alt={item.itemName + "image"} /> */}
                                <img src={itemImageUrl + item.imgUrl} alt={item.itemName + "image"} />
                                <h4>{item.name}</h4>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default OtherItems;