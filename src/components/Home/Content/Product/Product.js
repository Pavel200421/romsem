import React, {useState, useEffect, useContext} from 'react';
import {CustomContext} from "../../../../Context";
import {useNavigate} from 'react-router-dom'
import './Product.css';
import axios from "axios";
import {useParams} from 'react-router-dom'
import PizzaSize from "../routes/RouteContent/PizzaSize";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
import "swiper/css/navigation";
import "swiper/css";
import Footer from "../Footer/Footer";
import WantBuy from "../routes/Wantbuy/wantBuy";
SwiperCore.use([Navigation]);
const Product = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [rec, setRec] = useState([]);
    const {path, id} = useParams();
    useEffect(()=> {
        axios(`http://localhost:8080/${path}/${id}`).then(({data})=> setProduct(data));
        axios(` http://localhost:8080/${path}`).then(({data})=> setRec(data.slice(0,6)));
    }, []);
    const {minOne, plusOne} = useContext(CustomContext);
    return (
        <div className='product'>
            <div className='product__back'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#FF9846"/>
                    <path d="M11.75 5.75L7.25 10.25L11.75 14.75" stroke="#F2F2F2" stroke-linecap="round"/>
                </svg>
                <span className='product__back-btn' onClick={()=> navigate(-1)}>Назад</span>
            </div>
            <div className='product__content'>
                <img className='product__content-img' src={product.imageUrl} alt="image"/>
                <div className='product__content-info'>
                    <h1 className='product__content-info-title'>{product.title}</h1>
                    <PizzaSize sizes={product.sizes}/>
                    <div className='product__content-info-block'>
                        <p className='product__content-info-price'>{product.price} сом</p>
                        <button className='product__content-info-minus' onClick={()=> minOne(product)}>
                            <svg width="23" height="2" viewBox="0 0 23 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L22 0.999999" stroke="#111111" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                        <h1 className='product__content-info-count'>1</h1>
                        <button className='product__content-info-add' onClick={()=> plusOne(product)}>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1V22" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round"/>
                                <path d="M1 11L22 11" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                        <WantBuy item={product}/>
                </div>
            </div>
            <h1 className='product__rec'>Рекомендуем к этому товару</h1>
            <Swiper slidesPerView={3} spaceBetween={130} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                {rec.map((item)=> (
                    <SwiperSlide>
                        <div className='swiper__block'>
                            <img className='swiper__img' src={item.imageUrl} alt="image"/>
                            <h4 className='swiper__title'>{item.title}</h4>
                            <div className='swiper__cost'>
                                <p className='swiper__price'>{item.price} Сом</p>
                                <button className='swiper__add'>
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1V22" stroke="#F2F2F2"/>
                                        <path d="M1 11L22 11" stroke="#F2F2F2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Footer/>
        </div>
    );
};

export default Product;