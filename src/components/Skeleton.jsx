import React, {useState, useEffect, Fragment} from "react";
import Product from "./Product";
import '../assets/css/Skeleton.scss';

const Skeleton = ({loaded}) => {

    const dummyProduct = {
        id: '1234567890',
        discountPercentage: '0',
        thumbnail: 'https://dummyimage.com/600x400/a3becc/fff&text=+',
        title: 'Dummy Title',
        price: 123
    }

    const renderProducts = () => {
        let content = [];
        for (let i = 0; i < 24; i++) {
            content.push(<Product loaded={loaded} product={dummyProduct} key={dummyProduct.id + i}/>);
        }
        return content;
    }

    return (
        <Fragment>
            {renderProducts().map((product) => {
                return product;
            })}
        </Fragment>
        
        
    )
}

export default Skeleton;