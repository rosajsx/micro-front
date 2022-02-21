import styled from "styled-components";
import { PageWrapper } from "../../styles/appStyle";

export const Wrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled("div")`
  min-width: 60%;
  min-height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: ${({ theme }) => theme.spacing(30)};
    height: ${({ theme }) => theme.spacing(30)};
  }
`;

export const Details = styled("details")`
  white-space: pre-wrap;
  flex: 8;
  width: ${({ theme }) => theme.spacing(75)};

  font-size: ${({ theme }) => theme.spacing(1.5)};
  color: ${({ theme }) => theme.colors.red[500]};

  & > summary {
    color: black;
  }

  & > span {
    margin: ${({ theme }) => theme.spacing(1)} 0;
  }
`;

export const Title = styled("h2")`
  flex: 1;
  font-size: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(1)} 0;
`;
