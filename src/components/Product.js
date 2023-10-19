import React from "react";
import '../assets/css/Product.scss';

const Product = ({product}) => {

    return (
        <li className="product">
           <div className="image-wrapper">
                <img src={product.thumbnail} load="lazy"></img>
           </div>
           <div className="product-title">{product.title}</div>
        </li>
    )
}

export default Product;