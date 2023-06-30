import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 25%;
  padding: 8px;
  box-sizing: border-box;

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    box-sizing: border-box;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.textColor.primaryColor};

    .comment {
      margin: 0 2px 0 4px;
    }

    .MuiRating-icon {
      margin-right: -2px;
    }
  }
`;
