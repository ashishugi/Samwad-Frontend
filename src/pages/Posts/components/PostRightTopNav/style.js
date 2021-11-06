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
    border: 3px solid ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.icon};
  }
  .search {
    color: ${(props) => props.theme.icon};
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
      border: 3px solid ${(props) => props.theme.border};
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.h};
      padding-left: 2.2rem;
      padding-right: 1rem;
      font-weight: 550;
      font-size: 0.9rem;
      font-family: cursive;
      &::placeholder {
        color: ${(props) => props.theme.heading};
        font-weight: 550;
        font-size: 0.9rem;
      }
      outline: none;
    }
  }
`;

export { Wrapper };
