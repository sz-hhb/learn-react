import styled from "styled-components"
import featureBanner from "@/assets/img/home/feature_banner.png"

const FeaturesWrapper = styled.div`
  min-height: 1186px;
  padding-top: 80px;
  background-image: url(${featureBanner});

  .title {
    text-align: center;
    font-size: 48px;
    font-family: "HarmonyOS_Sans_SC_Bold";
    line-height: 68px;
  }

  .subTitle {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    line-height: 29px;
  }

  .feature-content {
    .content {
      display: flex;
      flex-direction: column;
      height: 400px;
      padding: 30px 30px 0;
      border-radius: 32px;
      background: #ffffff;
      box-shadow: 0px 8px 12px 4px #e3e2ff;

      &-title {
        font-size: 24px;
        font-family: "HarmonyOS_Sans_SC_Bold";
        line-height: 34px;
      }

      &-subtitle {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 23px;
      }

      .img-cover {
        flex: 1;
        width: 100%;
        border-radius: 16px 16px 0px 0px;
        background: #eee;
      }
    }
  }
`
export default FeaturesWrapper
