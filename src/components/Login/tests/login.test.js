import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { screen, fireEvent } from "@testing-library/react";
import { renderWithState } from '../../../test/renderWithState';
import { login } from '../../../services';

import { Login } from '../Login';

const preloadedState = {};

jest.mock('../../../services', () => ({
    login: jest.fn().mockResolvedValue({
        successful: true,
        result: 'token',
        user: {
            name: 'name',
            email: 'email',
        }
    }),
}));

describe('Login', () => {
    it('should change input name value', () => {
        renderWithState(
            <MemoryRouter>
                <Login />
            </MemoryRouter>,
            { preloadedState }
        );

        const emailInput = screen.getByTestId('emailInput');
        fireEvent.change(emailInput, {target: {value: 'test'}});

        expect(screen.getByDisplayValue('test') === emailInput).toBe(true);
    });

    it('should change input password value', () => {
        renderWithState(
            <MemoryRouter>
                <Login />
            </MemoryRouter>,
            { preloadedState }
        );

        const passwordInput = screen.getByTestId('passwordInput');
        fireEvent.change(passwordInput, {target: {value: 'test'}});

        expect(screen.getByDisplayValue('test') === passwordInput).toBe(true);
    });

    it('should display error while sumbit', () => {
        renderWithState(
            <MemoryRouter>
                <Login />
            </MemoryRouter>,
            { preloadedState }
        );

        const loginBtn = screen.getByTestId('loginBtn');
        fireEvent.click(loginBtn);

        expect(screen.getByText(/Password is required./i)).toBeInTheDocument();
    });

    it('should display general error while sumbit', async () => {
        renderWithState(
            <MemoryRouter>
                <Login />
            </MemoryRouter>,
            { preloadedState }
        );

        const emailInput = screen.getByTestId('emailInput');
        fireEvent.change(emailInput, {target: {value: 'test'}});
        const passwordInput = screen.getByTestId('passwordInput');
        fireEvent.change(passwordInput, {target: {value: 'test'}});
        const loginBtn = screen.getByTestId('loginBtn');
        fireEvent.click(loginBtn);

        expect(login).toBeCalledTimes(1);
        expect(screen.getByText(/Default error/i)).toBeInTheDocument();
    });
});
