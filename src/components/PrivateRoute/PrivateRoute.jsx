import React from 'react';

export const PrivateRoute = ({ children }) => {

	return (
		// auth ? children : <Navigate to="/login" />;
        <>
            {children}
        </>
	);
};
