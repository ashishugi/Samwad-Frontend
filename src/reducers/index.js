import { combineReducers } from "redux";
import login from "./login";
import signUp from "./signup";
import theme from "./theme";
export default combineReducers({
  login,
  signUp,
  theme,
});
