import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  AUTHENTICATE_USER,
} from "./actionTypes";

export const authUser = (user) => {
  return {
    type: AUTHENTICATE_USER,
    user: user,
  };
};

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

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    // call the login api here , in api and backednd verify if the credentials are correct or not
    // and based on that given some response.

    // using static as of now
    if (email === "a@a.com" && password === "123456") {
      setTimeout(() => {
        console.log("set time out 5 sec");
        const user = {
          email,
          password,
          _id: 123456,
          name: "Aman",
        };
        localStorage.setItem("loginDetails", JSON.stringify(user));
        dispatch(loginSuccess({ email, password }));
      }, 2000);
      return;
    }
    if (email !== "a@a.com") {
      dispatch(loginFailed("Login failed : email do not match"));
    }
    dispatch(loginFailed("Login failed : password do not match"));
  };
};
