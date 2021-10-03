import styled from "styled-components";

import breakpoint from "../../assets/styles/style";

const Wrapper = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100%;
  display: grid;
  /* grid-template-columns: 3fr 5fr; */
  grid-template-rows: 1fr;
  @media only screen and (min-width: 1025px) {
    /* styles for browsers larger than 1440px; */
    grid-template-columns: 3fr 5fr;
  }
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
    /* For landscape layouts only */
    grid-template-columns: 100%;
  }
  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) */
    grid-template-columns: 100%;
  }

  .right {
    padding: 4% 6%;
    .login {
      display: flex;
      justify-content: flex-end;
      .account {
        font-family: monospace;
      }
      .login-btn {
        padding-left: 1rem;
        text-decoration: none;
        font-family: monospace;
      }
    }
  }
  .left {
    padding: 5% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d7daeb;

    @media only screen and (min-width: 1025px) {
      /* styles for browsers larger than 1440px; */
      grid-template-columns: 3fr 5fr;
    }
    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) {
      /* For landscape layouts only */
      display: none;
    }
    @media only screen and (max-device-width: 480px) {
      /* styles for mobile browsers smaller than 480px; (iPhone) */
      display: none;
    }
  }
`;

export { Wrapper };
