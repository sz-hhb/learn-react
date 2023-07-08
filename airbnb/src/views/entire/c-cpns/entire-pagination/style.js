import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page {
      margin: 0 8px;

      &:hover {
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-page.Mui-selected {
      color: #fff;
      background-color: #222;
    }

    .MuiPaginationItem-previousNext {
      font-size: 24px;
    }

    .desc {
      margin-top: 16px;
      color: #222;
    }
  }
`;
