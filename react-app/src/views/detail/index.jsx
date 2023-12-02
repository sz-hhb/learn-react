import { memo } from "react"
import DetailBanner from "./cpns/detail-banner"
import DetailContent from "./cpns/detail-content"
import { DetailWrapper } from "./style"

const HomeDetail = memo(() => {
  return (
    <DetailWrapper>
      <DetailBanner />
      <DetailContent />
    </DetailWrapper>
  )
})

export default HomeDetail
