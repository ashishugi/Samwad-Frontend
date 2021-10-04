import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./store/index";
import { Provider } from "react-redux";

import "./index.css";
import App from "./pages/App/App";
import Register from "./pages/Register/Register";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App /> */}
      <Register />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
