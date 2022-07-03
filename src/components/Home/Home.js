import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Contests from '../Contest/Contests';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Contests></Contests>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;