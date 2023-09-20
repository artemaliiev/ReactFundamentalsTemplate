import React from 'react';
import { Link, useParams } from "react-router-dom";

import styles from './styles.module.css';

import { formatCreationDate, getCourseDuration } from '../../helpers';
import { Button } from '../../common/Button/Button';

import { BUTTON_BACK_TEXT } from '../../constants';

export const CourseInfo = ({coursesList, authorsList, onBack, showCourseId}) => {
	const {courseId} = useParams();
	const showCourse = coursesList.find(course => course.id === courseId);
	const duration = getCourseDuration(showCourse.duration);
	const showedAuthorsList = authorsList.filter(author => showCourse.authors.includes(author.id));

	return (
		<>
			<div className={styles.courseContainer} data-testid='courseInfo'>
				<h1>{showCourse.title}</h1>
				<div className={styles.courseInfo}>
					<p className={styles.description}>{showCourse.description}</p>
					<div>
						<p>
							<b>ID: </b>
							{showCourseId}
						</p>
						<p>
							<b>Duration: </b>
							{duration}
						</p>
						<p>
							<b>Created: </b>
							{formatCreationDate(showCourse.creationDate)}
						</p>
						<div>
							<b>Authors</b>
							<ul className={styles.authorsList}>
								{ showedAuthorsList.map(author=>(
									<li key={author.id}>{author.name}</li>
								)) }
							</ul>
						</div>
					</div>
				</div>
				<Link to="/courses"><Button buttonText={BUTTON_BACK_TEXT} /></Link>
			</div>
		</>
	);
};
