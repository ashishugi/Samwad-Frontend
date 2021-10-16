import styled from "styled-components";

const PaddingTop = 1.5;
const Wrapper = styled.div`
  padding: ${PaddingTop}rem 0;
  .feed-image {
    height: 250px;
    width: 250px;
    img {
      border-radius: 1rem;
      height: 100%;
      width: 100%;
    }
  }
`;

export { Wrapper };
