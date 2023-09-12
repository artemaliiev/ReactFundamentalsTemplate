import React from 'react';

import { getCourseDuration, formatCreationDate } from '../../../../helpers';

// import { CourseInfo } from '../../../CourseInfo';
import { Button } from './../../../../common/Button/Button'

import { BUTTON_SHOW_COURSE_TEXT } from '../../../../constants'

import styles from './styles.module.css';

export const CourseCard = ({course, handleShowCourse, authorsList}) => {

	// const [courseId, setCourseId] = useState(null);
	// const BUTTON_DELETE_COURSE_TEXT = 'Delete';
	// const BUTTON_UPDATE_COURSE_TEXT = 'Update';
	

	const showCourse = courseId => {

	};

	
	// <CourseInfo
	// 	coursesList={mockedCoursesList}
	// 	authorsList={mockedAuthorsList}
	// 	showCourseId={courseId}
	// />

	return (
		<div className={styles.cardContainer} data-testid='courseCard'>
			<div className={styles.cardText}>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className={styles.cardDetails}>
				<p>
					<b>Authors: </b>
					{authorsList}
				</p>
				<p>
					<b>Duration: </b>
					<span>{getCourseDuration(course.duration)}</span>
				</p>
				<p>
					<b>Created: </b>
					<span>{formatCreationDate(course.creationDate)}</span>
				</p>
				<div>
					<Button onClick={showCourse(course.id)} buttonText={'Show course'} />
				</div>
			</div>
		</div>
	);
};
