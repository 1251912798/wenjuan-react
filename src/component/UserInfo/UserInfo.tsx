import { Button, message, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { Link, useNavigate } from 'react-router-dom'

import { LOGIN_PATH } from '@/router'
import { removeToken } from '@/utils/user-token'
import useGetUserInfo from '@/hooks/useGetUserInfo'
import { useDispatch } from 'react-redux'
import { loginOut } from '@/store/userSlice'

const UserInfo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // 获取用户信息
  const { username, nickname } = useGetUserInfo()

  // 退出登录
  const onLoginOut = () => {
    dispatch(loginOut())
    removeToken()
    message.success('退出登录成功')
    navigate(LOGIN_PATH)
  }

  const LoggedIn = (
    <div style={{ textAlign: 'right' }}>
      <Space style={{ color: '#fff' }}>
        <UserOutlined style={{ color: '#fff' }} />
        {nickname || username}
      </Space>
      <Button type="link" onClick={onLoginOut}>
        退出
      </Button>
    </div>
  )

  const LoggedOut = <Link to={LOGIN_PATH}>登录</Link>

  return <>{username ? LoggedIn : LoggedOut}</>
}

export default UserInfo
