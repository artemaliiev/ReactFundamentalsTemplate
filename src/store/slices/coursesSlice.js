import { createSlice } from '@reduxjs/toolkit';

import { getCourses } from './../../services';
const initialState = [];

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		setCourses: (state, {payload}) => {
            return state = payload;
        },
		// saveCourse: 
		// deleteCourse: 
		// updateCourse: 
	},
});

// use these actions in your components / thunks
export const { setCourses, saveCourse, deleteCourse, updateCourse } =
	coursesSlice.actions;

export const fetchCourses = () => async dispatch => {
	try {
		await getCourses()
			.then(response => dispatch(setCourses(response.result)));
	} catch(error) {
		console.log('Default error');
	}
};

export default coursesSlice.reducer;
