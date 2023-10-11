import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		setAuthors: (state, {payload}) => {
            return state = payload;
        },
		saveAuthor: (state, {payload}) => {
			// const isAuthorExists = state.find(author => author.id === payload.id);
            // return isAuthorExists ? state : state.concat(payload);
			return state.concat(payload);
        },
	},
});

// use these actions in your components / thunks
export const { setAuthors, saveAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
