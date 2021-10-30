import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #ffffff;
  min-width: 220px;
  width: 100%;
  height: 100%;
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
    /* For landscape layouts only */
    grid-template-columns: 1fr 3fr 1fr;
  }
  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) */
    display: none;
  }
  /* display: flex; */
  .account {
    padding: 0 0.8rem; // top-bottom , left-right
  }
  .heading {
    padding: 1.5rem 1.5rem; // top-bottom , left-right
    /* text-align: center; */
    color: #ae7dff;
    font-size: 1.5rem;
    font-weight: 650;
    font-family: cursive;
  }
  .header {
    display: flex;
    padding: 1.5rem 1.5rem; // top-bottom , left-right
    flex-direction: row;
    justify-content: space-between;
    .icon {
      color: black;
      cursor: pointer;
      color: #ae7dff;
      margin-left: auto;
    }
    p {
      color: black;
      font-size: 1.1rem;
      font-family: sans-serif;
    }
  }
`;

export { Wrapper };
