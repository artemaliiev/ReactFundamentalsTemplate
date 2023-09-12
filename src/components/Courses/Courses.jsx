import React from 'react';

import styles from './styles.module.css';

import { CourseCard } from './components/CourseCard/CourseCard';
import { EmptyCourseListComponent } from './components/EmptyCourseListComponent/EmptyCourseListComponent';

export const Courses = ({coursesList, authorsList, handleShowCourse}) => {
	const isCoursesListNotEmpty = coursesList.length > 0;

	let content;

	if (isCoursesListNotEmpty) {
		const authorIdValueList = [];

		const createAuthorIdValueList = () => {
			authorsList.forEach(author => authorIdValueList[author.id] = author.name);
		};

		createAuthorIdValueList();

		const getCourseAuthorsList = (course) => {
			return course.authors.reduce((acc, author) => {
				return acc ? acc += `, ${authorIdValueList[author]}` : authorIdValueList[author];
			}, '');
		};

		content = coursesList.map(course => (
			<CourseCard
				key={course.id.toString()}
				course={course}
				authorsList={getCourseAuthorsList(course)}
			/>
		));
	} else {
		content = <EmptyCourseListComponent />
	}

	return (
		<>
			<div className={styles.panel}>
				{content}
			</div>
		</>
	);
};
