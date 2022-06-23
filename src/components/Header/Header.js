import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active carousel-container">
                    <img src="https://rstheme.com/products/html/shooter/shooter-html/images/slider/slide_2.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block carousel-text">
                        <h5 className='header-title'>Submit <br /> Your Best Photo</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <div>
                            <Link className='join-btn' to="/join">JOIN NOW</Link>
                            <Link className='contact-btn' to="/contact">CONTACT US</Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://rstheme.com/products/html/shooter/shooter-html/images/slider/slide_1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block carousel-text">
                        <h5 className='header-title'>Be Ultimate<br /> Photographer</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <div>
                            <Link className='join-btn' to="/join">JOIN NOW</Link>
                            <Link className='contact-btn' to="/contact">CONTACT US</Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Header;