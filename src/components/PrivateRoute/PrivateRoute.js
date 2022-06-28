import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { contexts } = useAuth();
    const { user } = contexts;
    // return user.email ? children : <Navigate to="/login" />;
    return user.email ? children : children;
};

export default PrivateRoute;