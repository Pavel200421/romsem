import React from 'react';
import Header from "./Header";
import {Routes, Route} from 'react-router-dom'
import Pizza from "./routes/Pizza";
import Sushi from "./routes/Sushi";
import Soup from "./routes/Soup";
import CornDog from "./routes/CornDog";
import Sets from "./routes/Sets";
import Sale from "./routes/Sale";
import Salad from "./routes/Salad";
import Wok from "./routes/Wok";
import Rolls from "./routes/Rolls";
import Main from "./routes/Main";
import Drinks from "./routes/Drinks";
import Product from "./Product/Product";
import Reviews from "./Reviews/Reviews";
import Delivery from "./routes/Delivery/Delivery";

const Content = () => {
    return (
        <section className='home__content'>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/pizza' element={<Pizza/>}/>
                    <Route path='/sushi' element={<Sushi/>}/>
                    <Route path='/soup' element={<Soup/>}/>
                    <Route path='/cornDog' element={<CornDog/>}/>
                    <Route path='/sets' element={<Sets/>}/>
                    <Route path='/sale' element={<Sale/>}/>
                    <Route path='/salad' element={<Salad/>}/>
                    <Route path='/wok' element={<Wok/>}/>
                    <Route path='/rolls' element={<Rolls/>}/>
                    <Route path='/drinks' element={<Drinks/>}/>
                    <Route path='/:path/product/:id' element={<Product/>}/>
                    <Route path='/reviews' element={<Reviews/>}/>
                    <Route path='/Delivery' element={<Delivery/>}/>
                </Routes>
            </div>

        </section>
    );
};

export default Content;