const developmentMode = process.env.NODE_ENV === "development";
const productionMode = process.env.NODE_ENV === "production";

const BASE_URL = developmentMode
  ? "http://localhost:8888"
  : "https://post-master-server.onrender.com/";

const endpoints = {
  getAllPosts: `${BASE_URL}/posts`,
  register: `${BASE_URL}/users/register`,
  login: `${BASE_URL}/users/login`,
  logout: `${BASE_URL}/users/logout`,
  getAuthUserData: `${BASE_URL}/users/auth-user-data`,
};

export { BASE_URL, endpoints, developmentMode, productionMode };
