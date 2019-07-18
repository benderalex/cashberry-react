import React from 'react';


class GetCredit extends React.Component {


    render() {
        return (<div className="main-container">
            <div className="we-offer">
                <div className="we-offer__title"><h1 className="page-title">Как оформить онлайн кредит?</h1></div>
                <div className="we-offer__list">
                    <div className="we-offer__list-line"></div>
                    <div className="we-offer-item"><h2 className="how-order-title">1. Выберите сумму и срок кредита</h2>
                        <div className="we-offer-item__content">
                            <div className="we-offer-item__icon"><img src="img/how-order/how-order-1.png" alt=""/></div>
                            <div className="we-offer-item__text-block"><p className="we-offer-item__text">Укажите на <a
                                href="/" className="active">кредитном калькуляторе</a>
                                сумму и срок пользования средствами (обратите внимание, что справа от калькулятора
                                система рассчитывает ваши проценты по кредиту). Затем, нажмите кнопку <a href="/"
                                                                                                         className="active">“ПОЛУЧИТЬ
                                    КЕШ!”</a>. Максимальная сумма первого займа - 5000 грн, всех последующих - 8000 грн.
                            </p></div>
                        </div>
                    </div>
                    <div className="we-offer-item"><h2 className="how-order-title">2. Заполните заявку</h2>
                        <div className="we-offer-item__content">
                            <div className="we-offer-item__icon"><img src="img/how-order/how-order-2.png" alt=""/></div>
                            <div className="we-offer-item__text-block"><p className="we-offer-item__text">Для оформления
                                первого займа вам необходимо заполнить
                                все обязательные поля анкеты. Для регистрации понадобятся: контактные данные, данные
                                вашего паспорта, банковской карты, ИНН и другая общая информация. Для того, чтоб
                                повысить шансы на получения кредита, мы рекомендуем заполнить все дополнительные
                                поля в анкете. При повторном запросе на получение кредитных средств - просто войдите
                                в личный кабинет и выберете необходимую сумму и срок кредита.
                                Если у вас возникли дополнительные вопросы, предлагаем перейти в рубрику
                                <a href="/spravka" className="">“Вопрос/Ответ”</a>.
                            </p></div>
                        </div>
                    </div>
                    <div className="we-offer-item"><h2 className="how-order-title">3. Верифицируйте карту</h2>
                        <div className="we-offer-item__content">
                            <div className="we-offer-item__icon"><img src="img/how-order/how-order-3.png" alt=""/></div>
                            <div className="we-offer-item__text-block"><p className="we-offer-item__text">Верификация
                                карты - это мера безопасности, которая
                                позволяет убедиться в том, что именно вы являетесь владельцем карты и исключает
                                вмешательство третьих лиц. Для того, чтоб верификация состоялась на вашей карте
                                будет заблокирована случайная сумма (до 1грн). Эту сумму вам необходимо будет указать
                                в качестве проверочного кода при регистрации. В случае, если ваш банк запрашивает
                                дополнительное подтверждение активности по карте - укажите код из СМС. После
                                этого - верификация завершена, а деньги будут разблокированы в течение нескольких
                                минут. Все данные по вашей карте защищены стандартом информационной безопасности.
                                Если вы подаете заявку на повторный кредит, то вы можете использовать ранее
                                верифицированную карту, выбрав ее из списка карт в личном кабинете.
                            </p></div>
                        </div>
                    </div>
                    <div className="we-offer-item"><h2 className="how-order-title">4. Получите решение по кредиту и
                        деньги на карту</h2>
                        <div className="we-offer-item__content">
                            <div className="we-offer-item__icon"><img src="img/how-order/how-order-4.png" alt=""/></div>
                            <div className="we-offer-item__text-block"><p className="we-offer-item__text">После успешной
                                верификации ожидайте одобрения кредита.
                                Решение будет отображено в <a href="/cabinet" className="">личном кабинете</a>
                                на сайте, а также отправлено на электронную почту или СМС-сообщением. После одобрения
                                кредита внимательно ознакомьтесь с положениями договора и оферты, подтвердите свое
                                согласие на подписание документов введя код из СМС, и получите средства. Деньги будут
                                перечислены на вашу карту в течение нескольких минут.
                            </p></div>
                        </div>
                    </div>
                </div>
                </div>
        </div>);
    }

}

export default GetCredit;
