import { CHANGE_THEME } from "../actions/actionTypes";

const themeValue = "light";
export default function theme(state = themeValue, action) {
  switch (action.type) {
    case CHANGE_THEME:
      if (action.theme === "light") {
        return "dark";
      }
      return "light";
    default:
      return state;
  }
}
