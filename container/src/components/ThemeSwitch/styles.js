import styled from "styled-components";

export const Switch = styled("label")`
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.spacing(7)};
  height: ${({ theme }) => theme.spacing(4)};

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid ${({ theme }) => theme.theme.main};
    -webkit-transition: 0.4s;
    transition: 0.4s;

    &:before {
      position: absolute;
      content: "";
      height: ${({ theme }) => theme.spacing(2.8)};
      width: ${({ theme }) => theme.spacing(2.8)};
      left: 4px;
      bottom: 4px;
      background-color: ${({ theme }) => theme.theme.text};

      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    &.round {
      border-radius: ${({ theme }) => theme.spacing(4)};
      &:before {
        border-radius: 50%;
      }
    }
  }
`;

export const Input = styled("input")`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: ${({ theme }) => theme.theme.main};
  }

  &:focus + .slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.theme.main};
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(${({ theme }) => theme.spacing(3)});
    -ms-transform: translateX(${({ theme }) => theme.spacing(3)});
    transform: translateX(${({ theme }) => theme.spacing(3)});
  }
`;
