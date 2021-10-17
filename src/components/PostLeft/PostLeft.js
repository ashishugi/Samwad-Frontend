// components
import PostLeftMenu from "../PostLeftMenu/PostLeftMenu";
import PostLeftMyAccount from "../PostLeftMyAccount/PostLeftMyAccount";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Wrapper } from "./style";

const PostLeft = () => {
  return (
    <Wrapper>
      <div className="heading">Samwad 💬 </div>
      <PostLeftMenu />
      <div className="header">
        <div>
          <p>Account</p>
        </div>
        <div className="icon">
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="account">
        <PostLeftMyAccount />
      </div>
    </Wrapper>
  );
};

export default PostLeft;
