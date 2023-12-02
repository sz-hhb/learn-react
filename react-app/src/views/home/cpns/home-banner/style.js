import styled from "styled-components"
import bg1 from "@/assets/img/home/bg1.png"
import bg2 from "@/assets/img/home/bg2.png"

export const BannerWrapper = styled.div`
  .banner {
    position: relative;
    padding-bottom: calc((760 / 1920) * 100%);
    background-image: url(${bg2});
    background-position: center center;
    background-size: cover;

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url(${bg1});
      background-position: center center;
      background-size: cover;
    }

    .banner-content {
      position: absolute;
      top: 60.5%;
      left: 34.7%;
      width: 592px;
      height: 258px;

      .countdown {
        width: 100%;
        border-radius: 20px;
        background-color: rgba(251, 251, 255, 0.2);

        .title {
          padding: 16px 0 14px;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          color: #f9e977;
        }
      }
    }

    .time-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 538px;
      padding-bottom: 20px;
      margin: 0 auto;

      .square-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;

        .square {
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background: #f9e977;
        }
      }

      .time {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 88px;
        height: 88px;
        border-radius: 4px;
        border: 2px solid #ffffff;
        color: #9a00ff;
        background: #f9e977;

        .number {
          font-weight: bold;
          font-size: 32px;
        }

        .text {
          margin-top: 3px;
          font-size: 16px;
        }
      }
    }
  }
`
