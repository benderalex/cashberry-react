import React from 'react';


class TakeBack extends React.Component {
    render() {

        return(
            <div className="main-container">
                <div className="we-offer">
                    <div className="we-offer__title"><h1 className="page-title">Как вернуть деньги?</h1></div>
                    <div className="we-offer__list">
                        <div className="we-offer-item"><h2 className="how-order-title">В личном кабинете</h2>
                            <div className="we-offer-item__content">
                                <div className="we-offer-item__icon"><img src="img/how-pay/how-pay-1.png" alt=""/></div>
                                <div className="we-offer-item__text-block"><p className="we-offer-item__text">В <a
                                    href="/cabinet" className="">личном кабинете</a> укажите сумму, которую хотите
                                    погасить и нажмите кнопку “Погасить картой”. Введите реквизиты карты и подтвердите
                                    оплату. Деньги будут моментально переведены с вашей карты на счет Cashberry. Вы
                                    можете вносить задолженность по кредиту любой банковской картой, при этом не
                                    обязательно верифицировать ее в личном кабинете. Кроме того, при погашении кредита,
                                    обратите внимание на лимиты по оплате картой через интернет. При необходимости,
                                    обратитесь в свой банк для увеличения лимита.
                                </p></div>
                            </div>
                        </div>
                        <div className="we-offer-item"><h2 className="how-order-title">В отделении банка</h2>
                            <div className="we-offer-item__content">
                                <div className="we-offer-item__icon"><img src="img/how-pay/how-pay-3.png" alt=""/></div>
                                <div className="we-offer-item__text-content">
                                    <div className="we-offer-item__text-block"><p
                                        className="we-offer-item__text">Погасить заем можно в любом украинском банке. В
                                        отделении банка укажите ту сумму задолженности, которая отображается в
                                        <a href="/cabinet" className="">личном кабинете</a> в день оплаты. В
                                        квитанции оплаты укажите номер счета, номер МФО компании Cashberry, номер ЕГРПУ
                                        и номер вашего кредитного договора. Эти данные вы можете посмотреть в кредитном
                                        договоре, в личном кабинете или получить, обратившись в нашу
                                        <a href="/kontakty" className="">службу поддержки</a>.</p>
                                        <div className="we-offer-item__attention-block">
                                            <div className="we-offer-item__background-block"></div>
                                            <span className="we-offer-item__title-text">Важно!</span> <p
                                            className="we-offer-item__text">Внося задолженность через отделение банка,
                                            средства на счет Cashberry будут переведены в течении 3-х рабочих дней.
                                            Обратите внимание, что проценты по кредиту продолжают начисляться до того
                                            момента, пока деньги не поступят на счет компании. Чтобы избежать начисления
                                            процентов, сфотографируйте квитанцию об оплате и передайте ее в нашу службу
                                            поддержки. Это можно сделать в <a href="/cabinet" className="">личном
                                                кабинете</a>
                                            (вкладка “Уже погасил ранее”), загрузив квитанцию в “Выбрать изображение”.
                                            Так же, вы можете обратиться в службу поддержки или отправить фото квитанции
                                            на email: support@cashberry.com.ua.
                                        </p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="we-offer-item"><h2 className="how-order-title">В терминалах</h2>
                            <div className="we-offer-item__content">
                                <div className="we-offer-item__icon"><img src="img/how-pay/how-pay-2.png" alt=""/></div>
                                <div className="we-offer-item__text-block"><p className="we-offer-item__text">Вы можете
                                    погасить кредит в терминалах сетей iBox,
                                    EasyPay, City24. Выберите на терминале категорию “Банковские операции”, найдите в
                                    поиске компанию Cashberry, укажите номер кредитного договора и внесите деньги.
                                    Средства поступят на счет компании в течение дня.
                                </p></div>
                            </div>
                        </div>

                    </div>
                    <a href="/" className="side-mobile-btn button-blue about-btn active">Получить кеш!</a></div>
            </div>

        );
    }

}

export default TakeBack;
