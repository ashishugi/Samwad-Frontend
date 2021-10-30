import React from "react";

//components
import PostLeft from "./components/PostLeft/PostLeft";
import PostRight from "./components/PostRight/PostRight";
import PostCenter from "./components/PostCenter/PostCenter";

import { Wrapper } from "./style";

class Posts extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="post-left">
          <PostLeft />
        </div>
        <div className="post-center">
          <PostCenter />
        </div>
        <div className="post-right">
          <PostRight />
        </div>
      </Wrapper>
    );
  }
}

export default Posts;
