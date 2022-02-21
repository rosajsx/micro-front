import styled, { css } from "styled-components";

const getSecondaryColor = (styles) => styles.theme.textSecondary;
const getOrange400 = (styles) => styles.colors.orange[400];
const getDisplayFlexCenter = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled("nav")`
  ${({ theme, isOpen }) => css`
    width: ${isOpen ? theme.spacing(15) : theme.spacing(8)};
    background: ${theme.theme.main};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    transition: width 0.2s;
  `}
`;

export const List = styled("ul")`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const EmptyListItem = styled("li")`
  ${({ theme }) => css`
    font-size: ${theme.spacing(2)};
    padding: ${theme.spacing(3)} 0;
    color: ${getSecondaryColor(theme)};
    ${getDisplayFlexCenter()}
    font-weight: bold;
  `}
`;

export const ListItem = styled("li")`
  ${({ theme, isOpen }) => css`
    color: ${getSecondaryColor(theme)};
    ${getDisplayFlexCenter()}
    transition: background 0.2s;

    & > a {
      color: ${getSecondaryColor(theme)};
      font-size: ${theme.spacing(3)};
      padding: ${theme.spacing(2)} 0;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: ${theme.spacing(0.5)};
      text-decoration: none;

      & > span {
        font-size: ${theme.spacing(2)};
        // visibility: ${isOpen ? "visible" : "hidden"};
        display: ${isOpen ? "block" : "none"};
      }
    }

    &:hover {
      background: ${getOrange400(theme)};
    }
  `}
`;

export const IconButton = styled("button")`
  ${({ theme }) => css`
    font-size: ${theme.spacing(3)};
    padding: ${theme.spacing(2)} 0;
    color: ${getSecondaryColor(theme)};
    background: transparent;
    border: 0;

    ${getDisplayFlexCenter()}

    &:hover {
      //filter: brightness(0.8);
      background: ${getOrange400(theme)};
    }
  `}
`;
