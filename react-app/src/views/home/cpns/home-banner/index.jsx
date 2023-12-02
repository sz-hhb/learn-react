import { memo, useEffect, useState } from "react"
import { BannerWrapper } from "./style"
import { Input } from "antd"

const HomeBanner = memo(() => {
  const [show, setShow] = useState(true)
  const [time, setTime] = useState({
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0,
    secondsLeft: 0
  })
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const fullName = firstName + " " + lastName

  function countdown() {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const date = new Date().getDate()
    const targetDate = new Date(year, month, date, 22)

    function updateCountdown() {
      const now = new Date()
      const remainingTime = targetDate - now

      if (remainingTime <= 0) {
        setShow(false)
      } else {
        setTime({
          daysLeft: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
          hoursLeft: Math.floor(
            (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutesLeft: Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
          ),
          secondsLeft: Math.floor((remainingTime % (1000 * 60)) / 1000)
        })
      }

      requestAnimationFrame(updateCountdown)
    }

    requestAnimationFrame(updateCountdown)
  }

  useEffect(() => {
    countdown()
  }, [])

  return (
    <BannerWrapper>
      {show && (
        <div className="banner">
          <div className="banner-content">
            <div className="countdown">
              <div className="title">
                <span>The coupon code expires soon, grab it now!</span>
              </div>
              <div className="time-list">
                <div className="time">
                  <span className="number">
                    {time.daysLeft < 10
                      ? "0" + time.daysLeft
                      : "" + time.daysLeft}
                  </span>
                  <span className="text">DAYS</span>
                </div>
                <div className="square-box">
                  <div className="square"></div>
                  <div className="square"></div>
                </div>
                <div className="time">
                  <span className="number">
                    {time.hoursLeft < 10
                      ? "0" + time.hoursLeft
                      : "" + time.hoursLeft}
                  </span>
                  <span className="text">HRS</span>
                </div>
                <div className="square-box">
                  <div className="square"></div>
                  <div className="square"></div>
                </div>
                <div className="time">
                  <span className="number">
                    {time.minutesLeft < 10
                      ? "0" + time.minutesLeft
                      : "" + time.minutesLeft}
                  </span>
                  <span className="text">MINS</span>
                </div>
                <div className="square-box">
                  <div className="square"></div>
                  <div className="square"></div>
                </div>
                <div className="time">
                  <span className="number">
                    {time.secondsLeft < 10
                      ? "0" + time.secondsLeft
                      : "" + time.secondsLeft}
                  </span>
                  <span className="text">SECS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Please input your firstName"
      />
      <Input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Please input your lastName"
      />
      {fullName}
    </BannerWrapper>
  )
})

export default HomeBanner
