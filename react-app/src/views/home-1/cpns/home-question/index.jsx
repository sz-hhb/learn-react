import { memo, useEffect, useRef, useState } from "react"
import { QuestionWrapper } from "./style"
import IconArrowBottom from "@/assets/svg/icon-arrow-bottom"
import classNames from "classnames"

const HomeQuestion = memo(() => {
  const [active, setActive] = useState(1)
  const [height, setHeight] = useState(0)

  const questionList = [
    {
      id: 1,
      question:
        "What are the differences between the 4 modes of Fast Cutting ?",
      answer:
        "There are two free features with FixGo’s trial version: Enter Recovery Mode and Exit Recovery Mode. With just one click, you can enter or exit recovery mode without operating your device. The final stage when using Standard Mode and Advanced Mode is limited to the full version, due to the special feature which enables you to fix your iOS system issues. The free trial will still enable you to check FixGo’s compatibility with your device and to try out the process prior to purchasing the full version to fix your device."
    },
    {
      id: 2,
      question:
        "What are the differences between the 4 modes of Fast Cutting ?",
      answer:
        "There are two free features with FixGo’s trial version: Enter Recovery Mode and Exit Recovery Mode. With just one click, you can enter or exit recovery mode without operating your device. The final stage when using Standard Mode and Advanced Mode is limited to the full version, due to the special feature which enables you to fix your iOS system issues. The free trial will still enable you to check FixGo’s compatibility with your device and to try out the process prior to purchasing the full version to fix your device."
    },
    {
      id: 3,
      question:
        "What are the differences between the 4 modes of Fast Cutting ?",
      answer:
        "There are two free features with FixGo’s trial version: Enter Recovery Mode and Exit Recovery Mode. With just one click, you can enter or exit recovery mode without operating your device. The final stage when using Standard Mode and Advanced Mode is limited to the full version, due to the special feature which enables you to fix your iOS system issues. The free trial will still enable you to check FixGo’s compatibility with your device and to try out the process prior to purchasing the full version to fix your device."
    },
    {
      id: 4,
      question:
        "What are the differences between the 4 modes of Fast Cutting ?",
      answer:
        "There are two free features with FixGo’s trial version: Enter Recovery Mode and Exit Recovery Mode. With just one click, you can enter or exit recovery mode without operating your device. The final stage when using Standard Mode and Advanced Mode is limited to the full version, due to the special feature which enables you to fix your iOS system issues. The free trial will still enable you to check FixGo’s compatibility with your device and to try out the process prior to purchasing the full version to fix your device."
    }
  ]
  const answerRef = useRef([])

  useEffect(() => {
    setHeight(answerRef.current[active]?.children[0].offsetHeight)
  }, [active])

  const handleTitleClick = (id) => {
    setActive(id)
  }

  return (
    <QuestionWrapper>
      <div className="title">
        <span>FAQS about FansMind</span>
      </div>
      <div className="container-20">
        <div className="question-wrapper">
          {questionList.map((item, index) => {
            return (
              <div
                key={item.id}
                className={classNames("question-content", {
                  active: active === item.id
                })}
              >
                <div
                  className="question-title"
                  onClick={() => handleTitleClick(item.id)}
                >
                  <span>
                    {index + 1}. {item.question}
                  </span>
                  <IconArrowBottom />
                </div>
                <div
                  className="answer"
                  ref={(f) => {
                    answerRef.current[item.id] = f
                  }}
                  style={{
                    height: active === item.id ? height : ""
                  }}
                >
                  <span>{item.answer}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </QuestionWrapper>
  )
})

export default HomeQuestion
