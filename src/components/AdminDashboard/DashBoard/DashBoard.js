import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashBoard.css';

const DashBoard = () => {
    const { contexts } = useAuth();
    contexts.admin = true;
    const defImg = 'https://randomuser.me/api/portraits/men/70.jpg';
    return (
        <div>
            <div className='dashboard-header'>
                <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`/home`}>Home</Link>
                {!contexts.admin ?
                    <>
                        <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`/dashboard/myBooking`}>My Order</Link>

                        <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`/dashboard/pay`}>Pay</Link>

                        <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`/dashboard/addreview`}>Review</Link>
                    </> :
                    <>
                        <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`/dashboard/contest`}>Create Contest</Link>

                        <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`/dashboard/manageproduct`}>Manage Products</Link>

                        <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`/dashboard/addedservice`}>Add Product</Link>

                        <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`/dashboard/makeAdmin`}>Make Admin</Link>
                    </>
                }
                {!contexts.user.email ? (
                    <>
                        <NavLink to="/login" className="text-white">
                            Log in
                        </NavLink>
                    </>
                ) : (
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
                )}
            </div>
            <Outlet />

        </div>
    );
};

export default DashBoard;