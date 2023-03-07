import * as React from "react";

import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => (
  <ButtonContainer {...rest}>{children}</ButtonContainer>
);
