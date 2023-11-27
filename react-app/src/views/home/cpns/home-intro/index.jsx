import { memo, useState } from "react"
import classnames from "classnames"
import { IntroWrapper } from "./style"
import intro from "@/assets/img/home/intro.png"
import { Col, Row } from "antd"

const HomeIntro = memo(() => {
  const [active, setActive] = useState(1)

  const labelBtns = [
    { id: 1, label: "Flowchart" },
    { id: 2, label: "Mind map" },
    { id: 3, label: "Network diagram" },
    { id: 4, label: "Floor plan" },
    { id: 5, label: "Org chart" },
    { id: 6, label: "UML diagram" },
    { id: 7, label: "ER diagram" },
    { id: 8, label: "Genogram" }
  ]

  const handleItemClick = (id) => {
    setActive(id)
  }

  return (
    <IntroWrapper>
      <div className="title">
        <span>Unlock diagram possibilities.</span>
      </div>
      <div className="subTitle">
        <span>
          EdrawMax has templates for all diagram types, cross-platform
          compatibility, and a user-friendly interface, making diagramming easy
          for everyone.
        </span>
      </div>
      <div className="intro-wrap">
        <div className="container-10">
          <Row gutter={20}>
            <Col span={4}>
              <div className="btns">
                {labelBtns.map((item) => {
                  return (
                    <div
                      className={classnames("btn-item", {
                        active: active === item.id
                      })}
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                    >
                      {item.label}
                    </div>
                  )
                })}
              </div>
            </Col>
            <Col span={20}>
              <div className="content">
                <img src={intro} alt="" />
                <div className="text">
                  {labelBtns.find((item) => item.id === active).label}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </IntroWrapper>
  )
})

export default HomeIntro
