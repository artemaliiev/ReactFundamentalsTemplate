export const createUser = async (data) => {
  const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
  });

  const result = await response.json();

  return result;
};

export const login = async (data) => {
  const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
  });

  const result = await response.json();

  return result;
};

export const getCourses = async () => {
  // write your code here
};

export const getAuthors = async () => {
  // write your code here
};

export const getCurrentUser = async () => {
  // write your code here
};

export const updateCourse = async () => {
  // write your code here
};

export const logout = async () => {
  // write your code here
};

export const deleteCourse = async () => {
  // write your code here
};

export const createCourse = async () => {
  // write your code here
};

export const createAuthor = async () => {
  // write your code here
};
