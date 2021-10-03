import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0.5rem 0;
  .GoogleIcon {
    /* background-color: yellow; */
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #ffffff;
  border-radius: 17px;
  border: 0.1rem solid #e7e7e7;
  height: 2.5rem;
  font-size: 0.9rem;
  font-weight: 650;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  outline: none;
  .btn-headline {
    margin: auto;
    width: 50%;
  }
`;

export { Wrapper, Button };
