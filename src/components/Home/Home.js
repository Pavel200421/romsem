import React from 'react';
import './home.css'
import Content from "./Content/Content";
import Cart from "./Cart/Cart";
import SideBar from "./SideBar/SideBar";


const Home = () => {
    return (
        <section className='home'>
            <SideBar/>
            <Content/>
            <Cart/>
        </section>
    );
};

export default Home;