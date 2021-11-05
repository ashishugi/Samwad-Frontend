import styled from "styled-components";

const leftSidepadding = 1.5;

const Wrapper = styled.div`
  .account {
    /* padding: 0 ${leftSidepadding}rem; */
    display: flex;
    flex-direction: row;
    align-items: center;
    .account-info {
      padding: 0 0.5rem;
      text-decoration: none;
      .user-name {
        font-size: 0.9rem;
        font-weight: 550;
        color: ${(props) => props.theme.h};
      }
      .user-email {
        font-size: 0.7rem;
        font-weight: 550;
        color: ${(props) => props.theme.smallText};
      }
    }
    .account-image {
      height: 3rem;
      width: 3rem;
      img {
        height: 100%;
        width: 100%;
        border-radius: 100%;
      }
    }
  }
  /* .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .icon {
      color: black;
    }
    p {
      color: black;
      font-size: 1.1rem;
      font-family: sans-serif;
    }
  } */
`;

export { Wrapper };
