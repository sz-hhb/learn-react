import styled from "styled-components"

export const FormWrapper = styled.div`
  .ant-form {
    .ant-form-item {
      margin-bottom: 0;

      label {
        height: 48px;
        color: #000;
        font-size: 16px;
        font-family: "HarmonyOS Sans SC";
        line-height: 48px;
      }

      .ant-input {
        height: 48px;
        padding: 13px 10px;
        border-color: #ccc;
        border-radius: 8px;
        color: #000;
      }

      .ant-input-affix-wrapper {
        height: 48px;
        padding: 13px 10px;
        border-color: #ccc;
        border-radius: 8px;
        color: #000;

        .ant-input {
          height: 100%;
          padding: 0;
        }
      }
    }
  }
`
