import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 0rem;
  background-color: ${(props) => props.theme.primary};
  .profile-right {
    padding: 0 2rem;
  }
  .profile-left {
    width: 100%;
  }
`;

export { Wrapper };
