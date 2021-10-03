import React from "react";

// components
import Form from "../Form/Form";
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
    return (
      <Wrapper>
        <div className="left">
          <img src={pic} alt="register" />
        </div>
        <div className="right">
          <div className="login">
            <div className="account">Already have an account?</div>
            <a href="#" className="login-btn">
              Login
            </a>
          </div>
          <Form />
        </div>
      </Wrapper>
    );
  }
}

export default Register;
