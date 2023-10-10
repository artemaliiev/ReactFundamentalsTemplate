import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { screen, fireEvent } from "@testing-library/react";
import { renderWithState } from '../../../test/renderWithState';
import { mockedCoursesList } from '../../../constants';

import { Courses } from '../Courses';

const preloadedState = {
    // user: {
    //     name: 'mock name',
    //     token: 'test'
    // },
    courses: mockedCoursesList,
    // authors: mockedAuthorsList
};

describe('Cousrses', () => {
    it('should display amount of CourseCard equal length of courses array', () => {
        renderWithState(
            <MemoryRouter>
                <Courses />
            </MemoryRouter>,
            { preloadedState }
        );

        expect(screen.getAllByTestId('courseCard')).toHaveLength(2);
    });

    // it('CourseForm should be shown after a click on the "Add new course" button', () => {
    //     renderWithState(
    //         <MemoryRouter>
    //             <Courses />
    //         </MemoryRouter>,
    //         { preloadedState }
    //     );

    //     const addCourseButton = screen.getByTestId('addCourse');
    //     fireEvent.click(addCourseButton);

    //     expect(screen.getByText('Course edit/create page')).toBeInTheDocument();
    // });
});
