import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Contests from '../Contest/Contests';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Contests></Contests>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;