import { memo } from "react"
import { StepWrapper } from "./style"
import IconPC from "@/assets/svg/icon-pc"

const HomeStep = memo(() => {
  const stepList = [
    {
      label: "Upload Your Files",
      desc: "Click the “+” button to select media files or drag and drop files to upload to the program."
    },
    {
      label: "Select One Feature",
      desc: "Choose video and sound effects in media library and apply them to the videos, and adjust parameters at the property panel."
    },
    {
      label: "Export The Video",
      desc: "Click the export button to change some settings before final exporting."
    }
  ]

  return (
    <StepWrapper>
      <div className="title">
        <span>Product Operation Steps</span>
      </div>
      <div className="container-20">
        <div className="content">
          <div className="step">
            {stepList.map((item, index) => {
              return (
                <div className="step-item" key={index}>
                  <div className="num-intro">
                    <div className="num">
                      <span>
                        {index + 1 < 10 ? "0" + (index + 1) : "" + (index + 1)}
                      </span>
                    </div>
                    <div className="intro">
                      <div className="label">
                        <span>{item.label}</span>
                      </div>
                      <div className="desc">
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="img-cover">
            <div className="img"></div>
          </div>
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
      </div>
    </StepWrapper>
  )
})

export default HomeStep
