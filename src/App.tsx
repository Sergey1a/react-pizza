import React from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Route, Routes} from "react-router-dom";

import './scss/app.scss';
import './App.css';
import FullPizza from "./pages/FullPizza";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="/"  element={<Home />} />
                        <Route path="/fullpizza/:id" element={<FullPizza />} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="*"  element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
