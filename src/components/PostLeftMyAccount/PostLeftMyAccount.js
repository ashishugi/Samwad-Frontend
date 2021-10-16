import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Wrapper } from "./style";

const PostLeftMyAccount = () => {
  return (
    <Wrapper>
      <div className="header">
        <div>
          <p>Account</p>
        </div>
        <div className="icon">
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="account">
        <div className="account-image">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="user-image"
          />
        </div>
        <div className="account-info">
          <div className="user-name">Some Name</div>
          <div className="user-email">some@name.mail.com</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostLeftMyAccount;
