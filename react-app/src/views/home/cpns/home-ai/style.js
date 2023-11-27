import styled from "styled-components"

const AIWrapper = styled.div`
  padding: 80px 0 60px;
  margin: 80px 0;
  background: #f6f5ff;

  .title {
    margin-bottom: 20px;
    font-size: 48px;
    font-family: "HarmonyOS_Sans_SC_Bold";
    line-height: 68px;
    text-align: center;
  }

  .ai {
    .ai-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      padding: 40px 30px;
      border-radius: 32px;
      background: #ffffff;
      box-shadow: 0px 4px 8px 2px #eae1ff;

      .label {
        padding: 20px 0;
        font-size: 24px;
        font-family: "HarmonyOS_Sans_SC_Bold";
        line-height: 34px;
      }

      .text {
        text-align: center;
        font-size: 16px;
        line-height: 23px;
      }
    }
  }
`

export { AIWrapper }
