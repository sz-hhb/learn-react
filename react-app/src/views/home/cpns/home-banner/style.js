import styled from "styled-components"
import banner from "@/assets/img/home/banner.png"

export const BannerWrapper = styled.div`
  display: flex;
  height: 780px;
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .intro {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 12.5%;

    .title {
      max-width: 492px;
      margin-bottom: 40px;
      font-size: 60px;
      font-family: "HarmonyOS_Sans_SC_Bold";
      line-height: 85px;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 580px;

      .list-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;

        .text {
          font-size: 18px;
          line-height: 25px;
        }
      }
    }

    .btns {
      display: flex;
      gap: 10px;
      margin-top: 40px;
      margin-bottom: 30px;

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

    .available {
      display: flex;
      align-items: center;
      gap: 10px;

      .text {
        font-size: 14px;
        line-height: 19px;
      }

      .icon {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }

  .img-cover {
    flex: 1;

    img {
      width: 100%;
      height: 720px;
    }
  }
`
