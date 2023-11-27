import styled from "styled-components"

const StepWrapper = styled.div`
  padding-top: 80px;

  .title {
    margin-bottom: 40px;
    text-align: center;
    font-size: 48px;
    font-family: "HarmonyOS_Sans_SC_Bold";
    line-height: 68px;
  }

  .content {
    display: flex;
    gap: 72px;

    .step {
      display: flex;
      flex-direction: column;

      .step-item {
        display: flex;
        flex-direction: column;
        min-height: 168px;

        &:not(:last-child) {
          .num::after {
            position: relative;
            left: 33px;
            top: 11px;
            content: "";
            display: block;
            width: 4px;
            height: 80px;
            border-radius: 2px;
            background: #8955fa;
          }
        }

        .num-intro {
          display: flex;
          gap: 40px;

          .num {
            width: 68px;
            height: 68px;
            border-radius: 50%;
            font-size: 32px;
            font-family: "HarmonyOS_Sans_SC_Bold";
            color: #8955fa;
            line-height: 68px;
            text-align: center;
            background: #e1defe;
          }

          .intro {
            .label {
              max-width: 540px;
              margin-bottom: 10px;
              font-size: 32px;
              font-family: "HarmonyOS_Sans_SC_Bold";
              line-height: 46px;
            }

            .desc {
              max-width: 540px;
              font-size: 20px;
              line-height: 29px;
            }
          }
        }
      }
    }

    .img-cover {
      flex:1;
      position: relative;
      overflow: hidden;

      &::before {
        content:"",
        display: block;
        padding-top: calc(480 / 800 * 100%);
      }

      .img {
        position: absolute;
        inset: 0;
        max-height: 480px;
        border-radius: 16px;
        background: #eee;
      }
    }
  }

  .btns {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 70px;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 220px;
        height: 68px;
        border: 2px solid #8955fa;
        border-radius: 8px;
        font-size: 20px;
        line-height: 29px;
        font-family: "HarmonyOS_Sans_SC_Bold";
        cursor: pointer;
      }

      .download {
        display: flex;
        gap: 10px;
        color: #ffffff;
        background: #8955fa;

        &:hover {
          color: #8955fa;
          background: #ffffff;
        }
      }

      .buy-now {
        color: #8955fa;
        background: #ffffff;

        &:hover {
          color: #ffffff;
          background: #8955fa;
        }
      }
    }
`

export { StepWrapper }
