import React from "react";

import { Wrapper } from "./style";

//material
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import PasswordInputField from "../PasswordInputField/PasswordInputField";
import LoginWithOtherButton from "../LoginWithOtherButton/LoginWithOtherButton";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      email: null,
      password: null,
      confirmPassword: null,
      checkboxLabel:
        "By creating an account, you agree to the Terms of Service and conditions, and Privacy Policy",
      error: null,
      checked: false,
    };
  }

  handleSubmit = (e) => {
    const { userName, email, password, confirmPassword, checked } = this.state;
    if (userName || email || password || confirmPassword) {
      this.setState({
        error: "fields are empty",
      });
    }
    if (password !== confirmPassword) {
      this.setState({
        error: "password and confirm password do not match",
      });
    }
    if (checked === false) {
      this.setState({
        error: "agree the terms and conditions",
      });
    }
    if (this.state.error === null) {
      console.log("successful ", this.state);
    } else {
      console.log("error :", this.state.error);
    }
    e.preventDefault();
  };
  render() {
    console.log(this.state.checked);
    return (
      <Wrapper>
        <h1 className="heading">Create account</h1>
        <form>
          <div className="input-field">
            <div>
              <label>Username</label>
            </div>
            <div>
              <input
                type="text"
                value={this.state.userName}
                onChange={(e) => this.setState({ userName: e.target.value })}
              />
            </div>
          </div>
          <div className="input-field">
            <div>
              <label>Email</label>
            </div>
            <div>
              <input
                type="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
          </div>
          <div className="password">
            <PasswordInputField
              password={this.state.password}
              name="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <PasswordInputField
              password={this.state.confirmPassword}
              name="Confirm"
              value={this.state.confirmPassword}
              onChange={(e) =>
                this.setState({ confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="checkbox">
            <FormGroup>
              <FormControlLabel
                className="checkbox-label"
                control={<Checkbox />}
                label={this.state.checkboxLabel}
                onChange={(e) =>
                  this.setState({ checked: !this.state.checked })
                }
              />
            </FormGroup>
          </div>
          <div className="button">
            <button
              onClick={(e) => this.handleSubmit(e)}
              disabled={!this.state.checked}
              style={
                !this.state.checked
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              Create account
            </button>
          </div>
          <div className="horizontal-line">
            <div className="first-line">
              <hr />
            </div>
            <div className="or">or</div>
            <div className="last-line">
              <hr />
            </div>
          </div>
          <div className="login-with-other">
            <LoginWithOtherButton name="some name" icon="google" />
            <LoginWithOtherButton name="some name" icon="facebook" />
          </div>
        </form>
      </Wrapper>
    );
  }
}

export default Form;
