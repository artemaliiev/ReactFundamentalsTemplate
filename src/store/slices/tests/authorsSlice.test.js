import reducer, { setAuthors, saveAuthor } from '../authorsSlice';

describe('authorsSlice', () => {
    it('should add user data', () => {
        const previousState = [];
        const finalState = [{
            id: 'someId',
            name: 'name',
        }];
        expect(reducer(previousState, setAuthors(finalState))).toEqual(finalState);
    });

    it('should remove user data', () => {
        const previousState = [{
            id: 'someId',
            name: 'name',
        }];
        const newAuthor = [{
            id: 'someSecondId',
            name: 'second name',
        }];
        const finalState = [
            {
                id: 'someId',
                name: 'name',
            },
            {
                id: 'someSecondId',
                name: 'second name',
            }
        ]
        expect(reducer(previousState, saveAuthor(newAuthor))).toEqual(finalState);
    })
});
