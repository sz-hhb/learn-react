import styled from "styled-components";

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 48px;
  box-sizing: border-box;
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 24px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  ${(props) => props.theme.mixin.boxShadow};

  .text {
    padding: 0 16px;
    color: #222;
    font-weight: 600;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #fff;
    background-color: ${(props) => props.theme.color.primaryColor};
  }
`;
