import React from 'react';

import { formatCreationDate, getCourseDuration } from '../../helpers';
import { Button } from '../../common/Button/Button';

import { BUTTON_BACK_TEXT } from '../../constants';

import styles from './styles.module.css';

export const CourseInfo = ({coursesList, authorsList, onBack, showCourseId}) => {
	const showCourse = coursesList.find(course => course.id === showCourseId);
	const duration = getCourseDuration(showCourse.duration);
	const showedAuthorsList = authorsList.filter(author => showCourse.authors.includes(author.id));

	return (
		<>
			<div data-testid='courseInfo'>
				{ /*// Module 1: reuse Button component for 'onBack' functionality */ }
				{ /*// Module 2: use 'react-router-dom' 'Link' component for button 'Back'*/ }

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
			</div>
			<Button onClick={onBack} buttonText={BUTTON_BACK_TEXT} />
		</>
	);
};
