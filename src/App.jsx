import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';

import { useLocalStorage } from './helpers/useLocalStorage';

import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

// use mocked data till API implementation
import { mockedAuthorsList, mockedCoursesList } from './constants';

import styles from './App.module.css';

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {
	const [userName, setUserName] = useLocalStorage("userName", "");
	const [loginToken, setLoginToken] = useLocalStorage("loginToken", "");

	// const handleShowCourse = courseId => {
	// 	setShowCourseId(courseId);
	// };

	// const onBack = () => {
	// 	setShowCourseId(null);
	// };

	// useEffect(() => {
	// 	!loginToken ? navigate("/login") : navigate("/courses");
	// }, [navigate, loginToken]);

	return (
		<div className={styles.mainWrapper}>
			<Header
				isLoggedIn={loginToken}
				userName={userName}
				setLoginToken={setLoginToken}
				setUserName={setUserName}
			/>
			{loginToken ?
				<Routes>
					<Route
						path="/courses"
						element={
							<Courses
								coursesList={mockedCoursesList}
								authorsList={mockedAuthorsList}
							/>
						}
					/>
					<Route
						path="/courses/:courseId"
						element={
							<CourseInfo
								coursesList={mockedCoursesList}
								authorsList={mockedAuthorsList}
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
								setUserName={setUserName}
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
			{/* { showCourseId
				? <CourseInfo
					coursesList={mockedCoursesList}
					authorsList={mockedAuthorsList}
					onBack={onBack}
					showCourseId={showCourseId}/>
				: <Courses
					coursesList={mockedCoursesList}
					authorsList={mockedAuthorsList}
					handleShowCourse={handleShowCourse}/>
			} */}
		</div>
	);
}

export default App;
