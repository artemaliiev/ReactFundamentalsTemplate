import React from "react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { screen } from "@testing-library/react";
import { renderWithState } from '../../../test/renderWithState';
import { mockedCoursesList, mockedAuthorsList } from '../../../constants';

import { CourseInfo } from '../CourseInfo';

const preloadedState = {
    user: {
        role: 'admin'
    },
    courses: mockedCoursesList,
    authors: mockedAuthorsList,
    // authors: mockedAuthorsList
};

describe('CourseInfo', () => {
    it('should display course title', () => {
        renderWithState(
            <MemoryRouter initialEntries={["/courses/de5aaa59-90f5-4dbc-b8a9-aaf205c551ba"]}>
                <Routes>
                    <Route
						path="/courses/:courseId"
						element={
							<CourseInfo/>
						}
					/>
                </Routes>
            </MemoryRouter>,
            { preloadedState }
        );

        expect(screen.getByText('JavaScript')).toBeInTheDocument();
    });

    it('should display course Created at in right format', () => {
        renderWithState(
            <MemoryRouter initialEntries={["/courses/de5aaa59-90f5-4dbc-b8a9-aaf205c551ba"]}>
                <Routes>
                    <Route
						path="/courses/:courseId"
						element={
							<CourseInfo/>
						}
					/>
                </Routes>
            </MemoryRouter>,
            { preloadedState }
        );

        expect(screen.getByText('08.03.2021')).toBeInTheDocument();
    });

    it('should display course authors', () => {
        renderWithState(
            <MemoryRouter initialEntries={["/courses/de5aaa59-90f5-4dbc-b8a9-aaf205c551ba"]}>
                <Routes>
                    <Route
						path="/courses/:courseId"
						element={
							<CourseInfo/>
						}
					/>
                </Routes>
            </MemoryRouter>,
            { preloadedState }
        );

        expect(screen.getAllByTestId('courseAuthors').length).toBeGreaterThanOrEqual(2);
    });

    it('shouldn\'t display course', () => {
        renderWithState(
            <MemoryRouter initialEntries={["/courses/testid"]}>
                <Routes>
                    <Route
						path="/courses/:courseId"
						element={
							<CourseInfo/>
						}
					/>
                </Routes>
            </MemoryRouter>,
            { preloadedState }
        );

        expect(screen.getByTestId('emptyCourseInfo')).toBeInTheDocument();
    });
});
