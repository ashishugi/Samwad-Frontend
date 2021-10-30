import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import Wrapper from "./style";
// import nature from "../../assets/images/profile/nature.jpg"
import lifestyle from "../../assets/images/profile/lifestyle.jpg";
import avtaar from "../../assets/images/profile/avtaar.png";
const Profile = (props) => {
  const { isLoggedIn } = props.login;
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Wrapper>
        <div className="main">
          <div className="left">
            <div className="following">
              <h3>Following</h3>
              <h6>80</h6>
            </div>
          </div>
          <div className="right">
            <div className="background_profile">
              <img src={lifestyle} alt="not found" />
              <div className="front_profile">
                <div className="front">
                  <img
                    src={avtaar}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      position: "relative",
                      left: "30rem",
                    }}
                  >
                    Edit
                  </a>
                </div>
                <div className="about">
                  <h6>Aman kushwaha</h6>
                  <a
                    href="#"
                    style={{ marginTop: "1rem", textDecoration: "none" }}
                  >
                    Edit
                  </a>
                </div>
              </div>
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
export default connect(mapStateToProps)(Profile);
