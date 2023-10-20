import React from "react";

import Header from "../components/Header";
import Listing from "../components/Listing";

const Home = () => {
    return (
        <>
            <Header />
            <h1>Home Page</h1>
            <Listing title="Product Listing"/>
        </>
    )
}

export default Home;