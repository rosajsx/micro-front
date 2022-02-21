import { colors } from "./colors";
import { BreakpointSizes, breakAt } from "./breakpoints";
import { light } from "./themes/light";
import { dark } from "./themes/dark";
import { spacing, toRem } from "./spacings";

export const MicroFrontStyles = {
  colors,
  spacing,
  toRem,
  breakpoints: {
    sizes: BreakpointSizes,
    breakAt,
  },
  themes: {
    light,
    dark,
  },
};
