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

export const getCourses = () => {
  return fetch('http://localhost:4000/courses/all', {
    "headers": {"Content-Type": "application/json"},
    "method": "GET"
  }).then(resoponse => resoponse.json());
};

export const getAuthors = async () => {
  return fetch('http://localhost:4000/authors/all', {
    "headers": {"Content-Type": "application/json"},
    "method": "GET"
  }).then(resoponse => resoponse.json());
};

export const getCurrentUser = async (loginToken) => {
  return fetch('http://localhost:4000/users/me', {
    "headers": {
      "Content-Type": "application/json",
      "Authorization": loginToken
    },
    "method": "GET"
  }).then(resoponse => resoponse.json());
};

export const updateCourse = async (courseId, data) => {
  return fetch(`http://localhost:4000/courses/${courseId}`, {
    "headers": {
      "Content-Type": "application/json"
    },
    "method": "PUT",
    "body": JSON.stringify(data),
  }).then(resoponse => resoponse.json());
};

export const logout = async () => {
  return fetch('http://localhost:4000/logout', {
    "headers": {
      "Content-Type": "application/json"
    },
    "method": "DELETE"
  }).then(resoponse => resoponse.json());
};

export const deleteCourse = async (courseId) => {
  return fetch(`http://localhost:4000/courses/${courseId}`, {
    "headers": {
      "Content-Type": "application/json"
    },
    "method": "DELETE"
  }).then(resoponse => resoponse.json());
};

export const createCourse = async (data) => {
  return fetch('http://localhost:4000/courses/add', {
    "headers": {
      "Content-Type": "application/json"
    },
    "method": "POST",
    "body": JSON.stringify(data),
  }).then(resoponse => resoponse.json());
};

export const createAuthor = async (data) => {
  return fetch('http://localhost:4000/authors/add', {
    "headers": {
      "Content-Type": "application/json"
    },
    "method": "POST",
    "body": JSON.stringify(data),
  }).then(resoponse => resoponse.json());
};
