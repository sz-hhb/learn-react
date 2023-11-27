import styled from "styled-components"

export const BarWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff;

  .bar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 0;

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;

      .name {
        font-size: 32px;
        font-family: "HarmonyOS_Sans_SC_Bold";
        line-height: 46px;
      }
    }

    .links {
      display: flex;
      align-items: center;
      gap: 40px;

      .link {
        font-size: 20px;
        line-height: 29px;
      }

      .btns {
        display: flex;
        gap: 10px;

        .btn {
          width: 169px;
          height: 48px;
          line-height: 48px;
          border-radius: 8px;
          text-align: center;
          font-size: 20px;
          font-family: "HarmonyOS_Sans_SC_Bold";
          color: #ffffff;
          background: #367aff;
          cursor: pointer;
        }
      }
    }
  }

  .save-finish {
    .ant-modal .ant-modal-content {
      padding: 40px 70px;

      .ant-modal-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        .save-success {
          font-size: 18px;
          font-family: "HarmonyOS_Sans_SC";
          line-height: 24px;
        }
      }

      .ant-modal-footer {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        gap: 20px;
        margin-top: 40px;

        .ant-btn {
          width: 160px;
          height: 48px;
          border-radius: 8px;
          font-family: "HarmonyOS_Sans_SC";
          line-height: 23px;
        }

        .ant-btn-default {
          border: 1px solid #367aff;
          color: #367aff;
          background: #fff;

          &:hover {
            color: #fff;
            background: #367aff;
          }
        }

        .ant-btn-primary {
          margin-left: 0;
          border: 1px solid #367aff;
          color: #fff;
          box-shadow: none;
          background: #367aff;

          &:hover {
            color: #367aff;
            background: #fff;
          }
        }
      }
    }
  }
`
