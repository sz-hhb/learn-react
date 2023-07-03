import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const SectionV2 = memo((props) => {
  const { infoData } = props;

  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);
  const tabClickHandle = useCallback(function (index, item) {
    setName(item);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomLists={infoData.dest_list?.[name]} itemWidth="33.33%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

SectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default SectionV2;
