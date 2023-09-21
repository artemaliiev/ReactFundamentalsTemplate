import React, {useState} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';

import { useLocalStorage } from './helpers/useLocalStorage';

import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CourseForm } from './components/CourseForm/CourseForm'

// use mocked data till API implementation
import { mockedAuthorsList, mockedCoursesList } from './constants';

import styles from './App.module.css';

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {
	const [userName, setUserName] = useLocalStorage("userName", "");
	const [loginToken, setLoginToken] = useLocalStorage("token", "");
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [coursesList, setCoursesList] = useState(mockedCoursesList);

	const createCourse = course => {
		const isCoursePresent = coursesList.find(courseItem => courseItem.id === course.id);

		if (!isCoursePresent) {
			setCoursesList([
				...coursesList, {
					id: course.id,
					title: course.title,
					decription: course.decription,
					duration: Number(course.duration),
					creationDate: course.creationDate,
					authors: course.authors
				}
			])
		}
	};

	const createAuthor = authorName => {
		const isAuthorPresent = authorsList.find(authorItem => authorItem.name === authorName);

		if (!isAuthorPresent) {
			setAuthorsList([
				...authorsList,
				{
					id: (Math.random()*1000).toString(),
					name: authorName
				}
			]);
		}
	};


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
								coursesList={coursesList}
								authorsList={authorsList}
							/>
						}
					/>
					<Route
						path="/courses/:courseId"
						element={
							<CourseInfo
								coursesList={coursesList}
								authorsList={authorsList}
							/>
						}
					/>
					<Route
						path="/courses/add"
						element={
							<CourseForm
								authorsList={authorsList}
								createAuthor={createAuthor}
								createCourse={createCourse}
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
