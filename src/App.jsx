import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';

import { useLocalStorage } from './helpers/useLocalStorage';

import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CourseForm } from './components/CourseForm/CourseForm'

// import { getCourses } from './services';
// import { setCourses } from './store/slices/coursesSlice';
import { setAuthors } from './store/slices/authorsSlice';
import { getAuthors } from './services';
// import { getCoursesList, getAuthorsList } from './store/selectors';

import { useDispatch } from "react-redux";

// use mocked data till API implementation
// import { mockedAuthorsList, mockedCoursesList } from './constants';

import styles from './App.module.css';

function App() {
	const [loginToken, setLoginToken] = useLocalStorage("token", null);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			// const courses = await getCourses();
			const authors = await getAuthors();
			// dispatch(setCourses(courses.result));
			dispatch(setAuthors(authors.result));
		}
		if (loginToken) {
			fetchData();
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
							<CourseInfo
								// coursesList={coursesList}
								// authorsList={authorsList}
							/>
						}
					/>
					<Route
						path="/courses/add"
						element={
							<CourseForm
								// authorsList={authorsList}
							/>
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
