import {
    getCourses,
    createUser,
    login,
    logout,
    getAuthors,
    createCourse,
    createAuthor,
    getCurrentUser,
    deleteCourse,
    updateCourse
} from '../services';

describe('services', () => {
    it('should get list of courses', async () => {

        const courses = await getCourses();

        expect(courses.result.length).toBeGreaterThanOrEqual(1);
    });

    it('should createUser', async () => {
        const userData = {
            name: 'bob',
            email: 'bob@bob.com',
            password: 'bob@bob.com'
        }

        const user = await createUser(userData);

        expect(user.successful === true).toBeTruthy();
    });

    it('should login User', async () => {
        const userData = {
            name: 'bobb',
            email: 'bobb@bob.com',
            password: 'bobb@bob.com'
        }

        await createUser(userData);

        const result = await login(userData);

        expect(result.successful === true).toBeTruthy();
    });

    it('should logout User', async () => {
        const userData = {
            name: 'bobbb',
            email: 'bobbb@bob.com',
            password: 'bobbb@bob.com'
        }

        await createUser(userData);

        await login(userData);

        const result = await logout();

        expect(result.successful === true).toBeTruthy();
    });

    it('should get list of authors', async () => {

        const authors = await getAuthors();

        expect(authors.result.length).toBeGreaterThanOrEqual(1);
    });

    it('should create Course', async () => {
        const course = {
            title: 'title',
            decription: 'description',
            duration: 100,
            creationDate: '10/10/2020',
            authors: ['id1', 'id2']
        };

        const result = await createCourse(course);

        expect(result.successful === true).toBeTruthy();
    });

    it('should create Author', async () => {
        const author = {
            name: 'test name',
        };

        const result = await createAuthor(author);

        expect(result.successful === true).toBeTruthy();
    });

    it('should get Current User', async () => {
        const userData = {
            name: 'bob',
            email: 'bob@bob.com',
            password: 'bob@bob.com'
        }

        const user = await login(userData);

        expect(user.successful === true).toBeTruthy();
        const result = await getCurrentUser(user.result);

        expect(result.successful === true).toBeTruthy();
    });

    it('should delete course', async () => {

        const courses = await getCourses();

        const result = await deleteCourse(courses.result[0].id);

        expect(result.successful === true).toBeTruthy();
    });

    it('should update course', async () => {
        const updatedCourse = {
            title: 'title',
            decription: 'description',
            duration: 100,
            creationDate: '10/10/2020',
            authors: ['id1', 'id2']
        };

        const courses = await getCourses();

        const result = await updateCourse(courses.result[0].id, updatedCourse);

        expect(result.successful === true).toBeTruthy();
    });
});