// components
import PostLeftMenu from "../PostLeftMenu/PostLeftMenu";
import PostLeftMyAccount from "../PostLeftMyAccount/PostLeftMyAccount";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { connect } from "react-redux";

import { Wrapper } from "./style";
import Logout from "@mui/icons-material/Logout";
import { logout } from "../../../../actions/login";
import { Link } from "react-router-dom";

const PostLeft = (props) => {
  const Userlogout = () => {
    console.log("logout called");
    localStorage.removeItem("loginDetails"); // removing token
    props.dispatch(logout());
  };
  return (
    <Wrapper>
      <div className="heading">Samwad 💬 </div>
      <PostLeftMenu />
      <div className="header">
        <div>
          <p>Account</p>
        </div>
        <div className="icon" onClick={() => Userlogout()}>
          <LogoutIcon />
        </div>
      </div>
      <div className="account">
        <Link to="/profile">
          <PostLeftMyAccount />
        </Link>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(PostLeft);
