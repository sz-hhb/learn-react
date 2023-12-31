import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;

  return (
    <ItemWrapper
      verifyColor={itemData.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating}
            readOnly
            size="small"
            precision={0.1}
            sx={{ fontSize: "12px", color: "#00848a" }}
          />
          <span className="comment">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <div className="extra">·{itemData.bottom_info?.content}</div>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
