import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

// use mocked data till API implementation
import { mockedAuthorsList, mockedCoursesList } from './constants';

import styles from './App.module.css';

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {
	// const [showCourseId, setShowCourseId] = useState(null);

	// const handleShowCourse = courseId => {
	// 	setShowCourseId(courseId);
	// };

	// const onBack = () => {
	// 	setShowCourseId(null);
	// };

	return (
		<div className={styles.mainWrapper}>
			<BrowserRouter>
				<Header />
					<Routes>
						<Route
							path="/"
							element={<Login />}
						/>
						<Route
							path="/registration"
							element={
								<Registration />
							}
						/>
					</Routes>
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
			</BrowserRouter>
		</div>
	);
}

export default App;
