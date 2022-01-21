const API_ROOT = `http://localhost:8001/api/v1`;
// by making the URLS as function we are making it dynamic , so that we can take it dynamically
export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
};
