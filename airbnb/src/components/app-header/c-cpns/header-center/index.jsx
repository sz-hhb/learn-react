import React, { memo } from "react";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="text">探索房源和体验</div>
      <div className="icon">
        <IconSearchBar />
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
