import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";



class Offer extends React.Component {
    render() {

        return(
            <section id="we-offer">
            <div className="main-container">
            <div className="we-offer">
            <div className="we-offer__title"><h2 className="page-title">что мы предлагаем?</h2></div>
        <div className="we-offer__content">
        <div className="we-offer__column">
        <div className="we-offer-block"><h2 className="we-offer-item__title">НОВЫМ <span
        className="we-offer-item__title-label">КЛИЕНТАМ</span></h2>
        <div className="we-offer-list">
        <div className="we-offer-list__item"><p
            className="we-offer-list__item-text">Максимальная сумма: <span
            className="we-offer-list__item-text-bold">5 000 гривен.</span></p></div>
        <div className="we-offer-list__item"><p
            className="we-offer-list__item-text">Сроки кредитования: <span
            className="we-offer-list__item-text-bold">от 7-ми до 30-ти дней.</span></p>
        </div>
        <div className="we-offer-list__item"><p
            className="we-offer-list__item-text">Процентная ставка: <span
            className="we-offer-list__item-text-bold">1,5%</span></p></div>
        </div>
        </div>
        </div>
        <div className="we-offer__icons">
        <div className="we-offer__icon-item">
        <div className="image__wrapper loaded">
        <div className="ripple image__spinner">
        <div className="ripple__circle"></div>
            <div className="ripple__circle ripple__inner-circle"></div>
            </div>
            <img data-url="img/we-offer/we-offer-1-new.png"
        src="img/we-offer/we-offer-1-new.png" alt="" /></div>
            </div>
            <div className="we-offer__icon-item">
        <div className="image__wrapper loaded">
        <div className="ripple image__spinner">
        <div className="ripple__circle"></div>
            <div className="ripple__circle ripple__inner-circle"></div>
            </div>
            <img data-url="img/we-offer/we-offer-2-new.png" src="img/we-offer/we-offer-2-new.png" /></div>
            </div>
            <div className="we-offer__icon-item">
        <div className="image__wrapper loaded">
        <div className="ripple image__spinner">
        <div className="ripple__circle"></div>
            <div                                                  className="ripple__circle ripple__inner-circle"></div>
            </div>
            <img data-url="img/we-offer/we-offer-3-new.png"
        src="img/we-offer/we-offer-3-new.png" /></div>
            </div>
            </div>
            <div className="we-offer__column">
        <div className="we-offer-block"><h2 className="we-offer-item__title">ПОСТОЯННЫМ <span
        className="we-offer-item__title-label">КЛИЕНТАМ</span></h2>
        <div className="we-offer-list">
        <div className="we-offer-list__item"><p
            className="we-offer-list__item-text">Максимальная сумма: <span
            className="we-offer-list__item-text-bold">8 000 гривен.</span></p></div>
        <div className="we-offer-list__item"><p
            className="we-offer-list__item-text">Сроки кредитования: <span
            className="we-offer-list__item-text-bold">от 7-ми до 30-ти дней.</span></p>
        </div>
        <div className="we-offer-list__item"><p
            className="we-offer-list__item-text">Процентная ставка: <span
            className="we-offer-list__item-text-bold">1%</span></p></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>

    );
    }

}

export default Offer;
