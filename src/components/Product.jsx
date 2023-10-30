import React from "react";
import '../assets/css/Product.scss';

const Product = ({loaded, product}) => {

    const hasDiscount = () => {
        return product.discountPercentage > 0 ? true : false;
    }

    const calculateDiscount = () => {
        return (product.price - product.price * (product.discountPercentage/100)).toFixed(2);
    }

    const formatPrice = (price) => {
        return price + '€';
    }

    return (
        <li className={`product ${loaded ? 'loading' : ''}`}>
           <div className="image-wrapper">
                {hasDiscount() &&
                    <div className="discount-wrapper">
                        <span>{product.discountPercentage + '%'}</span>
                    </div>
                }
                <img src={product.thumbnail} load="lazy"></img>
           </div>
           <div className="product-title">{product.title}</div>
           <div className="price-wrapper">
                {hasDiscount() &&
                    <span className="price-with-discount">{formatPrice(calculateDiscount())}</span>
                }
                <span className="price">{formatPrice(product.price)}</span>
           </div>
        </li>
    )
}

export default Product;