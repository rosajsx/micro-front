import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

import GlobalStyle from "../../styles/globalStyle";
import { MicroFrontStyles } from "../../styles/index";

import { useTheme } from "../../hooks/useTheme";

const ThemeProvider = ({ children }) => {
  const { theme } = useTheme();

  const convertedTheme = {
    ...MicroFrontStyles,
    theme: {
      ...MicroFrontStyles.themes[theme],
    },
  };

  return (
    <StyledProvider theme={convertedTheme}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  );
};

export default ThemeProvider;
