import styled from "styled-components";

const paddingLeft = 1.5;
const paddingTop = 1.5;
const Wrapper = styled.div`
  padding: ${paddingTop}rem ${paddingLeft}rem;
  .follow {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 0rem;
    button {
      padding: 0.2rem 1rem;
      border-radius: 5px;
      color: white;
      background-color: #a974ff;
      border: none;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export { Wrapper };
