import { colors } from "./Colors";
import { fonts } from "./Fonts";
import { border } from "./Border";
import { shadow } from "./Shadow";
import { opacity } from "./Opacity";
import { grid } from "./Grid";
import { padding } from "./Padding";
import { container } from "./Container";
import { mixins } from "./Mixins";
import { ITheme } from "./types";

export const Theme: ITheme = {
  colors,
  fonts,
  border,
  shadow,
  opacity,
  grid,
  padding,
  container,
  mixins,
};

export type { ITheme } from "./types";
