import React from 'react';
import { Link, useLocation } from "react-router-dom";

import { getCourseDuration, formatCreationDate } from '../../../../helpers';

import { Button } from './../../../../common/Button/Button'

import { BUTTON_SHOW_COURSE_TEXT } from '../../../../constants'

import styles from './styles.module.css';

export const CourseCard = ({course, handleShowCourse, authorsList}) => {
	const { pathname } = useLocation();
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

	const formattedDate = formatCreationDate(course.creationDate);

	const newDate = () => {
		const rawDate = new Date(formattedDate).toJSON().slice(0, 10);

  		return `${rawDate.slice(8, 10)}.${rawDate.slice(5, 7)}.${rawDate.slice(0, 4)}`;
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
					{newDate()}
				</p>
				<div>
					<Link to={`${pathname}/${course.id}`}><Button buttonText={BUTTON_SHOW_COURSE_TEXT} /></Link>
					{/* <Button handleClick={()=>handleShowCourse(course.id)} buttonText={BUTTON_SHOW_COURSE_TEXT} /> */}
				</div>
			</div>
		</div>
	);
};
