import styled from "styled-components";

const PaddingTop = 1.5;
const Wrapper = styled.div`
  padding: ${PaddingTop}rem 0;
  .post-info {
    margin: 0.6rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    .post-actions {
      display: flex;
      flex-direction: row;
      color: #a3b5e1;
      /* align-self: flex-end; */
      justify-content: center;
      margin-left: auto;
      gap: 0.5rem;
      .post-like,
      .post-reply {
        display: flex;
        flex-direction: row;
        align-items: center;
        .active-icon {
          color: #ee4627;
        }
        span {
          font-size: 0.9rem;
          font-weight: 550;
          padding-left: 0.1rem;
        }
      }
      ForumIcon {
        color: #a3b5e1;
      }
    }
    .user-name {
      font-size: 0.7rem;
      font-weight: 550;
      font-family: monospace;
      padding-left: 0.5rem;
    }
    .user-image {
      width: 2rem;
      height: 2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
  }
  .feed-image {
    overflow-y: hidden;
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
