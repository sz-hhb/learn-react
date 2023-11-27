import { memo, useState } from "react"
import { BarWrapper } from "./style"
import logo from "@/assets/img/home/logo.svg"
import success from "@/assets/img/home/success.svg"
import { Modal, Avatar, Tooltip } from "antd"
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons"

const HomeBar = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <BarWrapper>
      <div className="container-20">
        <div className="bar-content">
          <div className="logo">
            <img src={logo} alt="" />
            <span className="name">FansMind</span>
          </div>
          <div className="links">
            <div className="link">
              <span>Tech Specs</span>
            </div>
            <div className="link">
              <span>Reviews</span>
            </div>
            <div className="link">
              <span>Pricing</span>
            </div>
            <div className="btns">
              <div className="btn download" onClick={showModal}>
                <span>DOWNLOAD</span>
              </div>
              <div className="btn buy-now">
                <span>BUY NOW</span>
              </div>
            </div>
          </div>
          <Avatar.Group>
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <a href="https://ant.design">
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            </a>
            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{ backgroundColor: "#1677ff" }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        </div>
      </div>
      <Modal
        title=""
        okText="关闭页面"
        cancelText="继续编辑"
        wrapClassName="save-finish"
        destroyOnClose={true}
        getContainer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img src={success} alt="" />
        <div className="save-success">详情保存成功！</div>
      </Modal>
    </BarWrapper>
  )
})

export default HomeBar
