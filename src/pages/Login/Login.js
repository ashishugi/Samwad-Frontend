import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Wrapper from "./style";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import pic1 from "../../assets/images/Login/pic1.svg";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import PasswordInputField from "../../components/PasswordInputField/PasswordInputField";

//Actions
import { login } from "../../actions/login";
import { Link } from "react-router-dom";

const Login = (props) => {
  const { inProgress, error } = props.login;
  const [inputField, setInput] = useState({
    email: null,
    password: null,
  });
  const handleSubmit = (e) => {
    console.log(
      "handlesubmit is called",
      inputField.email,
      inputField.password
    );
    if (!inputField.email || !inputField.password) {
      console.log("input is empty");
      e.preventDefault();
      return;
    }
    props.dispatch(login(inputField.email, inputField.password));
    e.preventDefault();
  };

  const { from } = props.location.state || { from: { pathname: "/" } };
  const { isLoggedIn } = props.login;
  if (isLoggedIn) {
    console.log("here");
    return <Redirect to={from} />;
  }
  return (
    <>
      <Wrapper>
        <div className="main">
          <div className="center">
            <div className="left">
              <div className="left-item">
                <div className="top">
                  <div className="para" style={{ width: "100%" }}>
                    <p>
                      Don't have account ?
                      <span
                        style={{
                          color: "#51b26d",
                          marginLeft: ".5rem",
                        }}
                      >
                        <Link
                          to="/signup"
                          style={{ textDecoration: "none", color: "#51b26d" }}
                        >
                          Create
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="middle">
                  <div className="heading">
                    <h2>Welcome To Samwad</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur animi i klk
                    </p>
                  </div>
                  <div className="input-frm">
                    <form>
                      {/* ---------startform--------------------------- */}
                      <TextField
                        onChange={(e) =>
                          setInput((prevState) => ({
                            ...prevState,
                            email: e.target.value,
                          }))
                        }
                        name="email"
                        style={{ marginTop: "1.2rem" }}
                        id="outlined-basic"
                        label="email"
                        variant="outlined"
                        fullWidth
                        required
                        value={inputField.email}
                        className="text-feild"
                      />
                      <TextField
                        className="text-feild"
                        name="password"
                        onChange={(e) =>
                          setInput((prevState) => ({
                            ...prevState,
                            password: e.target.value,
                          }))
                        }
                        style={{ marginTop: "1.2rem" }}
                        id="outlined-password-input"
                        label="password"
                        variant="outlined"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        required
                        value={inputField.password}
                      />
                      <Button
                        className="text-feild"
                        style={{
                          background: "#51b26d",
                          marginTop: "2rem",
                          color: "white",
                          cursor: !inProgress ? "" : "not-allowed",
                        }}
                        fullWidth
                        type="submit"
                        color="white"
                        varient="contained"
                        onClick={(e) => handleSubmit(e)}
                        disabled={inProgress ? true : false}
                      >
                        {inProgress ? (
                          <Box sx={{ display: "flex" }}>
                            <CircularProgress
                              style={{ color: "white" }}
                              size={25.1}
                            />
                          </Box>
                        ) : (
                          " Submit"
                        )}
                      </Button>
                      <br />
                      <h4>{error ? error : ""}</h4>
                      {/* --------------end form------------------------ */}
                    </form>
                  </div>

                  <div className="horizontal-line">
                    <div className="first-line">
                      <hr />
                    </div>
                    <div className="or"> OR SIGNUP WITH</div>
                    <div className="last-line">
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div
                    className="textfield"
                    style={{
                      background: "rgba(146,227,169,0.3)",
                      color: "#4da2f9",
                      outline: "1px solid rgba(0,0,0,0.2)",
                      width: "4.2rem",
                      height: "2rem",
                      padding: ".2rem 0rem 0 1.2rem",
                    }}
                  >
                    <GoogleIcon />
                  </div>
                  <div
                    className="textfield"
                    style={{
                      background: "rgba(146,227,169,0.3)",
                      color: "#4da2f9",
                      outline: "1px solid rgba(0,0,0,0.2)",
                      width: "4.2rem",
                      height: "2rem",
                      padding: ".2rem 0rem 0 1.2rem",
                    }}
                  >
                    <FacebookOutlinedIcon />
                  </div>
                  <div
                    className="textfield"
                    style={{
                      background: "rgba(146,227,169,0.3)",
                      color: "#4da2f9",
                      outline: "1px solid rgba(0,0,0,0.2)",
                      width: "4.2rem",
                      height: "2rem",
                      padding: ".2rem 0rem 0 1.2rem",
                    }}
                  >
                    <AppleIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={pic1} alt="login" />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(Login);
