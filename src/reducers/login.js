import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  inProgress: false,
  user: {},
  error: null,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        inProgress: false,
        user: action.user,
      };
    case LOGIN_FAILED:
      return {
        isLoggedIn: false,
        inProgress: false,
        error: action.error,
      };
    default:
      return state;
  }
}
