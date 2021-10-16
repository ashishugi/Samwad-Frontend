import styled from "styled-components";

const paddingLeft = 1.5;
const paddingTop = 1.5;
const Wrapper = styled.div`
  padding: ${paddingTop}rem ${paddingLeft}rem;
  .feed-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .feed-heading {
    p {
      font-weight: 550;
      font-size: 1.1rem;
    }
  }
`;

export { Wrapper };
