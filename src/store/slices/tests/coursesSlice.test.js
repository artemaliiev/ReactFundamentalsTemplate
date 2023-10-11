import reducer, { setCourses, saveCourse, deleteCourse, updateCourse } from '../coursesSlice';

describe('coursesSlice', () => {
    it('should set courses', () => {
        const previousState = [];
        const finalState = [{
            id: 'someId',
            title: 'title',
        }];
        expect(reducer(previousState, setCourses(finalState))).toEqual(finalState);
    });

    it('should add courses', () => {
        const previousState = [{
            id: 'someId',
            title: 'title',
        }];
        const newCourse = [{
            id: 'someSecondId',
            title: 'second title',
        }];
        const finalState = [
            {
                id: 'someId',
                title: 'title',
            },
            {
                id: 'someSecondId',
                title: 'second title',
            }
        ]
        expect(reducer(previousState, saveCourse(newCourse))).toEqual(finalState);
    });

    it('should delete course', () => {
        const previousState = [
            {
                id: 'someId',
                title: 'title',
            },
            {
                id: 'someSecondId',
                title: 'second title',
            }
        ];
        const courseToDelete = 'someSecondId';
        const finalState = [{
            id: 'someId',
            title: 'title',
        }];
        expect(reducer(previousState, deleteCourse(courseToDelete))).toEqual(finalState);
    });

    it('should update course', () => {
        const previousState = [
            {
                id: 'someId',
                title: 'title',
            },
            {
                id: 'someSecondId',
                title: 'second title',
            }
        ];
        const courseToUpdate = {
            id: 'someSecondId',
            title: 'second title changed',
        };
        const finalState = [
            {
                id: 'someId',
                title: 'title',
            },
            {
                id: 'someSecondId',
                title: 'second title changed',
            }
        ];
        expect(reducer(previousState, updateCourse(courseToUpdate))).toEqual(finalState);
    });
});
