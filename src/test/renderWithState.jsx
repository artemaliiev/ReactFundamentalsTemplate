import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import userSlice from '../store/slices/userSlice';
import coursesSlice from '../store/slices/coursesSlice';
import authorsSlice from '../store/slices/authorsSlice';

export const renderWithState = (
    ui,
    { preloadedState, ...renderOptions } = {}
) => {
    const store = configureStore({
        reducer: {
            user: userSlice,
            courses: coursesSlice,
            authors: authorsSlice,
        },
        preloadedState,
    });
    const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

    return render(ui, { wrapper: Wrapper, ...renderOptions });
};
