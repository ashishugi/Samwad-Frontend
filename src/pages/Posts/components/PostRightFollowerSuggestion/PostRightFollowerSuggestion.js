//components

import PostLeftMyAccount from "../PostLeftMyAccount/PostLeftMyAccount";

import { Wrapper } from "./style";

const ar = [1, 2, 3, 4];
const PostRightFollowerSuggestion = (props) => {
  return (
    <Wrapper>
      <div className="header">
        <p>Suggestions for you</p>
      </div>
      {ar.map((data, index) => {
        return (
          <div className="follow">
            <PostLeftMyAccount />
            <button>Follow</button>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default PostRightFollowerSuggestion;
