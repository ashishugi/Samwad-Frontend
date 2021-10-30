import React, { Component } from "react";

import { Wrapper } from "./styled";
import PostLeft from "../Posts/components/PostLeft/PostLeft";

class _404 extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <PostLeft />
        </div>
        <div className="page-donot-exist">
          <h1>Sorry :( Page Does not Exist</h1>
        </div>
      </Wrapper>
    );
  }
}

export default _404;
