import React from 'react';

const SortItem = ({text, setSort}) => {
    return (
        <li onClick={()=> setSort(text)} className='content__header-sort-item'>{text}</li>
    );
};

export default SortItem;