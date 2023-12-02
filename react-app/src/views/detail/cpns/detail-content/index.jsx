import { memo } from "react"
import { ContentWrapper } from "./style"

const DetailContent = memo(() => {
  return (
    <ContentWrapper>
      <div className="container">
        <div className="menus-wrap">
          <div className="menus-content">
            <div className="title">
              <span>Content</span>
            </div>
            <div className="step-content">
              <div
                className="step"
                onClick={() => window.location.replace("#part1")}
              >
                <span>Part 1: Fix iOS Issues in Standard Mode</span>
              </div>
              <div
                className="step"
                onClick={() => window.location.replace("#part2")}
              >
                <span>Part 2: Fix System Issues in Advanced Mode</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <h1 id="part1">Part 1: Fix iOS Issues in Standard Mode</h1>
          <p>Select the Standard Mode from the options on the main page.</p>
          <h2>Step 1: Connect the Device to the Computer</h2>
          <p>
            Connect the faulty iOS device to the computer using the device’s
            lightning cable and click “Fix Now” to begin. If the program fails
            to detect the device, FixGo will recommend that you put the device
            in recovery mode and guide you on how to do it. If the device is
            still not detected even when in recovery mode, you will need to
            click “Enter DFU Mode” to put the device in DFU mode.
          </p>
          <div className="img"></div>
          <h1 id="part2">Part 2: Fix iOS Issues in Standard Mode</h1>
          <p>Select the Standard Mode from the options on the main page.</p>
          <h2>Step 1: Connect the Device to the Computer</h2>
          <p>
            Connect the faulty iOS device to the computer using the device’s
            lightning cable and click “Fix Now” to begin. If the program fails
            to detect the device, FixGo will recommend that you put the device
            in recovery mode and guide you on how to do it. If the device is
            still not detected even when in recovery mode, you will need to
            click “Enter DFU Mode” to put the device in DFU mode.
          </p>
          <p>
            Connect the faulty iOS device to the computer using the device’s
            lightning cable and click “Fix Now” to begin. If the program fails
            to detect the device, FixGo will recommend that you put the device
            in recovery mode and guide you on how to do it. If the device is
            still not detected even when in recovery mode, you will need to
            click “Enter DFU Mode” to put the device in DFU mode.
          </p>
          <p>
            Connect the faulty iOS device to the computer using the device’s
            lightning cable and click “Fix Now” to begin. If the program fails
            to detect the device, FixGo will recommend that you put the device
            in recovery mode and guide you on how to do it. If the device is
            still not detected even when in recovery mode, you will need to
            click “Enter DFU Mode” to put the device in DFU mode.
          </p>
          <p>
            Connect the faulty iOS device to the computer using the device’s
            lightning cable and click “Fix Now” to begin. If the program fails
            to detect the device, FixGo will recommend that you put the device
            in recovery mode and guide you on how to do it. If the device is
            still not detected even when in recovery mode, you will need to
            click “Enter DFU Mode” to put the device in DFU mode.
          </p>
          <div className="img"></div>
        </div>
      </div>
    </ContentWrapper>
  )
})

export default DetailContent
