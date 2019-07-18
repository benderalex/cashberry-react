import React from 'react';
import Header from './components/Header';
import Main from './components/site/Main';
import About from './components/site/About';
import GetCredit from './components/site/GetCredit';
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route} from "react-router-dom";
import TakeBack from "./components/site/TakeBack";


const App: React.FC = () => {


    const divStyle = {
        height:'auto',
        width:'auto',
        paddingTop: '50px',
        paddingBottom: '250px'
    };

    return (
        <Router>
            <Header/>
            <article style={divStyle} >
                <Route exact path="/" component={Main}/>
                <Route path="/o-nas" component={About}/>
                <Route path="/kak-polzovatsya" component={GetCredit}/>
                <Route path="/kak-vernut" component={TakeBack}/>
            </article>

            <Footer/>
        </Router>


            );
}

export default App;
