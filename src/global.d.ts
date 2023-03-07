import "little-state-machine";
import "styled-components";

import { ITheme } from "./styles/Themes/types";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_URL: string;
      NODE_ENV: "development" | "production";
    }
  }
}
