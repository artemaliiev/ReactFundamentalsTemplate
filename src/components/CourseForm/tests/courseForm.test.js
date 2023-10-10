import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { screen, fireEvent } from "@testing-library/react";
import { renderWithState } from '../../../test/renderWithState';
import { mockedCoursesList, mockedAuthorsList } from '../../../constants';

import { CourseForm } from '../CourseForm';

const preloadedState = {
    // user: {
    //     name: 'mock name',
    //     token: 'test'
    // },
    courses: mockedCoursesList,
    authors: mockedAuthorsList,
};

const mockedCreateAuthor = jest.fn();

describe('CourseForm', () => {
    it('should show authors lists (all and course authors)', () => {
        renderWithState(
            <MemoryRouter>
                <CourseForm />
            </MemoryRouter>,
            { preloadedState }
        );
        expect(screen.getAllByTestId('authorItem')).toHaveLength(4);
    });

    it('"Add author" button click should add an author to the course authors list', () => {
        renderWithState(
            <MemoryRouter>
                <CourseForm createAuthor={mockedCreateAuthor}/>
            </MemoryRouter>,
            { preloadedState }
        );

        const addAuthorButton = screen.getAllByTestId('addAuthor');
        fireEvent.click(addAuthorButton[0]);

        expect(screen.getAllByTestId('selectedAuthor').length).toBeGreaterThanOrEqual(1);
    });

    // it('"Create author" button click should call dispatch', () => {
    //     renderWithState(
    //         <MemoryRouter>
    //             <CourseForm createAuthor={mockedCreateAuthor}/>
    //         </MemoryRouter>,
    //         { preloadedState }
    //     );

    //     const createAuthorInput = screen.getByTestId('createAuthorInput');
    //     const createAuthorButton = screen.getByTestId('createAuthorButton');
    //     fireEvent.change(createAuthorInput, {target: {value: 'test author'}});
    //     fireEvent.click(createAuthorButton);

    //     expect(screen.getByText('test author')).toBeInTheDocument();
    // });

    it('"Delete author" button click should delete an author from the course list', () => {
        renderWithState(
            <MemoryRouter>
                <CourseForm createAuthor={mockedCreateAuthor}/>
            </MemoryRouter>,
            { preloadedState }
        );

        const addAuthorButton = screen.getAllByTestId('addAuthor');
        fireEvent.click(addAuthorButton[0]);

        const deleteCourseAuthor = screen.getAllByTestId('deleteCourseAuthor');
        fireEvent.click(deleteCourseAuthor[0]);

        expect(screen.queryByTestId('selectedAuthor')).not.toBeInTheDocument();
    });
});
