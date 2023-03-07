import * as React from "react";

import "./styles.scss";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => (
  <ButtonContainer {...rest}>
    <button></button>
    {children}
  </ButtonContainer>
);
