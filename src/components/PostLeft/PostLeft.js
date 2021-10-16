// components
import PostLeftMenu from "../PostLeftMenu/PostLeftMenu";
import PostLeftMyAccount from "../PostLeftMyAccount/PostLeftMyAccount";

import { Wrapper } from "./style";

const PostLeft = () => {
  return (
    <Wrapper>
      <div className="header">Samwad 💬 </div>
      <PostLeftMenu />
      <PostLeftMyAccount />
    </Wrapper>
  );
};

export default PostLeft;
