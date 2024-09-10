import { UserOutlined } from '@ant-design/icons'
import { Space, Button, Checkbox, Form, Input, message } from 'antd'
import { Link } from 'react-router-dom'
import { useForm } from 'antd/es/form/Form'
import { useEffect } from 'react'
import { LoginApi } from '@/api/user'
import { setToken } from '@/utils/user-token'
import { REGISTER_PATH } from '../../router/index'
import styles from '../Register/Register.module.scss'
import { useRequest } from 'ahooks'

const Login = () => {
  const [form] = useForm()

  const removeUser = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
  }

  const setUser = (username: string, password: string) => {
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
  }
  const getUser = () => {
    return {
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password'),
    }
  }

  useEffect(() => {
    const { username, password } = getUser()
    form.setFieldsValue({ username, password })
  }, [])

  // 登录请求
  const { run: onLogin } = useRequest(
    async (values: { username: string; password: string }) => {
      const { username, password } = values
      const data = await LoginApi({ username, password })
      return data
    },
    {
      manual: true,
      onSuccess(result) {
        message.success('登录成功')
        setToken(result.token)
        window.location.href = '/manage/list'
      },
    }
  )

  // 校验成功后，提交表单
  const onFinish = (values: any) => {
    const { remember, username, password } = values || {}
    if (remember) {
      setUser(username, password)
    } else {
      removeUser()
    }
    onLogin({ username, password })
  }

  return (
    <div className={styles.content}>
      <h1>
        <Space>
          <UserOutlined />
          用户登录
        </Space>
      </h1>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: '请输入用户名!' },
            { type: 'string', min: 6, max: 12, message: '请输入6-12位的用户名!' },
            { pattern: /^\w+$/, message: '用户名只能输入数字字母下划线!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Link to={REGISTER_PATH}>注册新用户</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
