import styled, { css } from "styled-components";

import { PageWrapper } from "@MicroFrontContainer/AppStyle";

export const Wrapper = styled(PageWrapper)`
  ${({ theme }) => {
    return css`
      overflow: hidden;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacing(5)};

      & > h2 {
        font-size: ${theme.spacing(4)};
        color: ${theme.theme.text};
      }

      & > img {
        width: ${theme.spacing(50)};
        height: ${theme.spacing(50)};
      }
    `;
  }}
`;
