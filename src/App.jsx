import React, { useState } from 'react';

import styles from './App.module.css';

import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

// use mocked data till API implementation
import { mockedAuthorsList, mockedCoursesList } from './constants';

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {
	const [showCourseId, setShowCourseId] = useState(null);

	const handleShowCourse = courseId => {
		setShowCourseId(courseId);
	};

	const onBack = () => {
		setShowCourseId(null);
	};

	return (
		<div className={styles.mainWrapper}>
			<Header />
			{ showCourseId
				? <CourseInfo
					coursesList={mockedCoursesList}
					authorsList={mockedAuthorsList}
					onBack={onBack}
					showCourseId={showCourseId}/>
				: <Courses
					coursesList={mockedCoursesList}
					authorsList={mockedAuthorsList}
					handleShowCourse={handleShowCourse}/>
			}
		</div>
	);
}

export default App;
