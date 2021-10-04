import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2.9rem;
  .heading {
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  form {
    margin-top: 1rem;
    width: 90%;
    .horizontal-line {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: 1.5rem 0;
      color: gray;
      align-items: center;
      .first-line {
        width: 50%;
      }
      .or {
        margin: 0 0.5rem;
      }
      .last-line {
        width: 50%;
      }
    }
    .button {
      margin: 0.5rem 0;
      display: flex;
      justify-content: center;
      button {
        width: 100%;
        height: 2.5rem;
        cursor: pointer;
        border-radius: 13px;
        border: none;
        background-color: #4da2f9;
        color: #ffff;
        font-weight: 550;
        font-size: 1rem;
        font-family: monospace;
      }
    }
    .checkbox {
      margin: 0.5rem 0;
      .css-ahj2mt-MuiTypography-root {
        font-size: 0.8rem;
        color: gray;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      }
    }
    .password {
      margin: 0.5rem 0;
      display: flex;
      justify-content: flex-start;
    }
    .input-field {
      label {
        font-size: 0.9rem;
        font-weight: 550;
        font-family: monospace;
      }
      input {
        width: 100%;
        height: 3rem;
        background-color: #f6f6f6;
        /* background-color: black; */
        outline: none;
        border: none;
        border-radius: 8px;
        margin: 0.5rem 0;
        font-size: 1rem;
      }
    }
  }
`;

export { Wrapper };
