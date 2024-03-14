const BASE_URL = "http://localhost:8888";

const endpoints = {
  getAllPosts: `${BASE_URL}/posts`,
  register: `${BASE_URL}/users/register`,
  login: `${BASE_URL}/users/login`,
  getAuthUserData: `${BASE_URL}/users/auth-user-data`,
};

export { BASE_URL, endpoints };
