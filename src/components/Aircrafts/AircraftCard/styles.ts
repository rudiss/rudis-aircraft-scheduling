import Card from "antd/es/card/Card";
import styled, { css } from "styled-components";

const aircraftCardDeactivated = css`
  opacity: 0.3;
`;

const aircraftCardHover = css`
  &:hover {
    border-color: ${({ theme }) => theme.colors.gray5};
  }
`;

export const AircraftCardContainer = styled(Card)<{ $active?: boolean }>`
  ${({ $active }) => ($active ? "" : aircraftCardDeactivated)}
  ${aircraftCardHover}
`;
