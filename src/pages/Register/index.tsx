import { Form, Space, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import { UserAddOutlined } from '@ant-design/icons'
import styles from './Register.module.scss'

const Register = () => {
  const onFinish = (values: unknown) => {
    console.log('Success:', values)
  }

  return (
    <div className={styles.content}>
      <h1>
        <Space>
          <UserAddOutlined />
          注册新用户
        </Space>
      </h1>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: '请输入用户名!' },
            { type: 'string', min: 6, max: 12, message: '请输入6-12位的用户名!' },
            { pattern: /^\w+$/, message: '用户名只能输入数字字母下划线!' },
            { whitespace: true, message: '不能输入空格!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '密码不能为空!' },
            { type: 'string', min: 6, max: 12, message: '请输入6-12位的密码!' },
            { whitespace: true, message: '不能输入空格!' },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="aginPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: '请确认密码!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value && getFieldValue('password')) {
                  return Promise.resolve()
                } else {
                  return Promise.reject(new Error('两次密码不一致'))
                }
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item validateStatus={'error'} help="sasdasd" label="昵称" name="nickname">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
            <Link to={'/login'}>已有账户，登录</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
