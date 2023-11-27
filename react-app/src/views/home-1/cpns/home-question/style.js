import styled from "styled-components"

export const QuestionWrapper = styled.div`
  margin-bottom: 80px;

  .title {
    margin-top: 80px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 48px;
    font-family: "HarmonyOS_Sans_SC_Bold";
    line-height: 68px;
  }

  .question-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .question-content {
      padding: 20px;
      border-radius: 8px;

      &.active {
        background: #f6f5ff;

        .question-title {
          color: #8955fa;

          svg {
            transform: rotate(180deg);
          }
        }
      }
    }

    .question-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      line-height: 80px;
      font-size: 24px;
      font-family: "HarmonyOS_Sans_SC_Bold";
      line-height: 34px;
      cursor: pointer;

      svg {
        transition: transform 0.3s ease-in-out;
      }
    }

    .answer {
      height: 0;
      font-size: 20px;
      line-height: 29px;
      overflow: hidden;
      transition: height 0.3s ease-in-out;
    }
  }
`
