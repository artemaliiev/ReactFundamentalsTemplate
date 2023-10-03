import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCoursesList, getAuthorsList } from './../../store/selectors';

import { createCourseThunk, updateCourseThunk } from './../../store/thunks/coursesThunk';

import { CreateAuthor } from '../CourseForm/components/CreateAuthor/CreateAuhtor';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { AuthorItem } from '../CourseForm/components/AuthorItem/AuthorItem';

import { getCourseDuration } from '../../helpers';
import { formatCreationDate }  from '../../helpers';

import styles from './styles.module.css';

export const CourseForm = ({createCourse, createAuthor}) => {
    const TITLE_LABEL = 'Title';
    const DURATION_LABEL = 'Duration';
    const INPUT_PLACEHOLDER = 'Input text';

	const dispatch = useDispatch();
    const navigate = useNavigate();
    const coursesList = useSelector(getCoursesList);
    const authorsList = useSelector(getAuthorsList);

    const setCreationDate = () => {
        const rawDate = new Date().toJSON().slice(0, 10);

        return `${rawDate.slice(8, 10)}/${rawDate.slice(5, 7)}/${rawDate.slice(0, 4)}`;
    }

    let defaultCourseData = {
        title: '',
        decription: '',
        duration: 0,
        creationDate: setCreationDate(),
        authors: []
    };
    let defaultAuthors = [];

    const {courseId} = useParams();

    if (courseId) {
        const courseToEdit = coursesList.find(course => course.id === courseId);
        defaultCourseData = {
            title: courseToEdit.title,
            decription: courseToEdit.description,
            duration: courseToEdit.duration,
            creationDate: formatCreationDate(courseToEdit.creationDate),
            authors: courseToEdit.authors
        };
        defaultAuthors = authorsList.filter(author => courseToEdit.authors.includes(author.id));
    }

    const [newCourse, setNewCourse] = useState(defaultCourseData);
    const [submitted, setSubmitted] = useState(false);
    const [selectedAuthors, setSelectedAuthors] = useState(defaultAuthors);

    const handleInputChange = e => {
        const nextFormState = {
            ...newCourse,
            [e.target.name]: e.target.value,
        };
        setNewCourse(nextFormState);
        renderDuration();
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);

        if (newCourse.title && newCourse.decription && newCourse.duration > 0 && newCourse.authors.length > 0) {
            setNewCourse(newCourse);

            if (courseId) {
                dispatch(updateCourseThunk(courseId, newCourse));
            } else {
                dispatch(createCourseThunk(newCourse));
            }

            navigate("/courses");
        }
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

    const handleAddAuthor = (e, author) => {
        e.preventDefault();

        const isAuthorPresent = newCourse.authors.includes(author.id);
        if (!isAuthorPresent) {
            setNewCourse({
                ...newCourse,
                authors: [
                    ...newCourse.authors,
                    author.id
                ]
            });

            setSelectedAuthors([
                ...selectedAuthors,
                {
                    id: author.id,
                    name: author.name
                }
            ]);
        }
    }

    const SelectedAuthor = ({author}) => {
        return <p data-testid="selectedAuthor">{author.name}</p>;
    };

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
                    {submitted && !newCourse.title && (
                        <span className="formError">Title is required.</span>
                    )}
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
                    {submitted && !newCourse.decription && (
                        <span className="formError">Description is required.</span>
                    )}
                </label>

                <h3>Duration</h3>

                <p>Duration: </p>
                <div>
                    <Input
                        labelText={DURATION_LABEL}
                        placeholderText={INPUT_PLACEHOLDER}
                        name="duration"
                        value={newCourse.duration}
                        onChange={handleInputChange}
                        data-testid="durationInput"
                    />
                    {submitted && !newCourse.duration && (
                        <span className="formError">Duration is required.</span>
                    )}
                </div>
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

                        {authorsList.map(author => (
                            <AuthorItem
                                key={author.id}
                                author={author}
                                handleAddAuthor={handleAddAuthor}
                            />
                        ))}
                        <strong>Course authors</strong>
                        {selectedAuthors.map(author => (
                            <SelectedAuthor
                                key={author.id}
                                author={author}
                            />
                        ))}

                        {selectedAuthors.length === 0 && <p className={styles.notification}>List is empty</p>}
                    </div>
                    <Button buttonText='Create Course' data-testid="createCourseButton"/>
                </div>
            </form>
        </>
	);
};
