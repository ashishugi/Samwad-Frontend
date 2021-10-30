import styled from "styled-components";

const Wrapper = styled.div`
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
    /* For landscape layouts only */
    grid-template-columns: 1fr 3fr 1fr;
  }
  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) */
    display: none;
  }
`;

export { Wrapper };
