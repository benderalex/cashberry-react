import React, {Component} from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (

                <Slider {...settings}>
                    <div>
                        <div className="advantages-list__item">
                            <div className="advantages-list__icon">
                                <img src="/img/advantages/advantage-1.png" alt=""/>
                            </div>
                            <h3 className="advantages-list__tittle">Просто</h3>
                            <p className="advantages-list__text">Регистрация, заявка, решение, кеш!</p>
                        </div>
                    </div>
                    <div>
                        <div className="advantages-list__item">
                            <div className="advantages-list__icon">
                                <img src="/img/advantages/advantage-2.png" alt=""/>
                            </div>
                            <h3 className="advantages-list__tittle">Быстро</h3>
                            <p className="advantages-list__text">Оформление заявки на кредит не займет много
                                времени!</p>
                        </div>
                    </div>
                    <div>
                        <div className="advantages-list__item">
                            <div className="advantages-list__icon">
                                <img src="/img/advantages/advantage-3.png" alt=""/>
                            </div>
                            <h3 className="advantages-list__tittle">Честно</h3>
                            <p className="advantages-list__text">Никаких скрытых коммисий и дополнительных платежей!</p>
                        </div>
                    </div>
                    <div>
                        <div className="advantages-list__item">
                            <div className="advantages-list__icon">
                                <img src="img/advantages/advantage-4.png" alt=""/>
                            </div>
                            <h3 className="advantages-list__tittle">Выгодно</h3>
                            <p className="advantages-list__text">Программа лояльности и бонусы для постоянных
                                клиентов!</p>
                        </div>
                    </div>
                    <div>
                        <div className="advantages-list__item">
                            <div className="advantages-list__icon">
                                <img src="img/advantages/advantage-5.png" alt=""/>
                            </div>
                            <h3 className="advantages-list__tittle">Безопасно</h3>
                            <p className="advantages-list__text">Гарантия защиты Ваших персональных данных!</p>
                        </div>
                    </div>

                </Slider>

        );
    }
}