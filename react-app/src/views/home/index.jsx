import { memo } from "react"
import HomeBar from "./cpns/home-bar"
import HomeBanner from "./cpns/home-banner"
import HomeIntro from "./cpns/home-intro"
import HomeFeatures from "./cpns/home-features"
import HomeStep from "./cpns/home-step"
import HomeAI from "./cpns/home-ai"
import HomeComments from "./cpns/home-comments"
import HomeQuestion from "./cpns/home-question"
import HomeDownload from "./cpns/home-download"
import { HomeWrapper } from "./style"

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBar></HomeBar>
      <HomeBanner></HomeBanner>
      <HomeIntro></HomeIntro>
      <HomeFeatures></HomeFeatures>
      <HomeStep></HomeStep>
      <HomeAI></HomeAI>
      <HomeComments></HomeComments>
      <HomeQuestion></HomeQuestion>
      <HomeDownload></HomeDownload>
    </HomeWrapper>
  )
})

export default Home
