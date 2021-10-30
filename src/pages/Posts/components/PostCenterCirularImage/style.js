import styled from "styled-components";

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
    border: 1.2px dashed #a974ff;
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
  }
`;

export { Wrapper };
