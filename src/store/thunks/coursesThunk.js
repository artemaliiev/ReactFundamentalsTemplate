// import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCourses } from './../../services';
import { setCourses } from './../slices/coursesSlice';
// import { useDispatch } from "react-redux";


export const updateCourseThunk = () => {

};

export const deleteCourseThunk = () => {

};

export const createCourseThunk = () => {

};

export const getCoursesThunk = () => {
    return async dispatch => {
        const courses = await getCourses()
            .then(response => response.result);

        dispatch(setCourses(courses));
    };
};
