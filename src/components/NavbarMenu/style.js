import styled from "styled-components";

const leftSidepadding = 1.5;

const Wrapper = styled.div`
  .content {
    h4 {
      font-size: 1.1rem;
      padding-left: ${leftSidepadding}rem;
      margin: 1rem 0;
      color: ${(props) => props.theme.heading};
    }
    .navbar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .navbar-item {
        &:hover {
          /* background-color: yellow; */
          box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
          /* box-shadow: 10px 10px rgba(0, 0, 0, 0.3); */
        }
        cursor: pointer;
        padding: 0.8rem ${leftSidepadding}rem;
        .navbar-button {
          margin-left: 1.2rem;
          font-size: 0.95rem;
          font-weight: 550;
          color: ${(props) => props.theme.h};
        }
        .navbar-icon {
          color: ${(props) => props.theme.icon};
        }
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
`;

export { Wrapper };
