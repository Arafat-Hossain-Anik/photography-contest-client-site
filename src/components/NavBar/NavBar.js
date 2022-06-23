import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className='navbar-brand nav-brand' to="/">BestClick</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-between" id="navbarScroll">
                    <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "active-nav-link nav-link nav-custom-link" : "nav-link nav-custom-link"} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "active-nav-link nav-link nav-custom-link" : "nav-link nav-custom-link"} to="/contest">Contest</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "active-nav-link nav-link nav-custom-link" : "nav-link nav-custom-link"} to="/about">About</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "active-nav-link nav-link nav-custom-link" : "nav-link nav-custom-link"} to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default NavBar;