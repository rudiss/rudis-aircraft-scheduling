/* eslint-disable no-magic-numbers */
import { IGrid } from "./types";

import { GridColumnSizeEnum } from "./enum";

/**
 * Default grid size: 4
 */
export const grid: IGrid["grid"] = {
  container: {
    display: "grid",
  },
  setDisplay: (props) => {
    if (props.flex) return "flex";
    if (props.grid) return "grid";
    return "block";
  },
  columnsSize: {
    1: GridColumnSizeEnum.ONE_WHOLE,
    2: GridColumnSizeEnum.ONE_WHOLE / 2,
    3: GridColumnSizeEnum.ONE_WHOLE / 3,
    4: GridColumnSizeEnum.ONE_WHOLE / 4,
    5: GridColumnSizeEnum.ONE_WHOLE / 5,
    6: GridColumnSizeEnum.ONE_WHOLE / 6,
  },
};
