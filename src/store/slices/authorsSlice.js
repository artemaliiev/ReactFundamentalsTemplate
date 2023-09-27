import { createSlice } from '@reduxjs/toolkit';
import { getAuthors }  from './../../services';

const initialState = [];

export const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		setAuthors: (state, {payload}) => {
            return state = payload;
        },
		// saveAuthor: 
	},
});

// use these actions in your components / thunks
export const { setAuthors, saveAuthor } = authorsSlice.actions;

export const fetchAuthors = () => async dispatch => {
	try {
		await getAuthors()
			.then(response => dispatch(setAuthors(response.result)));
	} catch(error) {
		console.log('Default error');
	}
};

export default authorsSlice.reducer;
