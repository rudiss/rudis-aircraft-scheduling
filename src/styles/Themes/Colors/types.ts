export interface IColors {
  colors: {
    primary: "#4096ff";
    primary2: "#FF276F";
    violet: "#7D5DEB";
    primaryDeep: "#000428";
    secondary: "#5754FF";
    lightPurple: "#C3B4F4";
    primaryError: "#FC5659";
    black: "#000000";
    blue: "#2C479E";
    none: "transparent";
    gray: "#757575";
    gray3: "#4F4F4F";
    gray5: "#B5B5BD";
    gray6: "#D4D9E2";
    gray7: "#D9D9D9";
    gray8: "#f8f8f8";
    darkGray: "#131533";
    lightGray: "#d9d9d9";
    white: "#FFFFFF";
    orange: "#FF5E33";
    lime: "#38E5B1";
    silver: "#D4D9E2";
    error: "#F5125F";
    rose: "#FAFAFA";
    success: "#3CBAA6";
    lightGreen: "#C3EDE3";
    shockPink: "#D0176A";
    linkWater: "#CECBF1";

    fontColor: {
      base: "#202020";
      light: "rgba(0, 0, 0, 0.35)";
    };
  };
}

export type TColors = Exclude<keyof IColors["colors"], "fontColor">;
