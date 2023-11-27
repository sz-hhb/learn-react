import styled from "styled-components"

export const CommentsWrapper = styled.div`
  margin-bottom: 80px;

  .title {
    margin-bottom: 40px;
    text-align: center;
    font-size: 48px;
    font-family: "HarmonyOS_Sans_SC_Bold";
    line-height: 68px;
  }

  .ant-carousel {
    .slick-slider {
      border-radius: 32px;
      background: #f6f5ff;
    }

    .carousel-item {
      height: 100%;
      padding: 40px;
      border-radius: 32px;

      .comment {
        padding-right: 40px;
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 20px;
        line-height: 29px;
      }

      .user-name {
        font-size: 20px;
        font-family: "HarmonyOS_Sans_SC_Bold";
        line-height: 29px;
      }
    }

    .slick-dots {
      right: 40px;
      bottom: 20px;
      justify-content: flex-end;

      li {
        width: 12px;
        height: 12px;

        button {
          height: 12px;
          border-radius: 50%;
          opacity: 0.6;
          background: #ded0ff;
        }
      }

      li.slick-active button {
        opacity: 1;
        background: #8955fa;
      }
    }
  }
`
