import React from "react";
import { screen } from "@testing-library/react";
import { renderWithState } from '../../../test/renderWithState';

import { Header } from '../Header';

const preloadedState = {
    user: { name: "mock name" },
};

describe('Header', () => {
    it('Header should have logo', () => {
        renderWithState(<Header />, { preloadedState });

        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('Header should display user name', async () => {
        renderWithState(<Header />, { preloadedState });

        const userName = await screen.findByText("mock name");

        expect(userName).toBeTruthy();
    });
});
