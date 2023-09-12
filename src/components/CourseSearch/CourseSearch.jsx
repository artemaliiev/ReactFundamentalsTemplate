import React, { useRef } from 'react';

import styles from './styles.module.css';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { BUTTON_SEARCH_COURSE_TEXT, DEFAULT_PLACEHOLDER_TEXT } from '../../constants'

export const CourseSearch = ({coursesList, handleSearchResult}) => {
    const ref = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        let searchResult = coursesList;
        const searchWord = ref.current.value;

        ref.current.value = '';

        if (searchWord) {
            searchResult = coursesList.filter(course =>
                course.id.includes(searchWord) || course.title.toLowerCase().includes(searchWord)
            );
        }

        handleSearchResult(searchResult || null);
    };

	return (
        <form onSubmit={handleSubmit}>
            <div className={styles.searchForm}>
                <Input inputName="searchInput" reference={ref} placeholderText={DEFAULT_PLACEHOLDER_TEXT} data-testid='searchInput'/>
                <Button type="submit" buttonText={BUTTON_SEARCH_COURSE_TEXT} />
            </div>
        </form>
	);
};
