import styled from "styled-components";

export const FilterWrapper = styled.div`
  .filter {
    display: flex;
    margin-left: 18px;
    margin-top: 20px;

    .item {
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      margin: 0 4px 0 8px;
      color: #484848;
      cursor: pointer;

      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #ffffff;
      }
    }
  }
`;
