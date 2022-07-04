import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { contexts } = useAuth();
    const { user } = contexts;
    const location = useLocation();
    return user.email ? children : <Navigate to="/login" state={{ from: location }} />;
    // return user.email ? children : children;
};

export default PrivateRoute;