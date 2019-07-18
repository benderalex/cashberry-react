import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Offer from './main/Offer'
import SimpleSlider from './main/SimpleSlider'
import Calculator from './main/Calculator'


class Main extends React.Component {
    render() {

        return(
            <span>
                <Calculator/>

                <SimpleSlider/>
                <Offer/>
            </span>


            );
    }

}

export default Main;
