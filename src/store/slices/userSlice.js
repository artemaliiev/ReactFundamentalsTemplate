import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: localStorage.getItem('token'),
	role: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, {payload}) => {
            return state = payload;
        },
		removeUserData: (state, {payload}) => {
			console.log('u2');
            return state = initialState;
        },
	},
});

// use these actions in your components / thunks
export const { setUserData, removeUserData } = userSlice.actions;

export default userSlice.reducer;
