import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

// components
import Form from "../../components/Form/Form";
import { Wrapper } from "./style";
import pic from "../../assets/images/register.svg";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      email: null,
      password: null,
      confirmPassword: null,
    };
  }
  render() {
    const { isLoggedIn } = this.props.login;
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <Wrapper>
        <div className="left">
          <img src={pic} alt="register" />
        </div>
        <div className="right">
          <div className="login">
            <div className="account">Already have an account?</div>
            <Link to="/login" className="login-btn">
              Login
            </Link>
          </div>
          <Form />
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
export default connect(mapStateToProps)(Register);
