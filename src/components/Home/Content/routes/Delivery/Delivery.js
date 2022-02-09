import React from 'react';
import Footer from "../../Footer/Footer";
import './delivery.css'
const Delivery = () => {
    return (
        <div className='delivery'>
            <h1 className='delivery__title'>Доставка и оплата</h1>
            <div className='delivery__part-1'>
                <p className='delivery__order'>ЗАКАЗ СЧИТАЕТСЯ ВЫПОЛНЕННЫМ В ПОЛНОМ ОБЪЕМЕ ПРИ УСЛОВИИ СОВЕРШЕНИЯ ПРОДАВЦОМ <br/> СЛЕДУЮЩИХ ДЕЙСТВИЙ:</p>
                <ul className='delivery__list'>
                    <li className='delivery__list-item'>Изготовление заказанного Покупателем качественного Товара;</li>
                    <li className='delivery__list-item'>Доставка его по указанному Покупателем адресу (подъезд дома, вход в дом, вход на частную территорию и др.);</li>
                    <li className='delivery__list-item'>Звонок на телефонный номер Покупателя с целью извещения о доставке Товара по адресу;</li>
                    <li className='delivery__list-item'>Ожидание Покупателя по указанному адресу (подъезд дома, вход в дом, вход на частную территорию и др.) не менее пяти минут с момента осуществления звонка о доставке Товара на номер телефона указанный Покупателем.</li>
                </ul>
            </div>
            <div className='delivery__part-2'>
                <h4 className='delivery__part-2-title'>ВНИМАНИЕ !!!</h4>
                <p className='delivery__part-2-rules'>ПОСЛЕ ОСУЩЕСТВЛЕНИЯ ЗАКАЗА, ПОКУПАТЕЛЬ ОБЯЗАН:</p>
                <ul className='delivery-part-2-list'>
                    <li className='delivery-part-2-list-item'>Обеспечить возможность осуществления Продавцом извещения о доставке Товара на предоставленный номер телефона (поддерживать работоспособность телефонного аппарата и/или устойчивый, бесперебойный уровень связи), до получения извещения о доставке Товара по адресу;
                    </li>
                    <li className='delivery-part-2-list-item'>В случае невозможности обеспечения должной работоспособности телефонного аппарата, устойчивой и бесперебойной связи, Покупатель, соблюдая все необходимые и разумные меры предосторожности, обязан ожидать курьера в месте доставки указанном во время оформления заказа (подъезд дома, вход в дом, вход на частную территорию и др.);</li>
                    <li className='delivery-part-2-list-item'>В случае, если по истечении 10 минут с момента осуществления вызова на номер телефона Покупателя с целью извещения о доставке Товара по адресу, заказ не будет получен, заказ считается выполненным в полном объеме. Уплаченные денежные средства не возвращаются, Товар подлежит утилизации;</li>
                    <li className='delivery-part-2-list-item'>В случае самовывоза Товара, Покупатель своевременно, не позднее двух часов с момента извещения о готовности Товара должен забрать Товар с соответствующего адреса. По истечению двух часов Товар утилизируется.</li>
                </ul>
            </div>
            <div className='delivery-part-3'>
                <h3 className='delivery__part-3-title'>
                    УСЛОВИЯ ДОСТАВКИ:
                </h3>
                <ul className='delivery-part-3-list'>
                    <li className='delivery__part-3-list-item'>Доставка продуктов питания бесплатна при заказе на сумму свыше 800сом в зоне бесплатной доставки.</li>
                    <li className='delivery__part-3-list-item'>Стоимость доставки заказов до 800сом составляет 50с-150с. (уточняйте у оператора)</li>
                </ul>
            </div>
            <div className='delivery-part-3'>
                <h3 className='delivery__part-3-title'>
                    СПОСОБЫ ОПЛАТЫ ЗАКАЗОВ:
                </h3>
                <ul className='delivery-part-3-list'>
                    <li className='delivery__part-3-list-item'>Наличный расчет.</li>
                    <li className='delivery__part-3-list-item'>Безналичный расчет.</li>
                    <li className='delivery__part-3-list-item'>Оплатить свой заказ Вы можете любым удобными для Вас способом.</li>
                    <li className='delivery__part-3-list-item'>О способе оплаты, номере заказа обязательно сообщите оператору.</li>
                    <li className='delivery__part-3-list-item'>Условия и время доставки согласовываются с оператором по телефону.</li>
                </ul>
            </div>
            <Footer/>
        </div>
    );
};

export default Delivery;