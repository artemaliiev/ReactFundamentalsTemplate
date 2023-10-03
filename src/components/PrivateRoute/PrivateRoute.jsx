import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import { getUserRole } from '../../store/selectors';

export const PrivateRoute = ({ children }) => {
    const isAdmin = useSelector(getUserRole) === 'admin';

	return (
        <>
            {isAdmin ? children : <Navigate to="/login" />}
        </>
	);
};
