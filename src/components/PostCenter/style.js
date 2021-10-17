import styled from "styled-components";

const paddingLeft = 1.5;
const paddingTop = 1.5;

const Wrapper = styled.div`
  background-color: #f2f8fe;
  width: 100%;
  height: 100vh;
  .horizontal-line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    hr {
      width: 90%;
      text-align: center;
      height: 1%;
      border-top: 0.1rem solid #e1e1ea;
    }
  }
`;

export { Wrapper };
