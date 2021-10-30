import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 3fr;
  .page-donot-exist {
    display: flex;
    h1 {
      text-align: center;
      align-items: center;
    }
  }
`;
const notLoggedWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .page-donot-exist { 
    h1 {
      text-align: center;
      align-items: center;
    }
  }
`;
export { Wrapper, notLoggedWrapper };
