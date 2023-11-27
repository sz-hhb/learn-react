import { memo } from "react"
import { Carousel } from "antd"
import { CommentsWrapper } from "./style.js"
import quote from "@/assets/img/home/quote.svg"

const HomeComments = memo(() => {
  return (
    <CommentsWrapper>
      <div className="title">
        <span>User Comments</span>
      </div>
      <div className="container-20">
        <Carousel autoplay autoplaySpeed={5000}>
          <div className="carousel-item">
            <img src={quote} alt="" />
            <div className="comment">
              <span>
                AI-powered tools for producing product images have become
                essential in the competitive e-commerce landscape. They enable
                businesses to enhance the quality and consistency of their
                product visuals, leading to improved customer engagement and
                conversion rates.
              </span>
            </div>
            <div className="user-name">
              <span>— — Rachel Bennett</span>
            </div>
          </div>
          <div className="carousel-item">
            <img src={quote} alt="" />
            <div className="comment">
              <span>
                AI-powered tools for producing product images have become
                essential in the competitive e-commerce landscape. They enable
                businesses to enhance the quality and consistency of their
                product visuals, leading to improved customer engagement and
                conversion rates. dasd asdhkjfh jfhsakf sdjfh kasf hskja hfsakjf
                has
              </span>
            </div>
            <div className="user-name">
              <span>— — Rachel Bennett</span>
            </div>
          </div>
          <div className="carousel-item">
            <img src={quote} alt="" />
            <div className="comment">
              <span>
                AI-powered tools for producing product images have become
                essential in the competitive e-commerce landscape. They enable
                businesses to enhance the quality and consistency of their
                product visuals, leading to improved customer engagement and
                conversion rates.
              </span>
            </div>
            <div className="user-name">
              <span>— — Rachel Bennett</span>
            </div>
          </div>
        </Carousel>
      </div>
    </CommentsWrapper>
  )
})

export default HomeComments
