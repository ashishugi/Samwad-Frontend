import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  cursor: pointer;
`;

const lightTheme = {
  primary: "#f1f6fd", // Center Post
  secondPrimary: "#ffffff", // leftPost
  ternaryPrimary: "#f5f9fe", // Right Side Post
  icon: "#a974ff", // post left menu icons , Home,settings etc
  iconSecondary: "#a3b5e1", // post icon, heart , comment icons
  heading: "black", // heading of fields
  h: "#25396f",
  paragraph: "black",
  smallText: "#8a8b8f",
  buttonBackground: "",
  warning: "red",
  border: "#a3b5e1",
};
const darkTheme = {
  primary: "#16191e",
  secondPrimary: "#1d242e",
  ternaryPrimary: "",
  icon: "#a974ff",
  iconSecondary: "#a3b5e1",
  heading: "#fefefe",
  h: "#ffffff",
  paragraph: "white",
  smallText: "#8a8b8f",
  buttonBackground: "#417aff",
  warning: "",
  border: "#2d3035",
};
const Themes = {
  light: lightTheme,
  dark: darkTheme,
};

export { Button, Themes };
