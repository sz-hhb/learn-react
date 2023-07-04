import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-lists">
        <ScrollView>
          {infoData.list.map((item) => {
            return <RoomItem key={item.id} itemData={item} itemWidth="20%" />;
          })}
        </ScrollView>
      </div>
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
