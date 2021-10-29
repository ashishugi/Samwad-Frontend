import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionTypes";

export const loginStart = () => {
  return {
    type: LOGIN_START,
  };
};
export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
};
export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    error: error,
  };
};
