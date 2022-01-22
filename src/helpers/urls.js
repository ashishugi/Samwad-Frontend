const API_ROOT = `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/api/v1`;
// by making the URLS as function we are making it dynamic , so that we can take it dynamically
export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
};
