import reducer, { setUserData, removeUserData } from '../userSlice';

describe('userSlice', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
                isAuth: false,
                name: '',
                email: '',
                token: '',
                role: ''
        })
    });

    it('should add user data', () => {
        const previousState = []
        const userData = {
            isAuth: true,
            name: 'name',
            email: 'email',
            token: 'token',
            role: 'admin'
        }
        expect(reducer(previousState, setUserData(userData))).toEqual(userData);
    });

    it('should remove user data', () => {
        const previousState = {
            isAuth: true,
            name: 'name',
            email: 'email',
            token: 'token',
            role: 'admin'
        };
        const initialState = {
            isAuth: false,
            name: '',
            email: '',
            token: '',
            role: ''
        };
        expect(reducer(previousState, removeUserData(previousState))).toEqual(initialState);
    })
});
