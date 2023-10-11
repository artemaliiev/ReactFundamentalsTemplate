import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { screen, fireEvent } from "@testing-library/react";
import { renderWithState } from '../../../../../test/renderWithState';
// import { login } from '../../../../../services';

import { CreateAuhtor } from '../CreateAuhtor';

const preloadedState = {};

// jest.mock('../../../services', () => ({
//     login: jest.fn().mockResolvedValue({
//         successful: true,
//         result: 'token',
//         user: {
//             name: 'name',
//             email: 'email',
//         }
//     }),
// }));

describe('CreateAuthor', () => {
    it('should change input name value', () => {
        renderWithState(
            <MemoryRouter>
                <CreateAuhtor />
            </MemoryRouter>,
            { preloadedState }
        );

        screen.debug();

        // const createAuthorInput = screen.getByTestId('createAuthorInput');
        // fireEvent.change(createAuthorInput, {target: {value: 'test'}});

        // expect(screen.getByDisplayValue('test') === createAuthorInput).toBe(true);
    });
});
