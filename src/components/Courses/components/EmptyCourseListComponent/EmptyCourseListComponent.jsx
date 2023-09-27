import React from 'react';
import { Link } from "react-router-dom";

import { Button } from './../../../../common/Button/Button';

import { BUTTON_ADD_COURSE_TEXT } from '../../../../constants';

import styles from './styles.module.css';

export const EmptyCourseListComponent = props => {

    return (
        <div className={styles.emptyCourseListContainer} data-testid='emptyContainer'>
            <h1>Your List Is Empty</h1>
            <p>Please use "Add New Course</p>
            <div>
                <Link to="/courses/add"><Button buttonText={BUTTON_ADD_COURSE_TEXT} data-testid="addCourse" /></Link>
            </div>
        </div>
    );
};