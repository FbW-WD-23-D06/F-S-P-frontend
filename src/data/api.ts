const developmentMode = process.env.NODE_ENV === "development";
console.log("🚀 ~ developmentMode:", developmentMode)
const productionMode = process.env.NODE_ENV === "production";
console.log("🚀 ~ productionMode:", productionMode)

console.log('process.env.NODE_ENV:',process.env.NODE_ENV);

const BASE_URL = developmentMode ? "http://localhost:8888" : "https://post-master-server.onrender.com/";

const endpoints = {
  getAllPosts: `${BASE_URL}/posts`,
  register: `${BASE_URL}/users/register`,
  login: `${BASE_URL}/users/login`,
  logout: `${BASE_URL}/users/logout`,
  getAuthUserData: `${BASE_URL}/users/auth-user-data`,
  uploadAvatarImg: `${BASE_URL}/users/upload-avatar`,
};

export { BASE_URL, endpoints, developmentMode, productionMode};
