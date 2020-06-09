import React from 'react';
import Promotions from '../components/Promotions';
import Categories from '../components/Categories';
import '../styles/containers/Home.styl';


const Home = () => {

    return (
        <div className="Main">
            <Promotions />
            <Categories />
        </div>
    );
};

export default Home;