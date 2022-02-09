import React, {useContext} from 'react';
import {CustomContext} from "../../../../../Context";

const WantBuy = ({item}) => {
    const {addItem} = useContext(CustomContext);
    return (
        <div>
            <button type='button' className='content__card-btn' onClick={()=> addItem(item)}>Хочу!</button>
        </div>
    );
};

export default WantBuy;