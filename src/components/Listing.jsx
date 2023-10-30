import React, {useState, useEffect, Fragment} from "react";
import Product from "./Product";
import Skeleton from "./Skeleton";
import '../assets/css/Listing.scss';

const Listing = ({title}) => {

    const [products, setProducts] = useState([]);
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then((json) => setProducts(json.products))
          .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        setLoadedProducts(products);
        setLoaded(true);
    }, [products])

    return (
        <Fragment>
            <h2 className="page-title">{title}</h2>
             
            <ol className={`product-listing`}>
                {loaded && loadedProducts && products.length > 0 ? products.map((product) => {
                    return <Product product={product} key={product.id}/>
                }) : <Skeleton loaded={loaded}/>}
            </ol>
        </Fragment>
        
        
    )
}

export default Listing;