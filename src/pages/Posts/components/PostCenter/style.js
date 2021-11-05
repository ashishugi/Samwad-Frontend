import styled from "styled-components";
import {
  lightModeColor,
  DarkModeColor,
  currtheme,
} from "../../../../assets/styles/style";

const paddingLeft = 1.5;
const paddingTop = 1.5;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 100vh;
  @media only screen and (min-width: 1025px) {
    /* styles for browsers larger than 1440px; */
    .heading {
      display: none;
    }
  }
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
    .heading {
      display: none;
    }
  }
  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) */
    .heading {
      padding: 1.5rem 1.5rem; // top-bottom , left-right
      /* text-align: center; */
      color: ${(props) => props.theme.secondaryPrimary};
      font-size: 1.5rem;
      font-weight: 650;
      font-family: cursive;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .horizontal-line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    hr {
      width: 95%;
      text-align: center;
      height: 0.01rem;
      color: ${(props) => props.theme.secondaryPrimary};
      /* border-top: 0.1rem solid #e1e1ea; */
    }
  }
`;

export { Wrapper };
