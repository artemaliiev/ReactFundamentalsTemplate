import React, { useState } from 'react';

import styles from './styles.module.css';

import { CourseCard } from './components/CourseCard/CourseCard';
import { EmptyCourseListComponent } from './components/EmptyCourseListComponent/EmptyCourseListComponent';
import { CourseSearch } from '../CourseSearch/CourseSearch';
import { Button } from '../../common';

import { BUTTON_ADD_COURSE_TEXT } from '../../constants'

export const Courses = ({coursesList, authorsList, handleShowCourse}) => {
	const [finalCoursesList, setFinalCoursesList] = useState(coursesList);
	const handleSearchResult = courseSearchResult => {
		setFinalCoursesList(courseSearchResult);
	};
	const isCoursesListNotEmpty = finalCoursesList.length > 0;

	if (isCoursesListNotEmpty) {
		return (
			<>
				<div className={styles.addNewCourseWrapper}>
					<CourseSearch coursesList={coursesList} handleSearchResult={handleSearchResult} />
					<div className={styles.addNewCourseBtnContainer}>
						<Button buttonText={BUTTON_ADD_COURSE_TEXT} />
					</div>
				</div>
				<div className={styles.panel}>
					{finalCoursesList.map(courseItem => (
						<CourseCard
							key={courseItem.id}
							course={courseItem}
							authorsList={authorsList}
							handleShowCourse={handleShowCourse}
						/>
					))}
				</div>
			</>
		);
	} else {
		return (
			<>
				<EmptyCourseListComponent />
			</>
		);
	}
};
