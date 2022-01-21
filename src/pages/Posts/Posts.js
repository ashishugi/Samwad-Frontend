import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
//components
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import PostRight from "./components/PostRight/PostRight";
import PostCenter from "./components/PostCenter/PostCenter";

import { Wrapper } from "./style";

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isLoggedIn } = this.props.login;
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <Wrapper>
        <div className="post-left">
          <LeftNavbar />
        </div>
        <div className="post-center">
          <PostCenter />
        </div>
        <div className="post-right">
          <PostRight />
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
export default connect(mapStateToProps)(Posts);
