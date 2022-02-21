import styled from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  // flex-direction: column;

  width: 100vw;
  height: 100vh;

  .mainContent {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const PageWrapper = styled("div")`
  flex: 1;
`;
