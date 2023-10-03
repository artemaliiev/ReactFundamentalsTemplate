import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { getCoursesThunk } from './store/thunks/coursesThunk';
import { getAuthorsThunk } from './store/thunks/authorsThunk';
import { getUserThunk } from './store/thunks/userThunk';

import { useLocalStorage } from './helpers/useLocalStorage';


import { Header } from './components/Header/Header';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';

import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CourseForm } from './components/CourseForm/CourseForm';

import styles from './App.module.css';

function App() {
	const [loginToken, setLoginToken] = useLocalStorage("token", null);
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		// const courses = await getCourses();
	// 		const authors = await getAuthors();
	// 		// dispatch(setCourses(courses.result));
	// 		dispatch(setAuthors(authors.result));
	// 	}
	// 	if (loginToken) {
	// 		fetchData();
	// 	}
	// }, [dispatch, loginToken]);

	useEffect(() => {
		if (loginToken) {
			dispatch(getCoursesThunk());
			dispatch(getAuthorsThunk());
			dispatch(getUserThunk(loginToken));
		}
	}, [dispatch, loginToken]);

	// useEffect(() => {
	// 	dispatch(fetchAuthors());
	// }, [dispatch]);


	// const coursesList = useSelector(getCourses);
	// const authorsList = useSelector(getAuthors);

	return (
		<div className={styles.mainWrapper}>
			<Header
				isLoggedIn={loginToken}
				setLoginToken={setLoginToken}
			/>
			{loginToken ?
				<Routes>
					<Route
						path="/courses"
						element={
							<Courses
								// coursesList={coursesList}
								// authorsList={authorsList}
							/>
						}
					/>
					<Route
						path="/courses/:courseId"
						element={
							<CourseInfo/>
						}
					/>
					<Route
						path="/courses/add"
						element={
							<PrivateRoute>
								<CourseForm/>
							</PrivateRoute>
						}
					/>
					<Route
						path="/courses/update/:courseId"
						element={
							<PrivateRoute>
								<CourseForm/>
							</PrivateRoute>
						}
					/>
					<Route path='*' element={<Navigate to='/courses' />} />
				</Routes>
				:
				<Routes>
					<Route
						path="/login"
						element={
							<Login
								setLoginToken={setLoginToken}
							/>
						}
					/>
					<Route
						path="/registration"
						element={
							<Registration />
						}
					/>
					<Route path='*' element={<Navigate to='/login' />} />
				</Routes>
			}
		</div>
	);
}

export default App;
