import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";



class Calculator extends React.Component {
    render() {

        return(
            <div id="intro">
                <div className="intro-bg"><img src="/img/intro/intro-bg-new.png" alt="" /></div>
                <div className="main-container">
                    <div className="slider-block">
                        <div className="slider-block__calculator">
                            <div className="slider-block__switcher">
                                <div className="slider-block__switcher-item slider-block__switcher-item_active">
                                    <div className="slider-block__switcher-el"></div>
                                    <div className="slider-block__switcher-label">Первый кредит</div>
                                </div>
                                <div className="slider-block__switcher-item">
                                    <div className="slider-block__switcher-el"></div>
                                    <div className="slider-block__switcher-label">Повторный кредит</div>
                                </div>
                            </div>
                            <div className="slider-block__calculator-item"><p className="slider-block__title">Сумма
                                кредита, грн</p>
                                <div className="slider-block__value">
                                    <input type="number"  className="desktop-calc-input" value="1300" /> <input
                                    type="tel" className="mobile-calc-input" /></div>
                                <div className="calculator-slider-outer">
                                    <div className="slider-button-minus"></div>
                                    <div id="intro-slider" className="calculator-slider dragdealer"><span
                                        className="calculator-load__outer"><span className="calculator-load"
                                                                                 ></span></span>
                                        <div className="calculator-slider__handle handle"
                                             ></div>
                                    </div>
                                    <div className="slider-button-plus"></div>
                                </div>
                                <ul className="slider-grid">
                                    <li className="slider-grid__list">500</li>
                                    <li className="slider-grid__list">2500</li>
                                    <li className="slider-grid__list">5000</li>
                                </ul>
                            </div>
                            <div className="slider-term-block"><p className="slider-block__title">На срок, дней</p>
                                <div className="term-buttons js-days-slider-block">
                                    <div className="term-buttons__item ">
                                        7
                                    </div>
                                    <div className="term-buttons__item ">
                                        14
                                    </div>
                                    <div className="term-buttons__item ">
                                        21
                                    </div>
                                    <div className="term-buttons__item active">
                                        30
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-block__info">
                            <div className="slider-block__info-outer">
                                <div className="cash-time-block">
                                    <div className="cash-time-block__label">Ожидайте деньги в</div>
                                    <div className="cash-time-block__value">2:31</div>
                                </div>
                                <p className="current-sum-message">Вы берете <span
                                    className="current-sum-message__sum">900</span>
                                    гривен на <span className="current-sum-message__term">30</span> дней </p>
                                <div className="all-info-block"><p className="percent-message">Проценты составят <span
                                    className="percent-message__sum js-day-sum">14</span> грн. в день.</p> <p
                                    className="total-sum-message">К возврату <b
                                    className="total-sum-message__sum js-all-sum">1305</b>
                                    грн.</p> <p>до <b
                                    className="total-sum-message__date js-end-date-calc">17.08.2019(сб)</b></p></div>
                                <a className="slider-button">Получить кеш!</a></div>
                        </div>
                    </div>
                </div>
            </div>

    );
    }

}

export default Calculator;
