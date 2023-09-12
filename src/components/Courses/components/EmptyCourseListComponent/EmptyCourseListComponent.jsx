import React from 'react';

import { Button } from './../../../../common/Button/Button'

import styles from './styles.module.css';

export const EmptyCourseListComponent = props => {

    return (
        <div className={styles.emptyCourseListContainer} data-testid='emptyContainer'>
            <h1>Your List Is Empty</h1>
            <p>Please use "Add New Course</p>
            <div>
                <Button buttonText="Add New Course" data-testid="addCourse" />
            </div>
        </div>
    );
};