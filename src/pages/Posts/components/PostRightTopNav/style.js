import styled from "styled-components";

const paddingTop = 1.5;
const paddingLeft = 1.5;

const Wrapper = styled.div`
  padding: ${paddingTop}rem ${paddingLeft}rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .notification {
    padding: 0.4rem 0.5rem;
    border-radius: 100%;
    border: 1px solid #dee8f4;
    background-color: #ffffff;
    color: #a4b6e1;
  }
  .search {
    color: #a4b6e1;
    position: relative;
    .search-icon {
      position: absolute;
      left: 10px;
      top: 0.34rem;
    }
    input {
      border-radius: 1rem;
      height: 2.2rem;
      width: 80%;
      border: 1px solid #dee8f4;
      background-color: #ffffff;
      color: black;
      padding-left: 2.2rem;
      padding-right: 1rem;
      font-weight: 550;
      font-size: 0.9rem;
      font-family: cursive;
      &::placeholder {
        color: #a4b6e1;
        font-weight: 550;
        font-size: 0.9rem;
      }
      outline: none;
    }
  }
`;

export { Wrapper };
