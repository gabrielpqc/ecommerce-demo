import React, {useState, useEffect, Fragment} from "react";

import '../assets/css/Header.scss';

const Header = () => {

    return (
        <div className="header">
            <div className="header-link">
                <a href="/">Home</a>
            </div>
            <div className="header-link">
                <a href="/product">Product</a>
            </div>
        </div>   
    )
}

export default Header;