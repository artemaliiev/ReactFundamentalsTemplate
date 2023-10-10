import React from 'react';
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { getCoursesList } from './../../store/selectors';

import { CourseCard } from './components/CourseCard/CourseCard';
import { EmptyCourseListComponent } from './components/EmptyCourseListComponent/EmptyCourseListComponent';
import { Button } from '../../common';

import styles from './styles.module.css';

export const Courses = ({handleShowCourse}) => {
	// const dispatch = useDispatch();
	const coursesList = useSelector(getCoursesList);

	const isCoursesListNotEmpty = coursesList.length > 0;

	if (isCoursesListNotEmpty) {
		return (
			<>
				<div className={styles.addNewCourseWrapper}>
					<div className={styles.addNewCourseBtnContainer}>
						<Link to="/courses/add"><Button buttonText='Add new' data-testid="addCourse"/></Link>
						{/* <Link to="/courses/add" data-testid="addCourse">Add new</Link> */}
					</div>
				</div>
				<div className={styles.panel}>
					{coursesList.map(courseItem => (
						<CourseCard
							key={courseItem.id}
							course={courseItem}
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
