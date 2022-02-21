import React from "react";
import { Switch, Input, Slider } from "./styles";

import { useTheme } from "../../hooks/useTheme";

export const ThemeSwitch = () => {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <Switch>
      <Input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
      <span className="slider round"></span>
    </Switch>
  );
};
