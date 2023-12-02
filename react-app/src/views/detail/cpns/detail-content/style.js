import styled from "styled-components"

const ContentWrapper = styled.div`
  .container {
    display: flex;
    gap: 40px;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }

  .menus-wrap {
    position: sticky;
    top: 60px;
    height: 100%;

    .menus-content {
      width: 360px;
      border-radius: 16px;
      border: 1px solid #e2e2e2;

      .title {
        height: 80px;
        padding: 23px 20px;
        border-radius: 16px 16px 0 0;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        line-height: 34px;
        background: #367aff;
      }

      .step-content {
        .step {
          padding: 12px 20px;
          font-size: 16px;
          line-height: 23px;
          cursor: pointer;
        }
      }
    }
  }

  .content {
    h1,
    p,
    .img {
      padding: 7px 0;
    }

    .img {
      width: 100%;
      height: 400px;
      border-radius: 16px;
      border: 1px solid #979797;
    }
  }
`

export { ContentWrapper }
