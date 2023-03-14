import styled, { css } from "styled-components";

const isRotationActive = ({ $hasAircraft }: { $hasAircraft: boolean }) =>
  $hasAircraft
    ? css`
        > div:nth-child(2) > div {
          cursor: pointer;
        }
      `
    : css`
        opacity: 0.6;
        > div:nth-child(2) > div {
          cursor: not-allowed;
        }
      `;

const rotationCardHover = css`
  &:has(~ div > div) {
    > div:nth-child(2) > div:not(:has(.anticon-inbox)):hover {
      border-color: ${({ theme }) => theme.colors.gray5};
    }
  }
`;

export const Container = styled.div<{ $hasAircraft: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ $hasAircraft }) => isRotationActive({ $hasAircraft })}

  ${rotationCardHover}
`;

export const RotationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 0 126px;
`;

export const RotationTimeline = styled.div`
  position: fixed;
  left: 0;
  bottom: 10px;
  width: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 64px;

  &:before,
  &:after {
    content: "";
    display: block;
  }
`;

export const RotationLine = styled.div`
  width: 100px;
  height: 4px;

  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  background-color: ${({ theme }) => theme.colors.blue};
`;
