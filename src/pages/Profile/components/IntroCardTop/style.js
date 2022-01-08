import styled from "styled-components";

const Wrapper = styled.div`
  width: 970px;
  .intro-background {
    border-radius: 0.625rem 0.625rem 0px 0px;
    width: 970px;
    .bg-image {
    }
    .profile-info {
      /* position: relative; */
      width: 970px;
      border-radius: 0.625rem 0.625rem 0px 0px;
      background-color: ${(props) => props.theme.secondPrimary};
      min-height: 100px;
      display: flex;
      flex-direction: row;
      .profile-info {
        justify-content: space-evenly;
        .details {
          color: ${(props) => props.theme.heading};
        }
      }
      .profile-photo {
        position: relative;
        top: -5rem;
        left: 2rem;
        border-radius: 100%;
        z-index: 1;
        height: 10rem;
        width: 10rem;
        img {
          height: 100%;
          width: 100%;
          border-radius: 100%;
        }
      }
    }
  }
`;
export { Wrapper };
