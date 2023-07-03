import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    border: 0.5px solid #d8d8d8;
    margin-right: 16px;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 17px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
    }
  }
`;
