import React from 'react';

const Information = () => {
    return (
        <div className='information'>
            <div className='information__info'>
                <h1 className='information__title'>Заказать суши в Бишкеке</h1>
                <p className='information__subtitle'>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.
                    <p className='information__subtitle-1'>В нашем меню более 20 видов суши:</p>
                    <ul className='information__list'>
                        <li className='information__list-item'> Классические с сырым лососем, тунцом, окунем.</li>
                        <li className='information__list-item'>  Экзотические с тигровой креветкой, морским гребешком.</li>
                        <li className='information__list-item'> Пикантные с копченым лососем, угрем.</li>
                    </ul>
                </p>
                <p className='information__subtitle-2'>
                    В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский <span className='information__subtitle-2-span-1'>майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом</span><span className='information__subtitle-2-span-2'>  спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</span></p>
            </div>
            <button className='information__btn'>Подробнее <span className='information__arrow'><svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 1L8.5 8L1 0.999999" stroke="#F46D40" stroke-linecap="round"/>
</svg>
</span></button>
        </div>
    );
};

export default Information;