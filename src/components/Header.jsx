import React, {useState, useEffect, Fragment} from "react";
import { createPortal } from 'react-dom';
import Minicart from "./Minicart";
import Overlay from "./Overlay";

import '../assets/css/Header.scss';

const Header = () => {

    const [domReady, setDomReady] = React.useState(false);

    useEffect(() => {
        setDomReady(true);
    }, [])

    return (
        <Fragment>
            <Overlay />
            <div className="header">
                <div className="header-link">
                    <a href="/">Home</a>
                </div>
                <div className="header-link">
                    <a href="/product">Product</a>
                </div>
                <div className="header-link">
                    <a href="/jc">JC (Test)</a>
                </div>
                <div className="header-icon">
                    <a className="material-symbols-outlined" href="#cart">
                        shopping_cart
                    </a>
                    {domReady ? createPortal(
                        <Minicart/>,
                        document.getElementById('overlay-wrapper')
                    ) : null}
                </div>
            </div>
        </Fragment>
        
    )
}

export default Header;