import { memo } from "react"
import { HomeWrapper } from "./style"
import { Col, Row } from "antd"
import img from "@/assets/img/home/recom-info1.png"
import HomeForm from "./cpns/home-form"
import HomeBanner from "./cpns/home-banner"

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="item embed-responsive embed-responsive-video">
              <img src={img} alt="" />
            </div>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col xs={24} sm={24} md={8}>
            <div className="item embed-responsive embed-responsive-16by9">
              <img src={img} alt="" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <div className="item embed-responsive embed-responsive-16by9">
              <img src={img} alt="" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <div className="item embed-responsive embed-responsive-16by9">
              <img src={img} alt="" />
            </div>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col xs={24} sm={24} md={12}>
            <div className="item embed-responsive embed-responsive-16by9">
              <img src={img} alt="" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className="item embed-responsive embed-responsive-16by9">
              <img src={img} alt="" />
            </div>
          </Col>
        </Row>
      </div>
      <HomeForm />
    </HomeWrapper>
  )
})

export default Home
