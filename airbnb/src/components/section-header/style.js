import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #222;

  .arrow-right {
    display: none;
    width: 8px;
    height: 8px;
    border: 2px solid #555;
    border-left: 0;
    border-bottom: 0;
    background-color: #fff;
    transform: rotate(45deg);
  }

  .title-wrapper {
    padding-right: 20px;
    cursor: pointer;

    &:hover + div {
      display: block;
    }

    .title {
      font-size: 22px;
      font-weight: 700;
    }

    .subtitle {
      font-size: 16px;
      margin-top: 16px;
    }
  }
`;
