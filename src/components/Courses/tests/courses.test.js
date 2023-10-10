import React from "react";
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithState } from '../../../test/renderWithState';
import { mockedCoursesList } from '../../../constants';

import { Courses } from '../Courses';

const preloadedState = {
    user: {
        role: 'admin'
    },
    courses: mockedCoursesList,
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

    it('should show empty page', () => {
        preloadedState.courses = [];
        renderWithState(
            <MemoryRouter>
                <Courses />
            </MemoryRouter>,
            { preloadedState }
        );

        const addCourseButton = screen.getByTestId('addCourse');
        fireEvent.click(addCourseButton);

        expect(screen.getByText('Your List Is Empty')).toBeInTheDocument();
    });

    // it('CourseForm should be shown after a click on the "Add new course" button', () => {
    //     renderWithState(
    //         <BrowserRouter>
    //             <Courses />
    //         </BrowserRouter>,
    //         { preloadedState }
    //     );

    //     const addCourseButton = screen.getByTestId('addCourse');
    //     // const addCourseButton = screen.getByText('Add new');
    //     userEvent.click(addCourseButton);

    //     // expect(navigate).toHaveBeenCalledTimes(1)
    //     // expect(navigate).toHaveBeenCalledWith('/courses/add')

    //     expect(screen.getByText('Course edit/create page')).toBeInTheDocument();
    // });
});
