import styled from "styled-components"

const DownloadWrapper = styled.div`
  padding: 60px 0;
  background: #f6f5ff;

  .img-cover {
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      display: block;
      padding-top: calc(320 / 720 * 100%);
    }

    .img {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background: #eee;
    }
  }

  .get-now {
    .title {
      font-size: 48px;
      font-family: "HarmonyOS_Sans_SC_Bold";
      line-height: 68px;

      .product-name {
        color: #8955fa;
      }
    }

    .subtitle {
      margin-top: 20px;
      margin-bottom: 40px;
      font-size: 20px;
      line-height: 29px;
    }

    .btns {
      display: flex;
      gap: 10px;

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
  }
`

export { DownloadWrapper }
