import { getAuthors, createAuthor } from './../../services';
import { setAuthors, saveAuthor } from './../slices/authorsSlice';

export const createAuthorThunk = author => {
    return async dispatch => {
        const authors = await createAuthor(author)
            .then(response => response.result);

        dispatch(saveAuthor(authors));
    };
};

export const getAuthorsThunk = () => {
    return async dispatch => {
        const authors = await getAuthors()
            .then(response => response.result);

        dispatch(setAuthors(authors));
    };
};
