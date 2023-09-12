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


	// <CourseInfo
	// 	coursesList={mockedCoursesList}
	// 	authorsList={mockedAuthorsList}
	// 	showCourseId={courseId}
	// />
	const title = course.title;

	return (
		<div className={styles.cardContainer} data-testid='courseCard'>
			<div className={styles.cardText}>
				<h2>{title}</h2>
				<p>{course.description}</p>
			</div>
			<div className={styles.cardDetails}>
				<p>
					<b>Authors: </b>
					{authorsList}
				</p>
				<p>
					<b>Duration: </b>
					{getCourseDuration(course.duration)}
				</p>
				<p>
					<b>Created: </b>
					{formatCreationDate(course.creationDate)}
				</p>
				<div>
					<Button onClick={handleShowCourse} buttonText={BUTTON_SHOW_COURSE_TEXT} />
				</div>
			</div>
		</div>
	);
};
