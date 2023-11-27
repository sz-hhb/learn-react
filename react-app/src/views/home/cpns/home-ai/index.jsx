import { memo } from "react"
import { AIWrapper } from "./style"
import { Col, Row } from "antd"
import boSvg from "@/assets/img/home/bo.svg"

const HomeAI = memo(() => {
  const aiCreativity = [
    {
      label: "Brainstorming",
      text: "EdrawMax has a godsad asd asdkla asdasld skadla templates for all diagram types, cross-platform compatibility, and a user-friendly interface"
    },
    {
      label: "Brainstorming",
      text: "EdrawMax has templates for all diagram types, cross-platform compatibility, and a user-friendly interface"
    },
    {
      label: "Brainstorming",
      text: "EdrawMax has templates for all diagram types, cross-platform compatibility, and a user-friendly interface"
    },
    {
      label: "Brainstorming",
      text: "EdrawMax has templates for all diagram types, cross-platform compatibility, and a user-friendly interface"
    }
  ]

  return (
    <AIWrapper>
      <div className="title">
        <span>AI Empowers Creativity</span>
      </div>
      <div className="container-20">
        <div className="ai">
          <Row gutter={40}>
            {aiCreativity.map((item, index) => {
              return (
                <Col xl={6} key={index}>
                  <div className="ai-item">
                    <img src={boSvg} alt="" />
                    <div className="label">
                      <span>{item.label}</span>
                    </div>
                    <div className="text">
                      <span>{item.text}</span>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </AIWrapper>
  )
})

export default HomeAI
