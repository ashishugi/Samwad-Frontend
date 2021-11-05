import { CHANGE_THEME } from "./actionTypes";

// theme => true ->Dark , false -> light
export const changeTheme = (prevTheme) => {
  return {
    type: CHANGE_THEME,
    theme: prevTheme,
  };
};
