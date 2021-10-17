//components
import PostRightTopNav from "../PostRightTopNav/PostRightTopNav";
import PostRightFollowerSuggestion from "../PostRightFollowerSuggestion/PostRightFollowerSuggestion";

import { Wrapper } from "./style";

const PostRight = () => {
  return (
    <Wrapper>
      <PostRightTopNav />
      <PostRightFollowerSuggestion />
    </Wrapper>
  );
};

export default PostRight;
