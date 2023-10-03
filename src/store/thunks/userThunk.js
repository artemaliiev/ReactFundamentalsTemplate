import { getCurrentUser, logout } from './../../services';
import { setUserData, removeUserData } from './../slices/userSlice';

export const getUserThunk = (loginToken) => {
    return async dispatch => {
        const userData = await getCurrentUser(loginToken)
            .then(response => response.result);

        dispatch(setUserData(userData));
    };
};

export const logoutThunk = () => {
    return async dispatch => {
        await logout();

        dispatch(removeUserData());
    };
};
