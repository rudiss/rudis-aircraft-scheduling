import styled from "styled-components";

export const EmptyListContainer = styled.div`
  border: 1px solid #f0f0f0;
  background-color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.border.radius.main}px;
  padding: 60px ${({ theme }) => theme.padding.large}px;
  .anticon.anticon-inbox {
    font-size: 44px;
  }
`;
