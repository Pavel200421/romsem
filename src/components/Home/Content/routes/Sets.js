import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from '../../../../assets/icons/sets.png'

const Sets = () => {
    return (
        <div>
            <RouteContent Logo={Logo} title={'Сеты'} path='sets'/>
        </div>
    );
};

export default Sets;