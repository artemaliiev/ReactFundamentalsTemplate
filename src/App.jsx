import React from 'react';

import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';

// use mocked data till API implementation
import { mockedAuthorsList, mockedCoursesList } from './constants';

// Task 2 and 3 - wrap your App with redux Provider and BrowserRouter in src/index.js

function App() {

	// const [courseId, setCourseId] = useState(null);

	// write your code here

	return (
		<>
			<Header />
			<Courses
				coursesList={mockedCoursesList}
				authorsList={mockedAuthorsList}
			/>
		</>
	);
}

export default App;
