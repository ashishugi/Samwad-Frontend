//components
import PostCenterTopNavbar from "../PostCenterTopNavbar/PostCenterTopNavbar";
import PostCenterFeed from "../PostCenterFeed/PostCenterFeed";
import MobileViewNavbar from "../../../../components/MobileViewNavbar/MobileViewNavbar";

import { Wrapper } from "./style";

const PostCenter = () => {
  return (
    <Wrapper>
      <div className="heading">
        <MobileViewNavbar />
      </div>
      <PostCenterTopNavbar />
      <div className="horizontal-line">
        <hr />
      </div>
      <PostCenterFeed />
    </Wrapper>
  );
};

export default PostCenter;
