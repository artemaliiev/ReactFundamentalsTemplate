import React, { useState } from 'react';

import { CreateAuthor } from '../CourseForm/components/CreateAuthor/CreateAuhtor';
import { Input } from '../../common/Input/Input';

import { getCourseDuration } from '../../helpers';

import styles from './styles.module.css';

export const CourseForm = ({authorsList, createCourse, createAuthor}) => {
    const TITLE_LABEL = 'Title';
    const DURATION_LABEL = 'Duration';
    const INPUT_PLACEHOLDER = 'Input text';

    const [newCourse, setNewCourse] = useState({
        id: '',
        title: '',
        decription: '',
        duration: '',
        creationDate: '',
        authors: ''
    });

    const handleInputChange = e => {
        const nextFormState = {
            ...newCourse,
            [e.target.name]: e.target.value,
        };
        setNewCourse(nextFormState);
        renderDuration();
    };

	//write your code here
    const handleSubmit = e => {
        // e.preventDefault();
        console.log(1);
    };

    const renderDuration = () => {
        if (newCourse.duration) {
            return getCourseDuration(newCourse.duration);
        }

        return `00:00 hours`;
    };

    const onCreateAuthor = authorName => {
        createAuthor(authorName);
    };

    console.log(authorsList);
    console.log(typeof authorsList);

	return (
        <>
            <h1>Course edit/create page</h1>
            <h3>Main Info</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    {/*// reuse Input component for title field with data-testid="titleInput"*/}

                    {/*// reuse Button component for 'Save course' button with data-testid="createCourseButton"*/}
                    <Input
                        labelText={TITLE_LABEL}
                        placeholderText={INPUT_PLACEHOLDER}
                        name="title"
                        value={newCourse.title}
                        onChange={handleInputChange}
                        data-testid="titleInput"
                    />
                </div>

                <label>
                    Description
                    <textarea
                        placeholder={INPUT_PLACEHOLDER}
                        name="decription"
                        value={newCourse.decription}
                        onChange={handleInputChange}
                        data-testid="descriptionTextArea"
                    />
                </label>

                <h3>Duration</h3>

                <div>
                    <Input
                        labelText={DURATION_LABEL}
                        placeholderText={INPUT_PLACEHOLDER}
                        name="duration"
                        value={newCourse.duration}
                        onChange={handleInputChange}
                        data-testid="durationInput"
                    />
                </div>
                <p>Duration: </p>
                {renderDuration(newCourse.duration)}

                <div className={styles.infoWrapper}>
                    <div>
                        <CreateAuthor onCreateAuthor={onCreateAuthor}/>
                        {/*// use CreateAuthor component*/}

                        {/*// reuse Input component with data-testid='durationInput' for duration field*/}
                    </div>

                    <div className={styles.authorsContainer}>
                        <strong>Authors</strong>

                        {/* use 'map' to display all available autors. Reuse 'AuthorItem' component for each author */}

                        <strong>Course authors</strong>

                        {/* use 'map' to display course's autors */}
                        {/* <p data-testid="selectedAuthor"}>{author.name}</p> */}

                        <p className={styles.notification}>List is empty</p> {/* display this paragraph if there are no authors in the course */}
                    </div>
                </div>
            </form>
        </>
	);
};
