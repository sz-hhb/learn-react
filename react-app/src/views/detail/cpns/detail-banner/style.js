import styled from "styled-components"

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  margin-bottom: 40px;
  background: linear-gradient(90deg, #caf7ff 0%, #e1e8fd 100%);

  .banner-content {
    display: flex;
    align-items: center;

    .logo {
      width: 80px;
      height: 80px;
      border-radius: 13px;
      border: 2px solid #000000;
    }

    .title {
      margin-left: 20px;
      font-size: 40px;
      line-height: 56px;
    }
  }
`

export { BannerWrapper }
