import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { Wrapper, notLoggedWrapper } from "./styled";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";

class _404 extends Component {
  render() {
    const { isLoggedIn } = this.props.login;
    if (!isLoggedIn) {
      return (
        <notLoggedWrapper>
          <div className="page-donot-exist">
            <h1>Sorry :( Page Does not Exist</h1>
          </div>
        </notLoggedWrapper>
      );
    }
    return (
      <Wrapper>
        <div>
          <LeftNavbar />
        </div>
        <div className="page-donot-exist">
          <h1>Sorry :( Page Does not Exist</h1>
        </div>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(_404);
