import React from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Button } from "./style";
import Login from "../Login/Login";
import Profile from "../profile/profile";
import Posts from "../Posts/Posts";
import Register from "../Register/Register";
import { authUser } from "../../actions/login";
import _404 from "../_404/_404";

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedIn, path, component: Component } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let loginDetails = localStorage.getItem("loginDetails");
    if (loginDetails) {
      console.log("login verified App.js");
      loginDetails = JSON.parse(loginDetails);
      this.props.dispatch(authUser(loginDetails));
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route exact path="/signup" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          {/* <PrivateRoute
            path="/settings"
            Component={Profile}
            isLoggedIn={this.props.login.isLoggedIn}
          /> */}
          <Route exact path="**">
            <_404 />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(App);
