import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className='footer-area text-white'>
            <div className="main">
                <div className="footer-title text-center mb-3">
                    <h2 className=''>Best Click</h2>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer d-flex flex-column ps-2 flex-md-row justify-content-md-around">
                    <div className="single-footer">
                        <h4>Main Menu</h4>
                        <ul>
                            <li><a href="/home" ><i className="fas fa-chevron-right"></i> Home</a></li>
                            <li><a href="/home"><i className="fas fa-chevron-right"></i> Services</a></li>
                            <li><a href="/home" ><i className="fas fa-chevron-right"></i> About Us</a></li>
                            <li><a href="/home"><i className="fas fa-chevron-right"></i> Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="single-footer">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/"><i className="fas fa-chevron-right"></i> Privacy</a></li>
                            <li><a href="/"><i className="fas fa-chevron-right"></i> Terms & Conditions</a></li>
                            <li><a href="/"><i className="fas fa-chevron-right"></i> Disclaimer</a></li>
                        </ul>
                    </div>
                    <div className="single-footer">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i> Mohammadpur, Dhaka</li>
                            <li><i className="fas fa-mobile-alt"></i> +8801757176953</li>
                            <li><i className="far fa-envelope"></i> arafatskd@gmail.com</li>
                            <li><i className="fas fa-globe-europe"></i> www.bestclick.com</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="copy">
                    <p style={{ color: 'white' }}><small>&copy; 2021 all rights reserved By Best Click</small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;