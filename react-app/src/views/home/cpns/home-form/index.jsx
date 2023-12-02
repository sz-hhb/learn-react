import { memo } from "react"
import { FormWrapper } from "./style.js"
import { Button, Checkbox, Form, Input, Radio } from "antd"

const onFinish = (values) => {
  console.log("Success:", values)
}
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo)
}

const HomeForm = memo(() => {
  return (
    <FormWrapper>
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        style={{
          maxWidth: 600
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            },
            {
              pattern: /^.{7,}$/,
              message: "password length must large than 6!"
            }
          ]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item
          label="Fruit"
          name="fruit"
          rules={[
            {
              required: true,
              message: "Please select your like fruit!"
            }
          ]}
        >
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  )
})

export default HomeForm
