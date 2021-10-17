import React from "react";

import { Wrapper } from "./style";

//material
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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
      open: false,
      vertical: "top",
      horizontal: "center",
      checkboxLabel:
        "By creating an account, you agree to the Terms of Service and conditions, and Privacy Policy",
      error: null,
      checked: false,
    };
  }

  handleClick = (e) => {
    this.setState({
      open: true,
    });
    e.preventDefault();
  };
  handleClose = (e) => {
    this.setState({
      open: false,
    });
    e.preventDefault();
  };
  onChangePassword = (password) => {
    this.setState({
      password: password,
    });
  };
  onChangeConfirmPassword = (password) => {
    this.setState({
      confirmPassword: password,
    });
  };
  validateEmail = (email) => {
    
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  handleSubmit = (e) => {
    const { userName, email, password, confirmPassword, checked } = this.state;
    this.setState({
      error: null,
    });
    if (
      userName === null ||
      email === null ||
      password === null ||
      confirmPassword === null
    ) {
      this.setState({
        error: "fields are empty",
      });
    } else if (!this.validateEmail(email)) {
      this.setState({
        error: "email not valid",
      });
    } else if (password !== confirmPassword) {
      this.setState({
        error: "password and confirm password do not match",
      });
    } else if (checked === false) {
      this.setState({
        error: "agree the terms and conditions",
      });
    }
    if (this.state.error === null) {
      //
    } else {
      console.log("error :", this.state.error);
    }
    e.preventDefault();
  };

  action() {
    return (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={this.handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  }
  render() {
    console.log(this.state.checked);
    const { vertical, horizontal } = this.state;
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
                required
              />
            </div>
          </div>
          <div className="password">
            <PasswordInputField
              password={this.state.password}
              name="Password"
              onChange={this.onChangePassword}
            />
            <PasswordInputField
              password={this.state.confirmPassword}
              name="Confirm"
              onChange={this.onChangeConfirmPassword}
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
              onClick={(e) => {
                this.handleSubmit(e);
                this.handleClick(e);
              }}
              disabled={!this.state.checked}
              style={
                !this.state.checked
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              Create account
            </button>
            {this.state.error === null ? (
              ""
            ) : (
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={this.state.open}
                onClose={this.handleClose}
                message={this.state.error}
                key={this.state.vertical + this.state.horizontal}
                action={this.action()}
              />
            )}
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
