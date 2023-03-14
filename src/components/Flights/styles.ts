import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 99;
  > div:not(:has(.anticon-inbox)):hover {
    border-color: ${({ theme }) => theme.colors.gray5};
  }
`;

export const FlightLine = styled.div`
  width: 50px;
  height: 4px;

  border-radius: ${({ theme }) => theme.border.radius.pill}px;
  background-color: ${({ theme }) => theme.colors.blue};
`;
