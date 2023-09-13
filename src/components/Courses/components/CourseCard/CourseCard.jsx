import React from 'react';

import styles from './styles.module.css';

import { getCourseDuration, formatCreationDate } from '../../../../helpers';

import { Button } from './../../../../common/Button/Button'

import { BUTTON_SHOW_COURSE_TEXT } from '../../../../constants'

export const CourseCard = ({course, handleShowCourse, authorsList}) => {
	const authorIdValueList = [];

	const createAuthorIdValueList = () => {
		authorsList.forEach(author => authorIdValueList[author.id] = author.name);
	};

	createAuthorIdValueList();

	const getCourseAuthorsList = () => {
		return course.authors.reduce((acc, author) => {
			return acc ? acc += `, ${authorIdValueList[author]}` : authorIdValueList[author];
		}, '');
	};

	return (
		<div className={styles.cardContainer} data-testid='courseCard'>
			<div className={styles.cardText}>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className={styles.cardDetails}>
				<p>
					<b>Authors: </b>
					{getCourseAuthorsList()}
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
