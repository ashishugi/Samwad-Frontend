import styled from "styled-components";

const paddingLeft = 1.5;
const paddingTop = 1.5;
const Wrapper = styled.div`
  padding: ${paddingTop}rem ${paddingLeft}rem;
  height: 100%;
  .feed-card {
    display: grid;
    gap: 1rem;
    @media only screen and (min-width: 1025px) {
      /* styles for browsers larger than 1440px; */
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
      /* For landscape layouts only */
      grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-device-width: 480px) {
      /* styles for mobile browsers smaller than 480px; (iPhone) */
      grid-template-columns: 1fr;
    }
  }
  .feed-heading {
    padding-bottom: 1rem;
    p {
      font-weight: 550;
      font-size: 1.1rem;
      color: ${(props) => props.theme.heading};
    }
  }
`;

const FeedsWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  .feed-card {
    height: 100%;
    overflow-y: scroll;
    margin-right: -50px;
    padding-right: 50px;
  }
`;

export { Wrapper, FeedsWrapper };
