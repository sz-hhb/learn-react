import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const SectionV1 = memo((props) => {
  const { infoData } = props;

  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomLists={infoData.list} />
    </SectionV1Wrapper>
  );
});

SectionV1.propTypes = {
  infoData: PropTypes.object,
};

export default SectionV1;
