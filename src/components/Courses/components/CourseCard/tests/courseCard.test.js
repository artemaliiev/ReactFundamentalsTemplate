import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { screen, fireEvent } from "@testing-library/react";
import { renderWithState } from '../../../../../test/renderWithState';
import { mockedAuthorsList } from '../../../../../constants';
import { getCourseDuration } from '../../../../../helpers/getCourseDuration';

import { CourseCard } from '../CourseCard';

const course = {
    id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
    title: 'JavaScriptJavaScript',
    description: `testingdescription`,
    creationDate: '08/03/2021',
    duration: 160,
    authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d', 'f762978b-61eb-4096-812b-ebde22838167'],
};
const preloadedState = {
    authors: mockedAuthorsList,
};
const courseDuration = getCourseDuration(course.duration);

describe('Cousrse Card', () => {
    it('should display title', () => {
        renderWithState(
            <MemoryRouter>
                <CourseCard course={course} />
            </MemoryRouter>,
            { preloadedState }
        );

        expect(screen.getByText('JavaScriptJavaScript')).toBeInTheDocument();
    });

    it('should display description', () => {
        renderWithState(
            <MemoryRouter>
                <CourseCard course={course} />
            </MemoryRouter>,
            { preloadedState }
        );

        expect(screen.getByText('testingdescription')).toBeInTheDocument();
    });

    it('should display duration in the correct format', () => {
        renderWithState(
            <MemoryRouter>
                <CourseCard course={course} />
            </MemoryRouter>,
            { preloadedState }
        );

        expect(screen.getByText(courseDuration)).toBeInTheDocument();
    });

    it('should display authors list', () => {
        renderWithState(
            <MemoryRouter>
                <CourseCard course={course} />
            </MemoryRouter>,
            { preloadedState }
        );

        expect(screen.getByText('Vasiliy Dobkin, Nicolas Kim')).toBeInTheDocument();
    });

    it('should display created date in the correct format', () => {
        renderWithState(
            <MemoryRouter>
                <CourseCard course={course} />
            </MemoryRouter>,
            { preloadedState }
        );

        expect(screen.getByText('08.03.2021')).toBeInTheDocument();
    });

    it('should delete course', () => {
        preloadedState.user = {
            role: 'admin'
        };
        renderWithState(
            <MemoryRouter>
                <CourseCard course={course} />
            </MemoryRouter>,
            { preloadedState }
        );

        const deleteCourse = screen.getByTestId('deleteCourse');
        fireEvent.click(deleteCourse);

        expect(screen.getByText('08.03.2021')).toBeInTheDocument();
    });
});
