import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from '../../../../assets/icons/wok.png'

const Wok = () => {
    return (
        <div>
            <RouteContent Logo={Logo} title={'Wok'} path="wok"/>
        </div>
    );
};

export default Wok;