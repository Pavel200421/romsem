import React, {useState, useContext} from 'react';
import './cart.css'
import Map from '../../../assets/icons/Rectangle 9.png'
import {CustomContext} from "../../../Context";



const Cart = () => {
const {cart, plusOne, minOne, deleteItem} = useContext(CustomContext);

    return (
        <aside className='home__cart'>
            {cart.length !== 0 ? <div className='cart__basket'>
                    <div className='cart__basket-title'>
                        Корзина
                    </div>
                    <ul className='cart__list'>
                        {cart.map((item)=> (
                            <li className='cart__list-item' key={item.title}>
                                <img className='cart__item-img' src={item.imageUrl} alt={item.title}/>
                                <div className='cart__item-info'>
                                    <h3 className='cart__item-title'>{item.title}</h3>
                                    <div className='cart__item-buy'>
                                        <div className='cart__item-count'><span className='cart__item-count-span-minus' onClick={()=> minOne(item)}>-</span>{item.count}
                                        <span className='cart__item-count-span-plus' onClick={()=> plusOne(item)}>+</span></div>
                                        <span className='cart__item-price'>{item.price} Сом</span>
                                    </div>
                                </div>
                                <span className='cart__item-delete' onClick={()=> deleteItem(item)}>del</span>
                            </li>
                        ))}
                    </ul>
                        <div className='cart__bot'>
                            <span className='cart__bot-price'>{cart.reduce((acc, rec)=> {
                                return acc + (rec.price * rec.count)
                            }, 0)} Сом</span>
                            <button className='cart__bot-btn'>Оформить заказ</button>
                        </div>
                </div>
                : <div className="cart__card">
                    <div className='home__cart-goods'>
                        <h2 className='home__cart-goods-title'>Ваша корзина пуста.</h2>
                        <p className='home__cart-goods-subtitle'>Добавьте же скорее что-нибудь!</p>
                        <div className='home__cart-goods-block2'>
                            <p className='home__cart-goods-information'>Бесплатная доставка от 800 СОМ</p>
                        </div>
                    </div>
                    <div className='home__cart-map'>
                        <img className='home__cart-map-img' src={Map} alt="map"/>
                        <div className='home__cart-map-marker'>
                            <button className='home__cart-map-marker-btn'> <svg width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 0C5.88891 0 0.103516 5.78532 0.103516 12.8964C0.103516 15.754 1.7859 20.0999 5.39812 26.5731C7.86304 30.9899 10.3166 34.7206 10.4201 34.8778L12.1935 37.5658C12.3723 37.8369 12.6752 38 13 38C13.3248 38 13.6278 37.8369 13.8066 37.5658L15.5799 34.8779C15.6824 34.7226 18.1181 31.0241 20.6019 26.5731C24.2141 20.1002 25.8965 15.7543 25.8965 12.8964C25.8965 5.78532 20.1111 0 13 0ZM18.9144 25.6313C16.4651 30.0201 14.0679 33.6605 13.9669 33.8135L13 35.2791L12.0335 33.8139C11.9319 33.6597 9.51628 29.9866 7.08562 25.6313C3.73498 19.6268 2.03605 15.3422 2.03605 12.8964C2.03605 6.85092 6.95443 1.93254 13 1.93254C19.0456 1.93254 23.964 6.85092 23.964 12.8964C23.964 15.3425 22.2651 19.627 18.9144 25.6313Z" fill="#F2F2F2"/>
                                <path d="M13 5.66553C9.05723 5.66553 5.84961 8.87323 5.84961 12.8159C5.84961 16.7586 9.05723 19.9663 13 19.9663C16.9428 19.9663 20.1504 16.7586 20.1504 12.8159C20.1504 8.87323 16.9428 5.66553 13 5.66553ZM13 18.0338C10.1228 18.0338 7.78215 15.6931 7.78215 12.8159C7.78215 9.93875 10.1228 7.59806 13 7.59806C15.8772 7.59806 18.2178 9.93875 18.2178 12.8159C18.2178 15.6931 15.8772 18.0338 13 18.0338Z" fill="#F2F2F2"/>
                            </svg></button>
                        </div>
                        <h2 className='home__cart-map-title'>
                            Укажите адрес
                        </h2>
                        <p className='home__cart-map-subtitle'> и узнайте время доставки</p>
                    </div>
                </div>
            }
        </aside>

    );
};

export default Cart;