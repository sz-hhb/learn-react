import { memo } from "react"
import { BannerWrapper } from "./style"

const DetailBanner = memo(() => {
  return (
    <BannerWrapper>
      <div className="banner-content">
        <div className="logo"></div>
        <div className="title">
          <span>How to use Fast Cutting</span>
        </div>
      </div>
    </BannerWrapper>
  )
})

export default DetailBanner
