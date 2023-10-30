import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import JC from "./pages/JC";

import './assets/css/App.scss';

const App = () =>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/product" element={<ProductDetail/>}/>
                    <Route path="/jc" element={<JC/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;