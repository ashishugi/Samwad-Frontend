import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  inProcess: false,
  user: {},
  error: null,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        inProcess: true,
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        inProcess: false,
        user: action.user,
      };
    case LOGIN_FAILED:
      return {
          isLoggedIn:false,
          
      };
    default:
      return state;
  }
}
