import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from '../../../../assets/icons/drinks.png'

const Drinks = () => {
    return (
        <div>
            <RouteContent Logo={Logo} title={'Напитки'} path="drinks"/>
        </div>
    );
};

export default Drinks;