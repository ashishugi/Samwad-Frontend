import axios from 'axios';

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  AUTHENTICATE_USER,
  LOGOUT,
} from "./actionTypes";

import { APIUrls } from "../helpers/urls";

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
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
    const url = APIUrls.login();
    console.log(url);
    const body =JSON.stringify({
      email: email,
      password: password
    });
    fetch(url,  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
    .then((response) => response.json())
    .then((res)=>{
      if(res.success) { 
        localStorage.setItem('token', res.token);
        dispatch(loginSuccess(res.token));
        return;
      }
      dispatch(loginFailed(res.message));
    })
    .catch((err)=>{
      console.log('got error', err);
      dispatch(loginFailed(err));
    })
  };
};
