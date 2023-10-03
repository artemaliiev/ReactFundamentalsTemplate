// import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCourses, createCourse, deleteCourse as deleteCourseService, updateCourse as updateCourseService } from './../../services';
import { setCourses, saveCourse, updateCourse, deleteCourse } from './../slices/coursesSlice';
// import { useDispatch } from "react-redux";


export const updateCourseThunk = (courseId, course) => {
    return async dispatch => {
        const courses = await updateCourseService(courseId, course)
            .then(response => response.result);

        dispatch(updateCourse(courses));
    };
};

export const deleteCourseThunk = (courseId) => {
    return async dispatch => {
        const courses = await deleteCourseService(courseId)
            .then(response => response.result);

        dispatch(deleteCourse(courses));
    };
};

export const createCourseThunk = () => {
    return async dispatch => {
        const courses = await createCourse()
            .then(response => response.result);

        dispatch(saveCourse(courses));
    };
};

export const getCoursesThunk = () => {
    return async dispatch => {
        const courses = await getCourses()
            .then(response => response.result);

        dispatch(setCourses(courses));
    };
};
