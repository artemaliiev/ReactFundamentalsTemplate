import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getUserRole } from '../../../../store/selectors';

import { Button } from './../../../../common/Button/Button';

import { BUTTON_ADD_COURSE_TEXT } from '../../../../constants';

import styles from './styles.module.css';

export const EmptyCourseListComponent = props => {
    const isAdmin = useSelector(getUserRole) === 'admin';

    return (
        <div className={styles.emptyCourseListContainer} data-testid='emptyContainer'>
            <h1>Your List Is Empty</h1>
            <p>Please use "Add New Course</p>
            <div>
                {isAdmin && <Link to="/courses/add"><Button buttonText={BUTTON_ADD_COURSE_TEXT} data-testid="addCourse" /></Link>}
                {!isAdmin && `You don't have permissions to create a course. Please log in as ADMIN`}
            </div>
        </div>
    );
};