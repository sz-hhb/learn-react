import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.textColor.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 25px;
    margin-left: 5px;
    margin-right: 24px;
    color: ${(props) => props.theme.textColor.primaryColor};
    box-sizing: border-box;
    background-color: #fff;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};

    /* transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    } */

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      border-radius: 10px;
      color: #666;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
