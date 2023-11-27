import styled from "styled-components"

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  margin-top: 80px;
  background: #f6f5ff;

  .title {
    font-size: 48px;
    font-family: "HarmonyOS_Sans_SC_Bold";
    line-height: 68px;
  }

  .subTitle {
    max-width: 1200px;
    padding: 20px 0 40px;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
  }

  .intro-wrap {
    display: flex;
    width: 100%;
    height: 684px;

    .btns {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .btn-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 68px;
        border-radius: 8px;
        border: 1px solid #cccccc;
        font-size: 20px;
        font-family: "HarmonyOS_Sans_SC_Bold";
        line-height: 29px;
        background: #ffffff;
        cursor: pointer;

        &:hover {
          background: #e1defe;
        }

        &.active {
          background: #8955fa;
        }
      }
    }

    .content {
      position: relative;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 16px;
      }

      .text {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 21px 30px;
        border-radius: 0 0 16px 16px;
        font-size: 20px;
        color: #ffffff;
        line-height: 29px;
        background: linear-gradient(
          180deg,
          rgba(137, 85, 250, 0) 0%,
          #8955fa 100%
        );
      }
    }
  }
`
