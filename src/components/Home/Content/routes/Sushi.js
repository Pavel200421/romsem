import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from '../../../../assets/icons/pizza.png'

const Sushi = () => {
    return (
        <div>
           <RouteContent Logo={Logo} title={'Суши'} path="sushi"/>
        </div>
    );
};

export default Sushi;