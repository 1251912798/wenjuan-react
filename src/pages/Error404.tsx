import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

import { HOME_PATH } from '../router/index'
const Error404 = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="对不起，您访问的页面不存在！"
        extra={
          <Button onClick={() => navigate(HOME_PATH)} type="primary">
            回到首页
          </Button>
        }
      />
    </div>
  )
}

export default Error404
