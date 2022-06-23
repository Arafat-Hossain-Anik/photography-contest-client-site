import React from 'react';
import Contest from '../Contest/Contest';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Contest></Contest>
        </div>
    );
};

export default Home;