import { combineReducers } from "redux";
import login from "./login";
import theme from "./theme";
export default combineReducers({
  login,
  theme,
});
