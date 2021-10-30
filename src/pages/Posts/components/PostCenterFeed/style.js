import styled from "styled-components";

const paddingLeft = 1.5;
const paddingTop = 1.5;
const Wrapper = styled.div`
  padding: ${paddingTop}rem ${paddingLeft}rem;

  height: 100%;
  .feed-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .feed-heading {
    padding-bottom: 1rem;
    p {
      font-weight: 550;
      font-size: 1.1rem;
    }
  }
`;

const FeedsWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  .feed-card {
    height: 100%;
    overflow-y: scroll;
    margin-right: -50px;
    padding-right: 50px;
  }
`;

export { Wrapper, FeedsWrapper };
