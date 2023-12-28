import { getUserInfoApi } from '@/api/user'
import { Button, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { useRequest } from 'ahooks'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_PATH } from '@/router'
import { removeToken } from '@/utils/user-token'

const UserInfo = () => {
  const navigate = useNavigate()
  const { data } = useRequest(getUserInfoApi)
  const { username, nickname } = data || {}

  // 退出登录
  const onLoginOut = () => {
    removeToken()
    message.success('退出登录成功')
    navigate(LOGIN_PATH)
  }

  const LoggedIn = (
    <div style={{ textAlign: 'right' }}>
      <span style={{ color: '#fff' }}>
        <UserOutlined style={{ color: '#fff' }} />
        {nickname}
      </span>
      <Button type="link" onClick={onLoginOut}>
        退出
      </Button>
    </div>
  )

  const LoggedOut = <Link to={LOGIN_PATH}>登录</Link>

  return <>{username ? LoggedIn : LoggedOut}</>
}

export default UserInfo
