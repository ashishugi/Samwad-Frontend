import axios from "axios";

import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILED } from "./actionTypes";

import { APIUrls } from "../helpers/urls";

export const signUpStart = () => {
  return {
    type: SIGNUP_START,
  };
};

export const signUpSuccess = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    user: user,
  };
};

export const signUpFailed = (error) => {
  return {
    type: SIGNUP_FAILED,
    error: error,
  };
};

export const signUp = (userName, email, password) => {
  return (dispatch) => {
    dispatch(signUpStart());
    const url = APIUrls.signup();
    const body = JSON.stringify({
      name: userName,
      email: email,
      password: password,
    });
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log("@frontend signup");
          console.log(res);
          dispatch(signUpSuccess(res.user));
          return;
        }
        console.log("@frontend signup");
        console.log(res);
        dispatch(signUpFailed(res.error));
      })
      .catch((err) => {
        console.log("@frontend signup");
        console.log(err);
        dispatch(signUpFailed(err));
      });
  };
};
