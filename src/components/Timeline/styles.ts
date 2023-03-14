import styled from "styled-components";

export const Container = styled.div``;

export const TimelineContent = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  outline: 1px solid #f0f0f0;

  border-radius: ${({ theme }) => theme.border.radius.main}px;
  overflow: hidden;
  &:has(> div) {
    &:before {
      content: "";
      width: 100%;
      z-index: 1;
      left: 0;
      position: absolute;
      height: 80px;
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;

export const TimelineTimeInterval = styled.div`
  z-index: 1;
  position: absolute;
  height: 80px;
`;

export const TimelineTempo = styled.div`
  z-index: 999;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.darkGray};
  position: relative;
  top: 99px;

  > span:after {
    content: "";
    display: block;
    height: 10px;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.darkGray};
    position: relative;
    bottom: 1px;
  }

  > span {
    position: relative;
    bottom: 30px;
    &:first-child {
      left: -19px;
      &:after {
        left: 19px;
      }
    }

    &:nth-child(2):after {
      left: 17px;
    }

    &:last-child {
      right: -19px;
      &:after {
        right: -18px;
      }
    }
  }
`;
