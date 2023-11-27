import { memo } from "react"
import FeaturesWrapper from "./style"
import { Col, Row } from "antd"

const HomeFeatures = memo(() => {
  const featureList = [
    [
      {
        title: "Video Cropping",
        subTitle:
          "You can change the video ratio to make it compatible with different social media platforms."
      },
      {
        title: "Audio Editor",
        subTitle: "You can cut the audio or change its speed, etc."
      }
    ],
    [
      {
        title: "Freeze Frame",
        subTitle: "Create a still image for emphasis by freezing any frame."
      },
      {
        title: "Video Stablization",
        subTitle:
          "Reduce video shake or jitter easily with the feature of video stablization."
      }
    ]
  ]

  const getColSpan = (indexX, indexY) => {
    if (indexX % 2 === 0) {
      return indexY % 2 === 0 ? 16 : 8
    } else {
      return indexY % 2 === 0 ? 8 : 16
    }
  }

  return (
    <FeaturesWrapper>
      <div className="title">
        <span>More Features & More Possibilities</span>
      </div>
      <div className="subTitle">
        <span>
          Lots of effective video-editing tools are also provided by HitPaw
          Edimakor (Video Editor) for editing videos quickly and smoothly.
        </span>
      </div>
      <div className="feature-content">
        <div className="container-20">
          {featureList.map((feature, indexX) => {
            return (
              <Row gutter={40} key={indexX}>
                {feature.map((item, indexY) => {
                  return (
                    <Col xl={getColSpan(indexX, indexY)} key={indexY}>
                      <div className="content">
                        <div className="content-title">
                          <span>{item.title}</span>
                        </div>
                        <div className="content-subtitle">
                          <span>{item.subTitle}</span>
                        </div>
                        <div className="img-cover"></div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            )
          })}
        </div>
      </div>
    </FeaturesWrapper>
  )
})

export default HomeFeatures
