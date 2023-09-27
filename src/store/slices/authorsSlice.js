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
		saveAuthor: (state, {payload}) => {
			const isAuthorExists = state.find(author => author.id === payload.id);
            return isAuthorExists ? state : state.concat(payload);
        },
	},
});

// use these actions in your components / thunks
export const { setAuthors, saveAuthor } = authorsSlice.actions;

export const fetchAuthors = () => async dispatch => {
	try {
		getAuthors()
			.then(response => dispatch(setAuthors(response.result)));
	} catch(error) {
		console.log('Default error');
	}
};

export default authorsSlice.reducer;
