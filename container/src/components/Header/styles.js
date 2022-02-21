import styled, { css } from "styled-components";

export const Wrapper = styled("header")`
  ${({ theme }) => {
    return css`
      color: ${theme.theme.text};

      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: ${theme.spacing(2)} ${theme.spacing(10)};
      & > h1 {
        font-size: ${theme.spacing(4)};
      }
    `;
  }}
`;

export const SubRoutes = styled("nav")``;
