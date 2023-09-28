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
		saveCourse: (state, {payload}) => {
			const isCourseExists = state.find(course => course.id === payload.id);
            return isCourseExists ? state : state.concat(payload);
        },
		deleteCourse: (state, {payload}) => {
			const newState = state.filter(course => course.id !== payload);
            return newState;
        },
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
