import React from 'react';
import Contests from '../Contest/Contests';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Contests></Contests>
        </div>
    );
};

export default Home;