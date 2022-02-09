import React, {useState, useEffect} from 'react';
import './reviews.css'
import axios from "axios";
import {useForm} from 'react-hook-form'
const Reviews = () => {
    const {
        register,
        handleSubmit,
        formState :{
            errors
        },
        reset
    } = useForm({
        mode : "onBlur",
    });
    const [review, setReview] = useState([]);
    const [add,setAdd] = useState(false);
    useEffect(()=> {
        axios('http://localhost:8080/reviews')
            .then(({data})=> setReview(data))
    }, [add]);
    const toDate = (date) => {
        return new Intl.DateTimeFormat('ru-Ru', {
            day:'2-digit',
            month:'2-digit',
            year:'2-digit'
        }).format(new Date(date))
    };
    const addReview = (data) => {
        axios.post('http://localhost:8080/reviews', data).then(({data})=> setAdd(!data));
        reset();
    };

    return (
        <div className='reviews'>
            <div className='reviews__header'>
                <h2 className='reviews__header-title'>Отзывы</h2>
                <button onClick={()=> setAdd(!add)} className='reviews__header-btn'>+ Добавить отзыв</button>
            </div>
            <form style={{display: `${add ? `flex` : `none`}`}} onSubmit={handleSubmit(addReview)} className='reviews__form'>
                    <label className='reviews__form-lb1'>
                        <input {...register("name",
                            {
                                required: "Поле обязательно к заполнению",
                                minLength : {value : 2,
                                    message : "Минимум два символа"}})}
                               placeholder='Ваше Имя'
                               className='reviews__form-input'
                               type="text"/>
                               <span>{errors?.name && errors?.name?.message}</span>
                    </label>
                <label className='reviews__form-lb1'>
                    <textarea {...register("text", {
                        required : "Поле обязательно для ввода",
                        minLength : {
                            value : 10,
                            message : 'Минимум десять символов'
                        }
                    })} placeholder='Напишите отзыв' className='reviews__form-area'/>
                   <span> {errors?.text && errors?.text?.message} </span>
                </label>
                <input {...register('date')} className='reviews__form-input-hidden' value={toDate(Date.now())} type="hidden"/>
                <div className='reviews__form-btns'>
                    <button className='reviews__form-submit' type='submit'>
                        Отправить
                    </button>
                    <button className='reviews__form-submit' type='reset' onClick={()=> setAdd(!add)}>Отмена</button>
                </div>
            </form>
        <ul className='reviews__list'>
            {review.map((item)=> (
                <li key={item.id} className='reviews__item'>
                    <div className='reviews__item-header'>
                        <h3 className='reviews__item-name'>{item.name}</h3>
                        <span className='reviews__item-date'>{item.date}</span>
                    </div>
                    <p className='reviews__item-text'>{item.text}</p>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default Reviews;