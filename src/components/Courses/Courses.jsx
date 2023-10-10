import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { getCoursesList } from './../../store/selectors';

import { CourseCard } from './components/CourseCard/CourseCard';
import { EmptyCourseListComponent } from './components/EmptyCourseListComponent/EmptyCourseListComponent';
import { CourseSearch } from '../CourseSearch/CourseSearch';
import { Button } from '../../common';

import styles from './styles.module.css';

export const Courses = ({handleShowCourse}) => {
	// const [finalCoursesList, setFinalCoursesList] = useState(coursesList);
	// const handleSearchResult = courseSearchResult => {
	// 	setFinalCoursesList(courseSearchResult);
	// };
	// const dispatch = useDispatch();
	const navigate = useNavigate();
	const coursesList = useSelector(getCoursesList);

	const isCoursesListNotEmpty = coursesList.length > 0;

	const handleClick = () => {
		navigate("/courses/add");
	}

	if (isCoursesListNotEmpty) {
		return (
			<>
				<div className={styles.addNewCourseWrapper}>
					<CourseSearch coursesList={coursesList}  />
					<div className={styles.addNewCourseBtnContainer}>
						<Link to="/courses/add"><Button buttonText='Add new' data-testid="addCourse" handleClick={handleClick}/></Link>
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
