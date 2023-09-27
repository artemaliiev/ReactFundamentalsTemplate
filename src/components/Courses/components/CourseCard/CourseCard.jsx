import React from 'react';
import { Link, useLocation } from "react-router-dom";

import { getCourseDuration, formatCreationDate } from '../../../../helpers';

import { Button } from './../../../../common/Button/Button'

import { useDispatch } from "react-redux";
import { deleteCourse } from '../../../../store/slices/coursesSlice';

import { BUTTON_SHOW_COURSE_TEXT } from '../../../../constants'

import styles from './styles.module.css';

export const CourseCard = ({course, handleShowCourse, authorsList}) => {
	const { pathname } = useLocation();
	const authorIdValueList = [];
	const dispatch = useDispatch();

	const createAuthorIdValueList = () => {
		authorsList.forEach(author => authorIdValueList[author.id] = author.name);
	};

	createAuthorIdValueList();

	const getCourseAuthorsList = () => {
		return course.authors.reduce((acc, author) => {
			return acc ? acc += `, ${authorIdValueList[author]}` : authorIdValueList[author];
		}, '');
	};

	const handleDeleteCourse = courseId => {
		dispatch(deleteCourse({id: courseId}));
	}

	const formattedDate = formatCreationDate(course.creationDate);

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
					{formattedDate}
				</p>
				<div>
					<Link to={`${pathname}/${course.id}`}><Button buttonText={BUTTON_SHOW_COURSE_TEXT} /></Link>
					<Button handleClick={()=>handleDeleteCourse(course.id)} buttonText="Delete" data-testid="deleteCourse"/>
					<Button buttonText="Update" data-testid="updateCourse"/>
					{/* <Button handleClick={()=>handleShowCourse(course.id)} buttonText={BUTTON_SHOW_COURSE_TEXT} /> */}
				</div>
			</div>
		</div>
	);
};
