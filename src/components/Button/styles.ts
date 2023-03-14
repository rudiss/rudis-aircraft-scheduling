import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  appearance: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  height: 40px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.mixins.toRem(14)};
  line-height: ${({ theme }) => theme.mixins.toRem(18)};
  letter-spacing: 0.02em;
  padding: 0 24px;

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
