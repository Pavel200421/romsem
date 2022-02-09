import React, {useEffect, useState} from 'react';
import axios from "axios";
import SortItem from "../SortItem/SortItem";
import {Link} from 'react-router-dom'
import PizzaSize from "./PizzaSize";
import './information.css'
import Information from "../../Information/Information";
import Footer from "../../Footer/Footer";
import WantBuy from "../Wantbuy/wantBuy";



const RouteContent = ({Logo, title, path}) => {
    const[arr, setArr] = useState([]);
    const [sort, setSort] = useState('По умолчанию');
    useEffect(()=>{
        axios(`http://localhost:8080/${path}`)
            .then(({data}) => setArr(data))
    },[]);
    return (
        <div>
            <div className='content__header'>
                <div className='content__header-left'>
                        <img className='content__header-img' src={Logo} alt={title}/>
                    <h3 className='content__header-title'>{title}</h3>
                </div>
                <div className='content__header-sort'>
                    <p className='content__header-sort-title'>Сортировка</p>
                    <p className='content__header-sort-default'>{sort} <span>&#65086;</span></p>
                    <ul className='content__header-sort-list'>
                        <div className='content__header-sort-line'>
                        </div>
                        <SortItem text='Название' setSort={setSort}/>
                        <SortItem text='Сначала дешевле' setSort={setSort}/>
                        <SortItem text='Сначала дороже' setSort={setSort}/>
                        {path === 'sets' ?
                        <>
                            <SortItem text='Кол-во кусочков' setSort={setSort}/>
                            <SortItem text='Вес' setSort={setSort}/>
                        </>
                            : ''
                        }
                    </ul>
                </div>
            </div>
            <div className="content__row">
                {arr.sort((a,b) => {
                    if (sort === 'Название'){
                        return a.title > b.title ? 1 : -1
                    } else if (sort === 'Сначала дешевле'){
                        return  a.price - b.price
                    } else if (sort === 'Сначала дороже'){
                        return b.price - a.price
                    } else if (sort === 'Кол-во кусочков'){
                        return a.count - b.count
                    }
                }).map((item)=>(
                    <div key={item.id} className='content__card'>
                        <Link to={`/${path}/product/${item.id}`}>
                            <img className='content__card-img' src={item.imageUrl} alt=""/>
                        </Link>
                        <h4 className='content__card-title'>{item.title}</h4>
                        {path === "pizza" ?
                            <PizzaSize sizes={item.sizes}/>
                            : path === "rolls" || path === "wok" || path === "sushi" ?
                                <p className='content__card-option'>
                                    {item.ingredients.filter((item, idx) => idx < 3).join(',')}...
                                </p>
                                : path === 'sets' ?
                                    <p className='content__card-option'>
                                        1000 грамм, {item.count} штук
                                    </p>
                                 : path === 'wok' ?
                                 <p className='content__card-option'>{item.count}</p>
                                : path === 'drinks' ?
                                <p className='content__card-option'>{item.categories}</p>
                                : ''
                        }

                        <div className='content__card-bot'>
                            <p className='content__card-price'>{item.price} сом</p>
                           <WantBuy item={item}/>
                        </div>
                    </div>
                ))}
            </div>
            <Information/>
            <Footer/>
        </div>
    );
};

export default RouteContent;