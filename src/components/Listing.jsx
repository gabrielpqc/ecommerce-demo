import React, {useState, useEffect, Fragment} from "react";
import Product from "./Product";
import '../assets/css/Listing.scss';

const Listing = ({title}) => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(json => setProducts(json.products))
          .catch(error => console.error(error));
      }, []);

    return (
        <Fragment>
            <h2 className="page-title">{title}</h2>
            <ol className="product-listing">
                {products && products.length > 0 ? products.map((product) => {
                    return <Product product={product} key={product.id}/>
                }) : 'No products were found'}
                
            </ol>
        </Fragment>
        
        
    )
}

export default Listing;