import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const NavBar = () => {
    const { contexts } = useAuth();
    const defImg = 'https://randomuser.me/api/portraits/men/60.jpg';
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
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
                    </ul>
                    <ul className="navbar-nav">
                        {
                            !contexts.user.email ? (
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "active-nav-link nav-link nav-custom-link" : "nav-link nav-custom-link"} to="/login">Login</NavLink>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <div className='d-lg-flex'>
                                        <NavLink className={({ isActive }) => isActive ? "active-nav-link nav-link nav-custom-link" : "nav-link nav-custom-link"} to="/dashboard">Dashboard</NavLink>
                                        <div className="dropdown">
                                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img
                                                    style={{
                                                        width: "45px",
                                                        borderRadius: "50%",
                                                    }}
                                                    src={contexts.user.photoURL ? contexts.user.photoURL : defImg}
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-lg-end p-3" aria-labelledby="dropdownMenuLink">
                                                <li>{contexts.user.displayName}</li>
                                                <li>{contexts.user.email}</li>
                                                <li><button onClick={contexts.logOut} className="btn btn-danger fw-bold">
                                                    Sign Out
                                                </button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default NavBar;