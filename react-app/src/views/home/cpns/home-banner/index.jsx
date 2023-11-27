import { memo } from "react"
import { BannerWrapper } from "./style"
import rightSvg from "@/assets/img/home/right.svg"
import windows from "@/assets/img/home/windows.svg"
import mac from "@/assets/img/home/mac.svg"
import ios from "@/assets/img/home/ios.svg"
import android from "@/assets/img/home/android.svg"
import IconPC from "@/assets/svg/icon-pc"
import banner from "@/assets/img/home/banner2.png"

const HomeBanner = memo(() => {
  const introList = [
    "Totally free to enter and exit Android fastboot mode by one click.",
    "Enter and exit Android recovery mode. Free and simple operation.",
    "Free to enter and exit Android download (odin) mode.",
    "Fix 50+ Android system issues like stuck on Samsung logo, app crashing, black screen, and so on."
  ]

  return (
    <BannerWrapper>
      <div className="intro">
        <div className="title">Your Freedom to Creativity</div>
        <div className="list">
          {introList.map((item, index) => {
            return (
              <div className="list-item" key={index}>
                <img src={rightSvg} alt="" />
                <span className="text">{item}</span>
              </div>
            )
          })}
        </div>
        <div className="btns">
          <div className="btn download">
            <IconPC />
            <span>Free Download</span>
          </div>
          <div className="btn buy-now">
            <span>Buy Now</span>
          </div>
        </div>
        <div className="available">
          <div className="text">
            <span>Available：</span>
          </div>
          <div className="icon">
            <img src={windows} alt="" />
            <img src={mac} alt="" />
            <img src={ios} alt="" />
            <img src={android} alt="" />
          </div>
        </div>
      </div>
      <div className="img-cover">
        <img src={banner} alt="" />
      </div>
    </BannerWrapper>
  )
})

export default HomeBanner
