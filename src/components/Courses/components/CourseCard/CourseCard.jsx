import React from 'react';

import styles from './styles.module.css';

import { getCourseDuration, formatCreationDate } from '../../../../helpers';

import { Button } from './../../../../common/Button/Button'

import { BUTTON_SHOW_COURSE_TEXT } from '../../../../constants'

export const CourseCard = ({course, handleShowCourse, authorsList}) => {
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
					<Button handleClick={()=>handleShowCourse(course.id)} buttonText={BUTTON_SHOW_COURSE_TEXT} />
				</div>
			</div>
		</div>
	);
};
