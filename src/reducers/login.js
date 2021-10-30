import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  AUTHENTICATE_USER,
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
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        inProgress: false,
        user: action.user,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        inProgress: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    default:
      return state;
  }
}
