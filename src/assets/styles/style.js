import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const size = {
  xs: `320px`,
  sm: `768px`,
  lg: `1200px`,
};
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};

const lightModeColor = {
  primary: "#ffffff",
  secondary: "#ae7dff",
  postLeftBackground: "#ffffff",
  postCenterBackground: "#f2f8fe",
  postRightBackgournd: "#f2f5ff",
  primaryText: "#000007",
  secondaryText: "#ffffff",
  grayText: "#808080",
};
const DarkModeColor = {
  primary: "black",
  secondary: "#ae7dff",
  postLeftBackground: "#ffffff",
  postCenterBackground: "#f2f8fe",
  postRightBackgournd: "#f2f5ff",
  primaryText: "#000007",
  secondaryText: "#ffffff",
  grayText: "#808080",
};
let currtheme = false;
const themeApp = (props) => {
  currtheme = props.theme;
};
const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};
connect(mapStateToProps)(themeApp);
export { size, device, lightModeColor, DarkModeColor, currtheme };
