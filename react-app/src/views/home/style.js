import styled from "styled-components"

const HomeWrapper = styled.div`
  .item {
    border-radius: 32px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.05);
    }

    span {
      font-size: 2rem;

      @media (max-width: 767.98px) {
        font-size: 1rem;
      }
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .embed-responsive-video::before {
    padding-top: calc(500 / 1410 * 100%);
  }

  .ant-col {
    padding: 15px 0;
  }
`

export { HomeWrapper }
