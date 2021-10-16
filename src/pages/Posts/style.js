import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: blue;
  .post-left {
    min-width: 230px;
  }
`;

export { Wrapper };
