import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomLists = [], itemWidth } = props;

  return (
    <RoomsWrapper className="room-list">
      {roomLists.slice(0, 8)?.map((item) => {
        return <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomLists: PropTypes.array,
};

export default SectionRooms;
