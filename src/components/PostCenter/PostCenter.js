//components
import PostCenterTopNavbar from "../PostCenterTopNavbar/PostCenterTopNavbar";
import PostCenterFeed from "../PostCenterFeed/PostCenterFeed";

import { Wrapper } from "./style";

const PostCenter = () => {
  return (
    <Wrapper>
      <PostCenterTopNavbar />
      <div className="horizontal-line">
        <hr />
      </div>
      <PostCenterFeed />
    </Wrapper>
  );
};

export default PostCenter;
