import styled from "styled-components";
import { lightModeColor, DarkModeColor } from "../../../../assets/styles/style";

const paddingLeft = 1.5;
const paddingTop = 1.5;

const Wrapper = styled.div`
  padding: ${paddingTop}rem ${paddingLeft}rem;
  display: flex;
  justify-content: center;
  .image {
    margin: 0 0.4rem;
    width: 4.5rem;
    height: 4.5rem;
    border: 1.7px dashed ${(props) => props.theme.h};
    border-radius: 100%;
    display: inline-block;
    span {
      position: relative;
      bottom: 60px;
      left: 25px;
      opacity: 0;
      font-size: 2rem;
    }
    &:first-child {
      img {
        opacity: 0.2;
      }
      span {
        opacity: 1;
      }
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      padding: 0.3rem;
    }
    .add-post {
      color: ${(props) => props.theme.heading};
    }
  }
`;

export { Wrapper };
