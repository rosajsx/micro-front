import styled from "styled-components";
import { PageWrapper } from "../../styles/appStyle";

export const Wrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const Title = styled("h2")`
  font-size: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.theme.text};
`;

export const Description = styled("span")`
  font-size: ${({ theme }) => theme.spacing(2)};
  max-width: ${({ theme }) => theme.spacing(130)};
  text-align: center;
  color: ${({ theme }) => theme.theme.text};
`;

export const Image = styled("img")`
  width: ${({ theme }) => theme.spacing(50)};
  height: ${({ theme }) => theme.spacing(50)};
`;
