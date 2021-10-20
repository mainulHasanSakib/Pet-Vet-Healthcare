import React from 'react';
import About from './About Us/About';
import Ambulence from './Ambulence/Ambulence';
import Banner from './Banner/Banner';
import Services from './Service/Services';

const Home = () => {
    return (
        <div id="home" >
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Ambulence></Ambulence>
        </div>
    );
};

export default Home;