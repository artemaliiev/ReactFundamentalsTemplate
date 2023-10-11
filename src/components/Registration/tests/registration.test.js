import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { screen, fireEvent } from "@testing-library/react";
import { renderWithState } from '../../../test/renderWithState';
import { createUser } from '../../../services';

import { Registration } from '../Registration';

const preloadedState = {};

jest.mock('../../../services', () => ({
    createUser: jest.fn().mockResolvedValue({
        successful: true,
        result: 'token',
        user: {
            name: 'name',
            email: 'email',
        }
    }),
}));

describe('Registration', () => {
    it('should change input name value', () => {
        renderWithState(
            <MemoryRouter>
                <Registration />
            </MemoryRouter>,
            { preloadedState }
        );

        const nameInput = screen.getByTestId('nameInput');
        fireEvent.change(nameInput, {target: {value: 'test'}});

        expect(screen.getByDisplayValue('test') === nameInput).toBe(true);
    });

    it('should display error while sumbit', () => {
        renderWithState(
            <MemoryRouter>
                <Registration />
            </MemoryRouter>,
            { preloadedState }
        );

        const registerBtn = screen.getByTestId('registerBtn');
        fireEvent.click(registerBtn);

        expect(screen.getByText(/Password is required./i)).toBeInTheDocument();
    });

    it('should display general error while sumbit', () => {
        renderWithState(
            <MemoryRouter>
                <Registration />
            </MemoryRouter>,
            { preloadedState }
        );
        const nameInput = screen.getByTestId('nameInput');
        fireEvent.change(nameInput, {target: {value: 'test'}});
        const emailInput = screen.getByTestId('emailInput');
        fireEvent.change(emailInput, {target: {value: 'test'}});
        const passwordInput = screen.getByTestId('passwordInput');
        fireEvent.change(passwordInput, {target: {value: 'test'}});

        const registerBtn = screen.getByTestId('registerBtn');
        fireEvent.click(registerBtn);

        expect(createUser).toBeCalledTimes(1);
        expect(screen.getByText(/Default error/i)).toBeInTheDocument();
    });
});
