import "little-state-machine";
import "styled-components";

import { ITheme } from "./styles/Themes/types";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
