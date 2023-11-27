import { memo } from "react"
import { DownloadWrapper } from "./style.js"
import { Col, Row } from "antd"
import IconPC from "@/assets/svg/icon-pc"

const HomeDownload = memo(() => {
  return (
    <DownloadWrapper>
      <div className="container-20">
        <Row gutter={40} align="middle">
          <Col xs={24} sm={24} md={12}>
            <div className="img-cover">
              <div className="img"></div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className="get-now">
              <div className="title">
                <span>
                  Get <span className="product-name">FansMind</span> Now
                </span>
              </div>
              <div className="subtitle">
                <span>
                  The complete game-changer for businesses seeking to elevate
                  your product imagery to new heights.
                </span>
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
          </Col>
        </Row>
      </div>
    </DownloadWrapper>
  )
})

export default HomeDownload
